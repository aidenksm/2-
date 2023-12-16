let width = windowWidth, height = windowHeight;
let stars = [];
let factor = 100;
let speedSlider;

function setup() {
  createCanvas(width, height);
  speedSlider=createSlider(1, 20, 10);
  for (let i = 0; i < 500; i++){
    stars[i] = createVector(
      random(-width*factor, width*factor),
      random(-height*factor, height*factor),
      random(10, 400)
    );
    stars[i].pz = stars[i].z;
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
    let px = star.x / star.pz;
    let py = star.y / star.pz;

    let d = map(star.z, 0, 400, 10, 1);
    circle(x, y, d);
    stroke(255);
    line(x, y, px, py);
    //textSize(d*5);
    //text("*",x,y);
    
    star.pz = star.z;
    star.z -= speedSlider.value();
    if (star.z < 1){
      star.x = 
      random(-width*factor, width*factor);
      star.y = 
      random(-height*factor, height*factor);
      star.z = 400;
      star.pz = 400;
    }
  }
}
