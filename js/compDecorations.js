//Script file to generate the decoration shapes


$(function () {

    var colorInput = document.getElementById('colorPicker');
    var colorPalette = document.getElementById('colorPalette');
    colorInput.addEventListener("click", showColorPalette);
    colorInput.addEventListener("focusout", hideColorPalette);
    colorPalette.mouseIsOver = false;
    colorInput.style.borderRight =  `10px solid ${colorInput.value}`;
    
    colorPalette.onmouseover = () => {
      colorPalette.mouseIsOver = true;
    };
    colorPalette.onmouseout = () => {
      colorPalette.mouseIsOver = false;
    }
    
    function hideColorPalette() {
      if(colorPalette.mouseIsOver === false) {
        colorPalette.style.display = 'none';
        colorInput.style.borderRight =  `10px solid ${colorInput.value}`;
      }
    }
    
    function chooseColor(e) {
      let color = rgbToHex(e.target.style.backgroundColor);
      colorInput.value = color;
      colorInput.style.borderRight =  `10px solid ${color}`;
      colorPalette.style.display = 'none';
    }
    
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
    
    function rgbToHex(color) {
      arr = color.replace('rgb', '').replace('(', '').replace(')', '').split(',');
      return "#" + componentToHex(Number(arr[0])) + componentToHex(Number(arr[1])) + componentToHex(Number(arr[2]));
    }
    
    function showColorPalette() {
      colorPalette.style.display = 'block';
      var newDiv = '<div class="color-option" style="background-color:#000000" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#191919" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#323232" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#4b4b4b" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#646464" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#7d7d7d" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#969696" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#afafaf" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#c8c8c8" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#e1e1e1" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ffffff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#820000" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#9b0000" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#b40000" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#cd0000" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#e60000" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff0000" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff1919" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff3232" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff4b4b" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff6464" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff7d7d" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#823400" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#9b3e00" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#b44800" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#cd5200" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#e65c00" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff6600" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff7519" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff8532" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff944b" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ffa364" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ffb27d" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#828200" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#9b9b00" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#b4b400" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#cdcd00" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#e6e600" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ffff00" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ffff19" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ffff32" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ffff4b" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ffff64" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ffff7d" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#003300" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#004d00" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#008000" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#00b300" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#00cc00" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#00e600" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#1aff1a" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#4dff4d" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#66ff66" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#80ff80" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#b3ffb3" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#001a4d" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#002b80" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#003cb3" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#004de6" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#0000ff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#0055ff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#3377ff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#4d88ff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#6699ff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#80b3ff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#b3d1ff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#003333" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#004d4d" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#006666" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#009999" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#00cccc" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#00ffff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#1affff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#33ffff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#4dffff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#80ffff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#b3ffff" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#4d004d" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#602060" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#660066" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#993399" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ac39ac" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#bf40bf" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#c653c6" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#cc66cc" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#d279d2" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#d98cd9" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#df9fdf" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#660029" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#800033" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#b30047" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#cc0052" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#e6005c" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff0066" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff1a75" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff3385" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff4d94" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff66a3" onclick="chooseColor(event)"></div><div class="color-option" style="background-color:#ff99c2" onclick="chooseColor(event)"></div>';
      colorPalette.innerHTML = newDiv;
    }


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

    $("div.dragged>img").click(function(){
        $(this).html("<p>test</p>");
    });

    $("#dumpzone").droppable({
        drop: function (event, ui){
            var $item = $(ui);
            $item.css("display","none");
            remove($item);
        }
    })
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
