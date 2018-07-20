var data;

function preload(){
  data = loadJSON("birds.json");
}
function setup() {
  noCanvas();
  //createCanvas(500, 500);
  //var bird = data.birds[1].members[2];
  var bird = data.birds[1].members[2];
  createP(bird);
}
