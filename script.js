//vectors added for hour/minute/seconds to create a perfectly readable clock

//no useful or poetic comments - sorry. 
let hourRadius, minuteRadius ,secondRadius,c ;
let vToggle = true;//vectors on/off - press v
let dToggle = false;//darkmode - press d
let bToggle = true;//background/fill in - press b
let cToggle = false;
function setup(){
  c = min(windowWidth,windowHeight);
  createCanvas(c,c);
  //change the radii to make different patterns
  hourRadius = c/5;
  minuteRadius = c/8;
  secondRadius = c/13;
}
function draw(){
  translate(width/2,height/2);
  if (bToggle){
    if(dToggle){
    background(20);
  }else{
    background(255);
  }
  }
  strokeWeight(1)
  curveOfTime()
  hours = createVector(hourRadius*cos(-PI/2+hour()*PI/6),hourRadius*sin(-PI/2+hour()*PI/6));
  minutes = createVector(minuteRadius*cos(-PI/2+minute()*TWO_PI/60),minuteRadius*sin(-PI/2+minute()*TWO_PI/60))
  seconds = createVector(secondRadius*cos(-PI/2+second()*TWO_PI/60),secondRadius*sin(-PI/2+second()*TWO_PI/60))
   x2 = hours.x+minutes.x+seconds.x
  y2 = hours.y+minutes.y+seconds.y;
  stroke(100,100+50*abs(sin(x2/100+hour())),100+150*abs(sin(y2/100+hour())));
  strokeWeight(1)
  if(vToggle){
    line(0,0,hours.x,hours.y);
    line(hours.x,hours.y,hours.x+minutes.x,hours.y+minutes.y)
    line(hours.x+minutes.x,hours.y+minutes.y,hours.x+minutes.x+seconds.x,hours.y+minutes.y+seconds.y)
  }
  if(cToggle){
    drawc(hours.x+minutes.x,hours.y+minutes.y,secondRadius)
    drawc(hours.x,hours.y,minuteRadius)
    drawc(0,0,hourRadius)
  }
  
  
  strokeWeight(3)
  line(0,0,hours.x+minutes.x+seconds.x,hours.y+minutes.y+seconds.y)
  
 noStroke()
  fill(100,100+50*abs(sin(x2/100+hour())),100+150*abs(sin(y2/100+hour())),200)
  circle(x2,y2,5)
  
  
}

function drawc(x,y,r){
  noFill()
  circle(x,y,r*2)
  for(let i = 0;i<12;i++){
    x5 = x + r*cos(-PI/2+i*PI/6)
    y5 = y + r*sin(-PI/2+i*PI/6)
    circle(x5,y5,4)
  }
}


function curveOfTime(){

noStroke()
  for(let i = 0;i<43200;i++){
    h = floor(i/3600)
    m = floor((i - h*3600)/60)
    s = i - h*3600 - m*60
    x = hourRadius*cos(-PI/2+h*TWO_PI/12)+minuteRadius*cos(-PI/2+m*TWO_PI/60)+secondRadius*cos(-PI/2+s*TWO_PI/60)
    y = hourRadius*sin(-PI/2+h*TWO_PI/12)+minuteRadius*sin(-PI/2+m*TWO_PI/60)+secondRadius*sin(-PI/2+s*TWO_PI/60)
    //vertex(x,y)
    fill(100,100+50*abs(sin(x/100+hour())),100+150*abs(sin(y/100+hour())),150)
    circle(x,y,1+c/1000)
    
  }

}

function windowResized(){
  c = min(windowWidth, windowHeight)
  resizeCanvas(c,c);
  setup()
  draw()
}

function keyPressed(){
  if(keyCode ===86){
    vToggle = !vToggle
  }
  if(keyCode ===68){
    dToggle = !dToggle
  }
  if(keyCode ===66){
    bToggle = !bToggle
  }
  if(keyCode ===67){
    cToggle = !cToggle
  }
}