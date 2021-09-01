function doLime() {
    var dd1 = document.getElementById("d1");
        dd1.style.backgroundColor="lime";
}

function doYellow() {
    var dd1 = document.getElementById("d1");
        dd1.style.backgroundColor="white";

        var context = dd1.getContext("2d");
        context.fillStyle="yellow";
        context.fillRect(10,10,40,80);
        context.fillRect(60, 10, 40, 40);

        context.fillStyle = "black";
        context.font = "40px Arial";
        context.fillText("Hello", 10,80);
}

function doBlue() {
    var dd1 = document.getElementById("d1");
    
    dd1.style.backgroundColor = "pink";

    var ctxt = dd1.getContext("2d");
    ctxt.fillStyle = "blue";
    ctxt.fillRect(90,100,20,10);
}

//make black button changes color of canvas to black

function doBlack() {
    var black = document.getElementById("c1");
        black.style.backgroundColor = "black";
}

//third canvas element to gray
function changeColor1() {
    var gray = document.getElementById("c2");
        gray.style.backgroundColor = "gray";
}
//add black square to gray
function addShape() {
    var square = document.getElementById("c2");
      
    var cxt = square.getContext("2d");
        cxt.fillStyle = "black";
        cxt.fillRect(95,95, 45,45);
}
//turn canvas to completely pink
function pink() {
    var pink = document.getElementById("c2");
        pink.style.backgroundColor = "pink";
}


// How to clear NEEDS WORK...BECAUSE IT DOESN'T
// function clear() {
//     var canvas = document.getElementById("c2");
//     var context = canvas.getContext("2d");
//         context.clearRect(0,0,canvas.width, canvas.height);
//         canvas.style.backgroundColor = "white";
// }
