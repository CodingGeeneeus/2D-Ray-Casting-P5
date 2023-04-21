class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for (let a = 0; a < 360; a += 0.5) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(walls) {
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
          record = min(d, record);
        }
      }
      if (closest) {
        //colorMode(RGB);
        //for (let i = 0; i < 20; i++) {
        //  stroke((i + frameCount * 2) % 360, 255, 50);
        //}
        stroke(255, 50);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
        //stroke(255, 75)
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 2);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}
