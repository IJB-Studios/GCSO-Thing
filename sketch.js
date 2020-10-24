var car, wall
var speed, weight, deformation
function setup() {
  createCanvas(800,400)
  speed = Math.round(random(55,90))
  weight = Math.round(random(400, 1500))
  car = createSprite(50, 200, 50, 50)
  car.shapeColor="white"
  wall = createSprite(800, 200, 60, height/2)
  wall.shapeColor=color(80, 80, 80)
  car.velocityX = speed/5;
}

function draw() {
  background(0);  
  drawSprites();
  if (wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX = 0;
    deformation=(weight*speed*speed)/45000
    console.log(deformation)
    if (deformation>180) {
      car.shapeColor=color(230, 85, 0)
    } else if (deformation<=180 && deformation>=100) {
      car.shapeColor = color(230, 230, 0)
    }else if (deformation<100) {
      car.shapeColor = color(0, 230, 85)
    }
  } 
}