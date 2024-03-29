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
            currentShape.x += Math.random() * 20 - 10;
            currentShape.y += Math.random() * 20 - 10;
            context.fillRect(currentShape.x, currentShape.y, currentShape.width, currentShape.height);
        }

        if (playAnimation) {
            setTimeout(animate, 33);
        }
    };

    animate();
};