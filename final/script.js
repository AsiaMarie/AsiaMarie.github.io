var currentRoom = "start";
var commands    = ["go", "inventory", "pickup", "look", "talk"];
var inventory   = [ ];

function changeRoom(dir){
	if(rooms[currentRoom].directions[dir] !== undefined){
		currentRoom = rooms[currentRoom].directions[dir];
		$('#gameText').append("<p>" + rooms[currentRoom].description + "</p>");
	}
	else {
		$('#gameText').append("<p> <b>AN INVISIBLE FORCE PREVENTS YOU FROM GOING THAT WAY.</b></p>");
	}
}




function showHelp(){
	$('#gameText').append("<p><b>Here are possible commands: </b></p>");
	$('#gameText').append("<p><ul>");
	for(var i = 0; i < commands.length; i++){
		$('#gameText').append("<li>" + commands[i] + "</li>");
	}
	$('#gameText').append("</ul></p>");
}




function showInventory(){
	if(inventory.length === 0){
		$('#gameText').append("<p><b> You are not carrying anything.</b></p>");
		return;
	}
	$('#gameText').append("<p><b> Inventory: </b></p>");
	$('#gameText').append("<p><ul>");
	for(var i = 0; i < inventory.length; i++){
		$('#gameText').append("<li>" + inventory[i] + "</li>");
	}
	$('#gameText').append("</ul></p>");
}



function playerInput(input){
	var command = input.split(" ")[0];
	switch(command) {
				case "go":
					var dir = input.split(" ")[1]
					changeRoom(dir);
					break;
				case "help":
					showHelp();
					break;
				case "pickup":
					pickupItem();
					break;
				case "inventory":
					showInventory();
					break;
				default:
				$('#gameText').append("<p><b>INVALID COMAND</b></p>");


			}
		}

$(document).ready(function(){
	$('#gameText').append("<p>" + rooms.start.description + "</p>");

	$(document).keypress(function(key){
		if (key.which === 13 && $('#userInput').is(':focus')){
			var value = $('#userInput').val().toLowerCase();
			$('#userInput').val("");
			playerInput(value);
			
		}
	})
})