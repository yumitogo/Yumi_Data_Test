var flower;
function preload(){
  flower = loadJSON("flower.json");
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //flower = {
    //name:"sunflower",
    //col: color(200, 220, 0)
  //}

}

function draw() {
  background(0);
  fill(flower.r, flower.g, flower.b);
  text(flower.name, 10, 50);
}
