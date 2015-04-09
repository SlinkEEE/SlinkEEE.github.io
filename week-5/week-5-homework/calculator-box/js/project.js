var count = 0;

document.getElementById("a10").onclick = counta10;
function counta10() {
	count = count + 10;
}

document.getElementById("a20").onclick = counta20;
function counta20() {
	count = count + 20;
}

document.getElementById("a30").onclick = counta30;
function counta30() {
	count = count + 30;
}

document.getElementById("n10").onclick = countn10;
function countn10() {
	count = count - 10;
}

document.getElementById("n20").onclick = countn20;
function countn20() {
	count = count - 20;
}

document.getElementById("n30").onclick = countn30;
function countn30() {
	count = count - 30;
}

document.getElementById("red").onclick = changeRed;
function changeRed() {
	document.getElementById("out").style.backgroundColor = "red";
	document.getElementById("out").style.color = "white";
}

document.getElementById("blue").onclick = changeBlue;
function changeBlue() {
	document.getElementById("out").style.backgroundColor = "blue";
	document.getElementById("out").style.color = "white";
}

document.getElementById("out").onclick = reset;
function reset() {
	count = 0;
	document.getElementById("out").style.backgroundColor = "white";
	document.getElementById("out").style.color = "black";
}

document.getElementById("app").onclick = update;
function update() {
	document.getElementById("out").innerHTML = count;
}