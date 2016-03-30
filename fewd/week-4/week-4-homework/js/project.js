function changeColor() {
	var red = document.getElementById("red").value;
	var green = document.getElementById("green").value;
	var blue = document.getElementById("blue").value;
	var newColor = "rgb(" + red + "," + green + "," + blue + ")";
	
	document.body.style.backgroundColor = newColor;
	document.getElementById("colorfultext").innerHTML = newColor;
}

document.getElementById("colorbutton").onclick = changeColor;