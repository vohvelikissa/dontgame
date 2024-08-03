const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var stateOfTheGame = 0;
var timeUntilGameStarts = 100;
var backupTime = 100;
var bruhdirection = "down"
function mainMenuScreen() {
	ctx.fillStyle = "#000000";
	console.log("you are supposed to be in main menu");
	ctx.font = "20px Georgia";
	ctx.fillText("Don't, the game", 10, 50);
	ctx.fillText("Your game starts in "+timeUntilGameStarts, 10, 80);
	timeUntilGameStarts--;
	if(timeUntilGameStarts<=0) {
		stateOfTheGame = 2;
	}
}
function judgementScreen() {
	ctx.fillStyle = "#000000";
	console.log("you are supposed to be in judgement screen");
	ctx.font = "20px Georgia";
	ctx.fillText("Be judged. You probably were no good.", 10, 50);
	timeUntilGameStarts--;
	if(timeUntilGameStarts<=0) {
		stateOfTheGame = 3;
	}
}
//TODO: Normal movement
function normalMovementScreen() {
	ctx.fillStyle = "#000000";
	console.log("you are supposed to be in normal movement");
	//TODO: make the character move
	const brotherman = document.getElementById("bruhdown");
	ctx.drawImage(brotherman, 300, 300);
	//TODO: make the game end
	//TODO: make the bad stuff spawn
	//TODO: make the good stuff spawn
	//TODO: make the prompts
}
function creditScreen() {
	ctx.fillStyle = "#000000";
	console.log("you are supposed to be in credits screen");
	ctx.font = "20px Georgia";
	ctx.fillText("Game over",10,50);
	timeUntilGameStarts = backupTime;
	stateOfTheGame = 0;
}
function screenSelector() {
	if(stateOfTheGame == 0) {
		mainMenuScreen();
	} else if (stateOfTheGame == 1) {
		judgementScreen();
	} else if (stateOfTheGame == 2) {
		normalMovementScreen();
	} else if (stateOfTheGame == 3) {
		creditScreen();
	}
}
function clearScreen() {
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(0,0,999,999);
}
function gameLoop() {
	clearScreen();
	screenSelector();
	console.log("loopdy loop :D");
	requestAnimationFrame(gameLoop);
}
gameLoop();
