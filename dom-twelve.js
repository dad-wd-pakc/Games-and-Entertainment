/*
$(document).ready(function(){
    initAllTheseThings();
});
*/

window.onload = function() {
    animationLoop();
}

var animationLoop = function () {
    var canvas = $("#mainCanvas");
    var context = canvas.get(0).getContext("2d");

    var canvasWidth = canvas.width();
    var canvasHeight = canvas.height();

    var playAnimation = true;

    var startButton = $("#startCanvas");
    var stopButton = $("#stopCanvas");

    var x = 0;

    startButton.hide();
    startButton.click(function () {
        $(this).hide();
        stopButton.show();

        playAnimation = true;
        animate();
    });

    stopButton.click(function () {
        $(this).hide();
        startButton.show();

        playAnimation = false;
    });

    var Shape = function (x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.radius = Math.random() * 30;
        this.angle = 0;
    };

    var shapes = new Array();

    for (var i = 0; i < 10; i++) {
        var x = Math.random() * 250;
        var y = Math.random() * 250;
        var width = height = Math.random() * 50;
        shapes.push(new Shape(x, y, width, height));
    }

    var animate = function () {
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        var shapesLength = shapes.length;
        for (var i = 0; i < shapesLength; i++) {
            var currentShape = shapes[i];

            var x = currentShape.x + (currentShape.radius * Math.cos(currentShape.angle * (Math.PI / 180)));
            var y = currentShape.y + (currentShape.radius * Math.sin(currentShape.angle * (Math.PI / 180)));

            currentShape.angle += 15;

            if (currentShape.angle > 360) {
                currentShape.angle = 0;
            }

            context.fillRect(x, y, currentShape.width, currentShape.height);
        }

        if (playAnimation) {
            setTimeout(animate, 33);
        }
    };

    animate();
};