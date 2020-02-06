// this is a self invoking anonymous function
// also called an IIFE

//console.log('hello from javaScript!');

// find elements in the Document
// querySelectorAll is for multiple objects
// querySelector is for a single object

// function changeColor() {
	//allIcons.textContent = "What is up? I am Script"; }

//allIcons.forEach(item => item.addEventListener("click",changeColor));
 
//  document.querySelector('h1').textContent = "What is up? I am Scrript"

//  (() => { })();

	//allIcons = document.querySelectorAll(".svg"),
	//allIcons = document.getElementsByClassName(".cls-1"),

	//allSVGs = document.querySelectorAll(".svg"),


(() => {


let // this is a variable
	allIcons = document.querySelectorAll(".cls-1"),
	iconBG = document.querySelectorAll(".icon"),

	black = document.querySelector(".black"),
	pink = document.querySelector(".pink"),
	yellow = document.querySelector(".yellow"),
	green = document.querySelector(".green"),
	purple = document.querySelector(".purple"),
	blue = document.querySelector(".blue");



// when you click on the icon divs it runs change color function
black.addEventListener("click", changeBlack);
black.addEventListener("click", changeBgBlack);

pink.addEventListener("click", changePink);
pink.addEventListener("click", changeBg);

yellow.addEventListener("click", changeYellow);
yellow.addEventListener("click", changeBg);

green.addEventListener("click", changeGreen);
green.addEventListener("click", changeBg);

purple.addEventListener("click", changePurple);
purple.addEventListener("click", changeBg);

blue.addEventListener("click", changeBlue);
blue.addEventListener("click", changeBg);



// changes color of all icons
function changeBlack() { allIcons.forEach((i) => {
	i.style.fill = '#211830';});
};

function changeBgBlack() { iconBG.forEach((b) => {
	b.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; });
};

function changePink() { allIcons.forEach((i) => {
	i.style.fill = '#FF71CE';});
};

function changeYellow() { allIcons.forEach((i) => {
	i.style.fill = '#FFFB96';});
};

function changeGreen() { allIcons.forEach((i) => {
	i.style.fill = '#05FFA1';});
};

function changePurple() { allIcons.forEach((i) => {
	i.style.fill = '#9D0FFD';});
};

function changeBlue() { allIcons.forEach((i) => {
	i.style.fill = '#22EAE0'; });
};

function changeBg() { iconBG.forEach((a) => {
	a.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; });
};

 
})();
