// Create a Pixi Application
const app = new PIXI.Application({
	width: window.innerWidth,   // width of the canvas
	height: window.innerHeight, // height of the canvas
	backgroundColor: 0xFFFFFF,  // background color of the canvas
});

// Add the Pixi canvas to the HTML document
document.body.appendChild(app.view);

//TODO: main menu
//TODO: decision screen
//TODO: moving in map
//TODO: the good or bad things moving in map
//TODO: judgement screen
//TODO: credits screen

// Resize the Pixi application when the window is resized
window.addEventListener('resize', () => {
	app.renderer.resize(window.innerWidth, window.innerHeight);
});
