$(document).ready(function(){
    animationLoop();
});

var animationLoop = function () {
    var canvas = $("#mainCanvas");
    var context = canvas.get(0).getContext("2d");

    var canvasWidth = $("body").width();
    var canvasHeight = $("body").height() - 50;

    canvas.attr("width", canvasWidth);
    canvas.attr("height", canvasHeight);

    $(window).resize(resizeCanvas);

    var resizeCanvas = function () {
        var canvasWidth = $("body").width();
        var canvasHeight = $("body").height() - 50;
        canvas.attr("width", canvasWidth);
        canvas.attr("height", canvasHeight);
    };

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

    var Asteroid = function (x, y, radius, velocityX, velocityY, accelerationX, accelerationY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.accelerationX = accelerationX;
        this.accelerationY = accelerationY;
    };

    var asteroids = new Array();

    for (var i = 0; i < 20; i++) {
        var x = 20 + Math.random() * (canvasWidth - 40);
        var y = 20 + Math.random() * (canvasHeight - 40);
        var radius = 5 + Math.random() * 10;
        var velocityX = Math.random() * 20 - 10;
        var velocityY = Math.random() * 20 - 10;
        var accelerationX = Math.random() * 0.2 - 0.1;
        var accelerationY = Math.random() * 0.2 - 0.1;

        asteroids.push(new Asteroid(x, y, radius, velocityX, velocityY, accelerationX, accelerationY));
    }

    var animate = function () {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.fillStyle = "rgb(255, 255, 255)";

        var asteroidsLength = asteroids.length;
        for (var i = 0; i < asteroidsLength; i++) {
            var currentAsteroid = asteroids[i];
            currentAsteroid.x += currentAsteroid.velocityX;
            currentAsteroid.y += currentAsteroid.velocityY;

            if (Math.abs(currentAsteroid.velocityX) < 25) {
                currentAsteroid.velocityX += currentAsteroid.accelerationX;
            }

            if (Math.abs(currentAsteroid.velocityY) < 25) { 
                currentAsteroid.velocityY += currentAsteroid.accelerationY;
            }

            if (currentAsteroid.x - currentAsteroid.radius < 0) {
                currentAsteroid.x = currentAsteroid.radius;
                currentAsteroid.velocityX *= -1;
                currentAsteroid.accelerationX *= -1;
            } else if (currentAsteroid.x + currentAsteroid.radius > canvasWidth) {
                currentAsteroid.x = canvasWidth - currentAsteroid.radius;
                currentAsteroid.velocityX *= -1;
                currentAsteroid.accelerationX *= -1;
            }

            if (currentAsteroid.y - currentAsteroid.radius < 0) {
                currentAsteroid.y = currentAsteroid.radius;
                currentAsteroid.velocityY *= -1;
                currentAsteroid.accelerationY *= -1;
            } else if (currentAsteroid.y + currentAsteroid.radius > canvasHeight) {
                currentAsteroid.y = canvasHeight - currentAsteroid.radius;
                currentAsteroid.velocityY *= -1;
                currentAsteroid.accelerationY *= -1;
            }

            context.beginPath();
            context.arc(currentAsteroid.x, currentAsteroid.y, currentAsteroid.radius, 0, Math.PI * 2, false);
            context.closePath();
            context.fill();
        }

        if (playAnimation) {
            setTimeout(animate, 33);
        }
    };

    animate();
};