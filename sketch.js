let showSplash = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (showSplash) {
    // Splash screen
    background(10, 90, 50);

    fill(255);
    textAlign(CENTER, CENTER);

    textSize(36);
    text("BUILD YOUR JOURNEY", width / 2, height / 2 - 20);

    textSize(18);
    text("Click anywhere to start", width / 2, height / 2 + 20);
  } else {
    // Main screen
    background(100, 10, 90);

    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Welcome to the game!", width / 2, height / 2);
  }
}

function mousePressed() {
  showSplash = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
