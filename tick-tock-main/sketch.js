var hours, minutes, seconds
var ha,ma,sa;






function setup() {
  createCanvas(displayWidth,displayHeight);
  angleMode(DEGREES)

  
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  hours=hour()
  minutes=minute()
  seconds=second()
  
  sa=map(seconds,0,60,0,360)
  ma=map(minutes,0,60,0,360)
  ha=map(hours%12,0,12,0,360)

  push()
  rotate(sa)
  stroke(147, 123, 187)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(ma)
  stroke(187, 203, 168)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(ha)
  stroke(163,219, 238)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(147, 123, 187)
  arc(0,0,300,300,0,sa)

  stroke(187, 203, 168)
  arc(0,0,280,280,0,ma)

  stroke(163,219, 238)
  arc(0,0,260,260,0,ha)









 
}
