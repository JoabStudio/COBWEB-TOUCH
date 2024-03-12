let points = [];
let lineAlpha = 255; // Initial alpha value for lines
let pointAlpha = 255; // Initial alpha value for points

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Draw existing points with fading alpha
  fill(0, pointAlpha);
  noStroke();
  for (let i = 0; i < points.length; i++) {
    ellipse(points[i].x, points[i].y, 1, 1);
  }

  // Set stroke weight for thinner lines
  strokeWeight(0.5);
  
  // Set stroke color to white with fading alpha
  stroke(255, lineAlpha);

  
        for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      // Introduce randomness in drawing lines
      if (random(4) < 0.1) { // Adjust the probability to control randomness
        let xOffset = random(-1, 1); // Introduce random x offset
        let yOffset = random(-1, 1); // Introduce random y offset
        line(points[i].x + xOffset, points[i].y + yOffset, points[j].x + xOffset, points[j].y + yOffset);
      }
    }
  }

  // Gradually reduce alpha values over time
  lineAlpha = max(0, lineAlpha - 0.2);
  pointAlpha = max(0, pointAlpha - 0.2);
}

function touchMoved() {
  let point = createVector(mouseX + random(-10, 10), mouseY + random(-10, 10)); // Introduce randomness in point positions
  points.push(point);
  return false; // Prevent default
}

function touchStarted() {
  // Remove points after releasing touch to create a new cobweb
  points = [];
  // Reset alpha values when creating a new cobweb
  lineAlpha = 255;
  pointAlpha = 255;
}