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

    var canvasWidth = $("body").width();
    var canvasHeight = $("body").height() - 50;

    canvas.attr("width", canvasWidth);
    canvas.attr("height", canvasHeight);

    var playAnimation = true;

    var startButton = $("#startCanvas");
    var stopButton = $("#stopCanvas");

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
        this.reverseX = false;
        this.reverseY = false;
    };

    var shapes = new Array();

    for (var i = 0; i < 20; i++) {
        var x = Math.random() * canvasWidth;
        var y = Math.random() * canvasHeight;
        var width = height = Math.random() * 50;
        shapes.push(new Shape(x, y, width, height));
    }

    var animate = function () {
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        var shapesLength = shapes.length;
        for (var i = 0; i < shapesLength; i++) {
            var currentShape = shapes[i];

            if (!currentShape.reverseX) {
                currentShape.x += 5;
            } else {
                currentShape.x -= 5;
            }

            if (!currentShape.reverseY) {
                currentShape.y += 5;
            } else {
                currentShape.y -= 5;
            }

            context.fillRect(currentShape.x, currentShape.y, currentShape.width, currentShape.height);

            if (currentShape.x < 0) {
                currentShape.reverseX = false;
            } else if (currentShape.x + currentShape.width > canvasWidth) {
                currentShape.reverseX = true;
            }

            if (currentShape.y < 0) {
                currentShape.reverseY = false;
            } else if (currentShape.y + currentShape.height > canvasHeight) {
                currentShape.reverseY = true;
            }
        }

        if (playAnimation) {
            setTimeout(animate, 33);
        }
    };

    animate();
};