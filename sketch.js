let angle1=90,angle2=90,angle3=90,angle4=90;
let r=400;
let bg,sun,earth,mercury,venus,mars,jupiter,saturn,uranus,neptune;
let data,degarr;
let backval=4;
function preload() {

   bg2=loadImage('bg2.jfif');
   bg3=loadImage('bg3.jpg');
   bg4=loadImage('bg4.jpg');
   bg5=loadImage('bg5.jpg');
   bg6=loadImage('bg6.jpg');
   bg7=loadImage('bg7.jpg');
   
   bgarr=[null,bg2,bg5,bg6,bg7]
   bgstr=['','bg2.jfif','bg5.jpg','bg6.jpg','bg7.jpg']


   sun= loadImage('sun.jpg');
   earth=loadImage('earth.jpg');
   mercury=loadImage('mercury.jpg');
   venus=loadImage('venus.jpg');
   mars=loadImage('mars.jpg');
   jupiter=loadImage('jupiter.jpg');
   saturn=loadImage('saturn.jpg');
   uranus=loadImage('uranus.jpg');
   neptune=loadImage('neptune.jpg');
   pluto=loadImage('pluto.jpg');

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
    ["sun",300,1,24.47,sun],
    ["Mercury",5,400,88,mercury],
    ["Venus",10,500,225,venus],
    ["Earth",12,600,365,earth],
    ["Mars",7,700,687,mars],
    ["Jupiter",30,950,(12*365),jupiter],
    ["Saturn",27,1150,(29*365),saturn],
    ["Uranus",22,1350,(84*365),uranus],
    ["Neptune",20,1550,(165*365),neptune],
    ["pluto",4,1850,(248*365),pluto]
  ]
  degarr=[0,0,0,0,0,0,0,0,0,0];


}

function setlargest(x){
  return x
}

function changeBG(){
  backval=(backval+1)%(bgarr.length)
  print(backval)
 
  document.body.style.background = `#000000 url( ${bgstr[backval]}) repeat right top`;
  
  print( `#f3f3f3 url( ${bgstr[backval]}) repeat right top`)
}


function setup() {

  createCanvas(1560, 700, WEBGL);

  fill(255)
  slider1 = createSlider(0, 360,320);
  slider1.position(10, 30);
  slider1.style('width', '80px');

  greeting = createElement('h2', 'Rotate');
  greeting.position(11,32);

  
  slider2 = createSlider(1, 1000,550);
  slider2.position(120, 30);
  slider2.style('width', '250px');
  
  greeting2 = createElement('h2', 'Zoom');
  greeting2.position(221,32);


  slider3 = createSlider(0, 4000,100);
  slider3.position(1250, 30);
  slider3.style('width', '160px');
  
  greeting3 = createElement('h2', 'speed');
  greeting3.position(1300,32);

  // for(let i=0;i<data.length;i++){
  //   data[i][1]=setlargest(data[i][1])
  //   data[i][2]=setlargest(data[i][2])
  // }
  button = createButton('Background');
  button.position(1100, 40);
  button.mousePressed(changeBG);
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
    let speed = slider3.value()/100;
    angleMode(DEGREES);

    
    textSize(12);
    textAlign(RIGHT);
    text('Rotate', 10, 40);
    if(backval!=0){
      push()
      noStroke();
      texture(bgarr[backval]);
      sphere(2000)
      push()
    }
    rotateX(a1);

   
    

    //print(data.length)
    for(let i=0;i<data.length;i++){
      if(i==9){
        rotateX(17)
      }

      push()
      noStroke();
      rotateX(90);
      fill(255)
      torus(data[i][2]*z1, 0.2,100);
      pop();

      push();
      noStroke();
      shininess(100);
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
      if(i==6){
        push()
        noStroke();
        rotateX(90);
        texture(data[7][4]);
        torus((data[i][1]+10)*z1, 1,100);
        torus((data[i][1]+15)*z1, 1,100);
        torus((data[i][1]+20)*z1, 2,100);
        pop();
      }
      //console.log(data[i][0],data[i][1]*z1,data[i][2]*z1)
      pop();
      
    }
    //print(degarr)


}




