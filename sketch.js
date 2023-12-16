let width = 400, height = 400;
let stars = [];

function setup() {
  createCanvas(width, height);
  for (let i = 0; i < 50; i++){
    stars[i] = createVector(
      random(-width*2, width*2),
      random(-height*2, height*2),
      10
    );
  }
}

function draw() {
  background(0);
  fill(255);

  //중앙으로 올 수 있게 원점 변경
  translate(width/2, height/2);
  for (let star of stars) {
    let x = star.x / star.z;
    let y = star.y / star.z;

    let d = 15//map(star.z, 0, 400, 1, 10);
    circle(x, y, d);

    //star.z += 1;
  }
}
