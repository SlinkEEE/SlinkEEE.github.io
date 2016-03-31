$(document).ready(function() {
  	var firebase = new Firebase("https://slinkeee-js.firebaseIO.com");


	$("#messages-form").submit(function(e) { //submit only works if the item is between form tags
		e.preventDefault();
		//the .find thing is scoped to the form element
		var $messageInput = $(this).find("input[name = 'message']");
		
		firebase.child("messages").push({
	  		text: $messageInput.val(),
	  		votes: 0
	  	})
		
		console.log($messageInput.val());
		$messageInput.val("");
	})

	function getFanMessages() {
		firebase.child("messages").on("value", function(results) {
			var values = results.val();

			//use a for in loop to loop through the keys in each firebase object
			for(var key in values) {
				// console.log(values[key]);
				// $("<p></p>").text(values[key].text).appendTo("body");
				//you could also do this
				var msg = values[key];
				var upvote = $("<button data-id =' " + key + " '>upvote</button>");
				var container = $("<p>" + msg.text + ", " + msg.votes + " votes</p>");

				container.append(upvote);

				upvote.click(function() {
					var msgID = $(this).data("id");
					updateVotes(msgID, values[msgID].votes + 1);
				})

				container.appendTo("body");
			}

		});
	}
	
	function updateVotes(msgID, votes) {
		var ref = new Firebase("https://slinkeee-js.firebaseIO.com/messages/" + msgID);

		ref.update({ votes: votes })

	}


	getFanMessages();



})