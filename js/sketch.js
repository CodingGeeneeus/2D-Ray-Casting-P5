let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 100000;

function setup() {
  // put setup code here
  createCanvas(960, 740);
  for (let i = 0; i < 5; i++) {
    const x1 = random(width);
    const x2 = random(width);
    const y1 = random(height);
    const y2 = random(height);

    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls.push(new Boundary(0, 0, width, 0)); // top of canvas
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(0, height, width, height)); // bottom of canvas
  walls.push(new Boundary(0, 0, 0, height)); // left of canvas

  particle = new Particle();
}

function draw() {
  background(0);

  for (let wall of walls) {
    wall.show();
  }

  particle.look(walls);
  //particle.update(noise(xoff) * width, noise(yoff)*height)
  particle.update(mouseX, mouseY);
  particle.show();

  xoff += 0.01;
  yoff += 0.01;
}

//reloads setup to generate new random walls
const button = document.querySelector("button");

button.addEventListener("click", () => {
  window.location.reload("Refresh");
});
