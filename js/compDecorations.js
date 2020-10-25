//Script file to generate the decoration shapes


$(function () {




    //Star
    /*  var star = $("#areaCanvas").drawPolygon({
         fillStyle: "#36c",
         x: 100, y: 100,
         radius: 50,
         sides: 5,
         concavity: 0.5,
         draggable: true,
     })
     
     star.addClass("menuItem"); */


    /* $("#areaCanvas").droppable({
        drop: function (event, ui) {
            //this if condition is for avoiding multiple time drop and attachment of same item
            if (ui.draggable.hasClass("menuItem")) {
                var $item = $(ui.helper).clone(); //getting the cloned item
                $item.removeClass("menuItem");
                // $item.html("<div id='e3' class='dragged'>Clone</div>");
                $(this).append($item);
                makeDraggable($item);
            }
        }
    }) */


    $("#dropzone").droppable({
        drop: function (event, ui) {
            //this if condition is for avoiding multiple time drop and attachment of same item
            if (ui.draggable.hasClass("menuItem")) {
                var $item = $(ui.helper).clone(); //getting the cloned item
                $item.removeClass("menuItem");
                $item.addClass("dragged");
                $(this).append($item);
                makeDraggable($item);
            }
        }
    })

    function makeDraggable($item) {
        $item.draggable({
            start: function () { },
            stop: function () {
                console.log('stopped')
            }
        });
    }

    $(".menuItem").draggable({
        appendTo: "#dropzone",
        helper: "clone",
        start: function () { },
        stop: function () {
            console.log('stopped')
        }
    });


});








//////////////////////////////////////////

/* var canvas = document.getElementById("areaCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75); */




/* const s = ( sketch ) => {

    let x = 100;
    let y = 100;

    sketch.setup = () => {
      sketch.createCanvas(200, 200);
      sketch.parent('areaDrawing');
    };

    sketch.draw = () => {
      sketch.background(0);
      sketch.fill(255);
      sketch.rect(x,y,50,50);
    };
  };

  let myp5 = new p5(s); */



/* $( function() {
    $( myp5 ).draggable();
  } ); */



/*function setup() {
    createCanvas(800, 600);
    decFlower = new Decoration();
    decStar = new Decoration();
}

class Decoration {
    constructor() {

    }

    drawFlower() {
        //flower
        translate(width / 2, height / 2);
        for (let i = 0; i < 10; i++) {
            ellipse(0, 30, 20, 80);
            rotate(PI / 5);
        }
        for (let i = 0; i < 20; i++) {
            ellipse(0, 20, 10, 70);
            rotate(PI / 5);
        }
        ellipse(0, 0, 50, 50);
    }

    drawStar() {
        //star
        beginShape();
        vertex(430, 280)
        vertex(350, 280)
        vertex(320, 195)
        vertex(280, 280)
        vertex(200, 280)
        vertex(265, 335)
        vertex(240, 405)
        vertex(315, 365)
        vertex(390, 405)
        vertex(365, 335)
        endShape(CLOSE);
    }

}

function draw() {
    decFlower.drawFlower();
    decStar.drawStar();
}

function draw() {
    //star
    beginShape();
    vertex(430, 280)
    vertex(350, 280)
    vertex(320, 195)
    vertex(280, 280)
    vertex(200, 280)
    vertex(265, 335)
    vertex(240, 405)
    vertex(315, 365)
    vertex(390, 405)
    vertex(365, 335)
    endShape(CLOSE);
}

function draw() {
    //heart
    beginShape();
    vertex(300, 450);
    bezierVertex(300, 350, 450, 300, 450, 250);
    bezierVertex(450, 200, 350, 150, 300, 240);
    bezierVertex(250, 150, 150, 200, 150, 250);
    bezierVertex(150, 300, 300, 350, 300, 450);
    endShape();
}


function draw() {
    //diamondish
    beginShape();
    vertex(80, 115);
    vertex(115, 80);
    vertex(80, 45);
    vertex(45, 80);
    endShape(CLOSE);
}
*/
