let angle1=90,angle2=90,angle3=90,angle4=90;
let r=400;
let bg,sun,earth,mercury,venus,mars,jupiter,saturn,uranus,neptune;
let data,degarr;
function preload() {

   bg = loadImage('enOgP1.jpg');
   sun= loadImage('sun.jpg');
   earth=loadImage('earth.jpg');
   mercury=loadImage('mercury.jpg');
   venus=loadImage('venus.jpg');
   mars=loadImage('mars.jpg');
   jupiter=loadImage('jupiter.jpg');
   saturn=loadImage('saturn.jpg');
   uranus=loadImage('uranus.jpg');
   neptune=loadImage('neptune.jpg');

   M=10000
  // data=[
  //   ["sun",6963,1,(1200*365),sun],
  //   ["Mercury",2439,57*M,88,mercury],
  //   ["Venus",6052,108*M,225,venus],
  //   ["Earth",6371,149*M,365,earth],
  //   ["Mars",3389,227*M,687,mars],
  //   ["Jupiter",69911,778*M,(12*365),jupiter],
  //   ["Saturn",58232,1434*M,(29*365),saturn],
  //   ["Uranus",25362,2871*M,(84*365),uranus],
  //   ["Neptune",24622,4495*M,(165*365),neptune]
  // ]
  data=[
    ["sun",300,1,(12*365),sun],
    ["Mercury",5,400,88,mercury],
    ["Venus",10,500,225,venus],
    ["Earth",12,600,365,earth],
    ["Mars",7,700,687,mars],
    ["Jupiter",30,950,(12*365),jupiter],
    ["Saturn",27,1150,(29*365),saturn],
    ["Uranus",22,1250,(84*365),uranus],
    ["Neptune",20,1450,(165*365),neptune]
  ]
  degarr=[0,0,0,0,0,0,0,0,0,0];


}

function setlargest(x){
  return x
}



function setup() {

  createCanvas(1525, 700, WEBGL);

  slider1 = createSlider(0, 360, 0);
  slider1.position(10, 30);
  slider1.style('width', '80px');

  greeting = createElement('h2', 'Rotate');
  greeting.position(11,32);

  
  slider2 = createSlider(1, 1000,550);
  slider2.position(120, 30);
  slider2.style('width', '250px');
  
  greeting2 = createElement('h2', 'Zoom');
  greeting2.position(121,32);


  slider3 = createSlider(0, 500,50);
  slider3.position(410, 30);
  slider3.style('width', '80px');
  
  greeting3 = createElement('h2', 'speed');
  greeting3.position(210,32);

  // for(let i=0;i<data.length;i++){
  //   data[i][1]=setlargest(data[i][1])
  //   data[i][2]=setlargest(data[i][2])
  // }
  
  print(data)


}

function draw(){
  background(0);
    //console.clear()
    orbitControl();
    let a1 = slider1.value();
    let z1 = slider2.value();
    if(z1<501){z1=(z1/5000)+0.05;}
    else{z1=((z1-500)/100)+0.05;}
    print(z1)
    let speed = slider3.value()/100;
  

    
    textSize(12);
    textAlign(RIGHT);
    text('Rotate', 10, 40);
    push();
    translate(0,0,-5200)
    //image(bg,0-(width/2)-6600,0-(height/2)-2950,14650, 14650/width*height);
    
    pop();

    angleMode(DEGREES);

    rotateX(a1);

    //print(data.length)
    for(let i=0;i<data.length;i++){
      push()
      noStroke();
      rotateX(90);
      torus(data[i][2]*z1, 0.1,100);
      pop();
      push();
      noStroke();
      shininess(20);
      ambientLight(122, 68, 2);
      specularColor(255, 255, 255);
      pointLight(250, 250, 250, 0, 0, 0);
      if(i==0){
        pointLight(250, 250, 250, 0, 0, 1000);
        pointLight(250, 250, 250, 0, 0, -1000);
        pointLight(250, 250, 250, 0, 500, 0);
        pointLight(250, 250, 250, 0, -500, 0);
        pointLight(250, 250, 250, -1000, 0, 0);
      }
      degarr[i]=degarr[i]+(360/data[i][3])
      rotateY(degarr[i]*speed);
      translate(0,0,data[i][2]*z1);
      texture(data[i][4]);
      sphere(data[i][1]*z1)
      //console.log(data[i][0],data[i][1]*z1,data[i][2]*z1)
      pop();
      
    }
    //print(degarr)


}




