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