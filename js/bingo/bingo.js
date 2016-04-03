$(document).ready(function() {

//array with the content for the bingo squares
var boxContent = [
	"I'll buy it tomorrow",
	"Hello...",
	"Namely",
	"wat.",
	"this is totally legal",
	"we're doing it live",
	"I'm gonna get fired",
	"whurt der furk",
	"duck programming",
	"uhhh... gentlemen?"
	];

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

//variable to store the number of items in the winners array
var bingoCombos = winners.length;

//array to store the boxes that have been clicked
var matched = [];



// load the page with ready-to-play bingo squares
generateCard();

function generateCard() {

	//shuffle the contents of the array:
	function randomizeContent() {
		var randomIndex;
		var temp;
		//a backwards for loop that starts at the end of the array
		for (var i = boxContent.length - 1; i >= 0; i--) { 
		    randomIndex = Math.floor(Math.random() * i);
		    temp = boxContent[i];
		    boxContent[i] = boxContent[randomIndex];
		    boxContent[randomIndex] = temp;
		}
	}

	randomizeContent();

	//loop through the box numbers
	for (var j = 0; j < boxContent.length; j++) {
		//load up the squares with the newly shuffled array
		$("#gamecard-1 #box" + j).html(boxContent[j]);
	}

}

//both buttons will Clear the card and remove matched elements
$("input").click(function() {
	clearCard();
});

//the newCard button also rolls a new bingo card
$("input[name = 'newCard']").on("click", function() {
	generateCard();
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

				//if there are 3 matches...
				if(matches == 3) {
					alert("bingo!");
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









// 1. create second bingo board
// 2. create a button that when you click it 
// 	1. displays one of the items from the bingo array
// 	2. crosses off that item on the bingo boards
// 	3. remove that item from the bingo array so it doesn't get called again
// 	4. runs a function that checks if either of the bingo boards have a complete row checked off (this will be its own step becuase it is big!)
// 3. bingo board checker mentioned above.
// 4. do some action if one of the boards is the winner
// more ideas:
// add a scoreboard with firebase
// allow users to input ideas into the bingo card array
// what happens when a user wins? play again?







});
