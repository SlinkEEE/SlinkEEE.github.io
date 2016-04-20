$(document).ready(function() {

//begone, the success/fail messages
$("#success").hide();
$("#fail").hide();

//sup firebase
var firebase = new Firebase("https://torrid-torch-2510.firebaseIO.com");

//amazing starter content for the squares
var boxContent = [
	"centers of excellence",
	"ecosystem",
	"soup to nuts",
	"marinate",
	"unpack",
	"mindshare",
	"mission-critical",
	"talking out loud",
	"run it up the flagpole",
	"open kimono",
	];

generateCard();

//array containing arrays of all the winning combos
//access specific boxes like so: (winners[0][2]) ==> "box2"
var winners = [
	["box0", "box1", "box2"],
	["box3", "box4", "box5"],
	["box6", "box7", "box8"],
	["box0", "box3", "box6"],
	["box1", "box4", "box7"],
	["box2", "box5", "box8"],
	["box0", "box4", "box8"],
	["box2", "box4", "box6"]
];

//store the number of items in the winners array
var bingoCombos = winners.length;

//store the boxes that have been clicked
var matched = [];

//store the score count
var scoreCount = 0;

function generateCard() {

	//Fisher-Yates-thingy to shuffle the content array
	function randomizeContent() {
		var randomIndex;
		var temp;
		//a backwards loop that starts at the end of the array
		for (var i = boxContent.length - 1; i >= 0; i--) { 
		    //pick a random array item
		    randomIndex = Math.floor(Math.random() * i);
		    //swap item[i] with the random array item
		    temp = boxContent[i];
		    boxContent[i] = boxContent[randomIndex];
		    boxContent[randomIndex] = temp;
		}
	}

	randomizeContent();

	//loop through the box numbers
	for (var j = 0; j < boxContent.length; j++) {
		//load up the squares with the newly shuffled array
		$("#gamecard #box" + j).html(boxContent[j]);
	}
}

//the clearCard button removes matched boxes
$("input[name = 'clearCard']").click(function() {
	clearCard();
});

//the newCard button also rolls a new bingo card
$("input[name = 'newCard']").on("click", function() {
	clearCard();
	generateCard();
});

//OMG the submit button...
$("#submit").click(function() {
	if($("#userContent").val() !== "") {
		var userContent = $("#userContent").val();

		//let's fake some RegEx, that should be fun
		var allowedCharacters = /^[a-zA-Z0-9-''"",? ]*$/;

		//check if input is too weird to allow
		if(allowedCharacters.test(userContent) == false) {
			$("#userContent").val("");
			$("#fail").fadeIn(1100).delay(500).fadeOut();
		}
		else {
			//add the new input to firebase
			firebase.push({quote: userContent});

			$("#userContent").val("");
			$("#success").fadeIn(1000).fadeOut();
			}
		};
});

//firebase pushes fabulous new additions to the boxContent array
firebase.on("child_added", function(snapshot) {
	var newContent = snapshot.val();
	boxContent.push(newContent.quote);
});


//when user clicks a box...
$("td").on("click", function() {
	//toggle the box into/out of the matched array
	toggleArrayPush($(this).attr("id"));

	if($(this).hasClass("match")) {
		$(this).removeClass("match");
	}
	else {
		$(this).addClass("match");
			//if the box wasn't already matched...
			//iterate through arrays within the winners array
			for(var i = 0; i < bingoCombos; i++) {
				var matches = 0;

				//iterate through the items in each array within the winners array	
				for(var j = 0; j < 3; j++) {
					//check to see if the winners array contains the values in the matched array
					if($.inArray(winners[i][j], matched) > -1) {
						matches++;
					}
				}

				//HOLLA if there are 3 matches...
				if(matches == 3) {
					alert("bingo!");
					scoreCount++;
					
					$("#score").html(scoreCount);

					clearCard();
					generateCard();
				}
			}
	}
});

//add/remove boxes from the "matched" array
function toggleArrayPush(value) {
    var index = matched.indexOf(value);
    if(index === -1) {
        matched.push(value);
    }
    else {
        matched.splice(index, 1);
    }
};

function clearCard() {
	$("td").removeClass("match");
	matched = [];
}


});

