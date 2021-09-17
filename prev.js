


function draw() {
    background(0);
    
    let a1 = slider1.value()*3.14/1800;
    let z1 = slider2.value()/100;
    let speed = slider3.value()/100;
  
    textSize(12);
    textAlign(RIGHT);
    text('Rotate', 10, 40);
    push();
    translate(0,0,-1000)
    image(bg,0-(width/2)-1500,0-(height/2)-600,5550, 2000);
    pop();
  
    rotateX(a1);
  
    push();
    noStroke();
    fill(248, 255, 33);
    shininess(20);
    ambientLight(255, 159, 3);
    specularColor(255, 255, 255);
    directionalLight(250, 250, 250, 0, 0, 0);
    texture(sun);
    rotateY(angle1*0.7);
    sphere(100*z1);
    pop();
  
    push();
    noStroke();
    fill(34,90,100);
    // rotateX(angle);
    // rotateY(angle);
    texture(earth);
    shininess(20);
    ambientLight(17, 157, 250);
    specularColor(255, 255, 255);
    pointLight(250, 250, 250, 0, 0, 100);
    rotateY(angle1);
    translate(0,0,r*z1);
    
    sphere(20*z1);
    pop();
  
   
    push();
    noStroke();
    fill(122, 68, 2);
    // rotateX(angle);
    // rotateY(angle);
    shininess(20);
    ambientLight(122, 68, 2);
    specularColor(255, 255, 255);
    pointLight(250, 250, 250, 0, 0, 100);
    rotateY(angle2);
    translate(0,0,137*z1);
    texture(mercury);
    sphere(8*z1);
    pop();
  
  
  
    push();
    noStroke();
    fill(122, 68, 2);
    // rotateX(angle);
    // rotateY(angle);
    
    rotateY(angle3);
    translate(0,0,291*z1);
    texture(venus);
    sphere(19*z1);
    pop();
  
   
    push();
    noStroke();
    fill(122, 68, 2);
    // rotateX(angle);
    // rotateY(angle);
    shininess(20);
    ambientLight(122, 68, 2);
    specularColor(255, 255, 255);
    pointLight(250, 250, 250, 0, 0, 100);
    rotateY(angle4);
    translate(0,0,472*z1);
    texture(mars);
    sphere(11*z1)
    pop();;
  
  
    angle1+=0.05*speed ;
    angle2+=0.207*speed;
    angle3+=0.081*speed;
    angle4+=0.026*speed;
  
  }
  