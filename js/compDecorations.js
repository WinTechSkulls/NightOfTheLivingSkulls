//Script file to generate the decoration shapes
function setup(){
    createCanvas(800, 600);
}

function draw(){

    //flower
    translate(width/2, height/2);
    for (let i = 0; i < 10; i++) {
        ellipse(0, 30, 20, 80);
        rotate(PI/5);
      }
      for (let i = 0; i < 20; i++){
          ellipse(0, 20, 10, 70);
          rotate(PI/5);
      }
      ellipse(0, 0 , 50, 50);

      //star
    beginShape();
    vertex(430,280)
    vertex(350,280)
    vertex(320,195)
    vertex(280,280)
    vertex(200,280)
    vertex(265,335)
    vertex(240,405)
    vertex(315,365)
    vertex(390,405)
    vertex(365,335)
    endShape(CLOSE);

    //heart
    beginShape();
	vertex(300,450);
	bezierVertex(300,350,450,300,450,250);
	bezierVertex(450,200,350,150,300,240);
	bezierVertex(250,150,150,200,150,250);
	bezierVertex(150,300,300,350,300,450);
    endShape();
    
    //diamondish
    beginShape();
	vertex(80, 115);
	vertex(115, 80);
	vertex(80, 45);
	vertex(45, 80);
	endShape(CLOSE);
}