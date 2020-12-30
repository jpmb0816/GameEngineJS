// Initialize game engine
const engine = new GameEngine();

// Add keydown event listener
window.addEventListener('keydown', function(evt) {
	engine.keyState[evt.keyCode] = true;
});

// Add keyup event listener
window.addEventListener('keyup', function(evt) {
	engine.keyState[evt.keyCode] = false;
});

// Start the game engine
engine.start();