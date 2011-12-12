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
    
    /*
    var resizeCanvas = function () {
        var canvasWidth = $("body").width();
        var canvasHeight = $("body").height() - 50;
        canvas.attr("width", canvasWidth);
        canvas.attr("height", canvasHeight);
    };
    */

    function resizeCanvas() {
        canvasWidth = $("body").width();
        canvasHeight = $("body").height() - 50;
        canvas.attr("width", canvasWidth);
        canvas.attr("height", canvasHeight);
    }

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

    var Asteroid = function (x, y, radius, mass, velocityX, velocityY, accelerationX, accelerationY, fill) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.mass = mass
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.accelerationX = accelerationX;
        this.accelerationY = accelerationY;
        this.fill = fill;
    };

    var asteroids = new Array();

    for (var i = 0; i < 50; i++) {
        var x = 20 + Math.random() * (canvasWidth - 40);
        var y = 20 + Math.random() * (canvasHeight - 40);
        var radius = 5 + Math.random() * 10;
        var mass = radius / 2;
        var velocityX = Math.random() * 20 - 10;
        var velocityY = Math.random() * 20 - 10;
        /*
        var accelerationX = Math.random() * 0.2 - 0.1;
        var accelerationY = Math.random() * 0.2 - 0.1;
        */
        var accelerationX = 0;
        var accelerationY = 0;

        var red = Math.floor(Math.random() * 200);
        var green = Math.floor(Math.random() * 200);
        var blue = Math.floor(Math.random() * 200);
        var alpha = ((Math.random() * 0.75) + 0.25).toFixed(1);

        var fill = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";

        asteroids.push(new Asteroid(x, y, radius, mass, velocityX, velocityY, accelerationX, accelerationY, fill));
    }

    var animate = function () {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        /* context.fillStyle = "rgb(255, 255, 255)"; */

        var asteroidsLength = asteroids.length;
        for (var i = 0; i < asteroidsLength; i++) {
            var currentAsteroid = asteroids[i];

            for (var j = i + 1; j < asteroidsLength; j++) {
                var currentAsteroidB = asteroids[j];

                var dX = currentAsteroidB.x - currentAsteroid.x;
                var dY = currentAsteroidB.y - currentAsteroid.y;
                var distance = Math.sqrt((dX * dX) + (dY * dY));

                if (distance < currentAsteroid.radius + currentAsteroidB.radius) {
                    var angle = Math.atan2(dY, dX);
                    var sine = Math.sin(angle);
                    var cosine = Math.cos(angle);

                    var x = 0;
                    var y = 0;

                    var xB = dX * cosine + dY * sine;
                    var yB = dY * cosine - dX * sine;

                    var velocityX = currentAsteroid.velocityX * cosine + currentAsteroid.velocityY * sine;
                    var velocityY = currentAsteroid.velocityY * cosine - currentAsteroid.velocityX * sine;

                    var velocityXB = currentAsteroidB.velocityX * cosine + currentAsteroidB.velocityY * sine;
                    var velocityYB = currentAsteroidB.velocityY * cosine - currentAsteroidB.velocityX * sine;
                    /*
                    velocityX *= -1;
                    velocityXB *= -1;
                    */

                    var vTotal = velocityX - velocityXB;
                    velocityX = ((currentAsteroid.mass - currentAsteroidB.mass) * velocityX + 2 * currentAsteroidB.mass * velocityXB) / (currentAsteroid.mass + currentAsteroidB.mass);
                    velocityXB = vTotal + velocityX;

                    xB = x + (currentAsteroid.radius + currentAsteroidB.radius);

                    currentAsteroid.x = currentAsteroid.x + (x * cosine - y * sine);
                    currentAsteroid.y = currentAsteroid.y + (y * cosine + x * sine);

                    currentAsteroidB.x = currentAsteroid.x + (xB * cosine - yB * sine);
                    currentAsteroidB.y = currentAsteroid.y + (yB * cosine + xB * sine);

                    currentAsteroid.velocityX = velocityX * cosine - velocityY * sine;
                    currentAsteroid.velocityY = velocityY * cosine + velocityX * sine;

                    currentAsteroidB.velocityX = velocityXB * cosine - velocityYB * sine;
                    currentAsteroidB.velocityY = velocityYB * cosine + velocityXB * sine;
                }
            }

            currentAsteroid.x += currentAsteroid.velocityX;
            currentAsteroid.y += currentAsteroid.velocityY;

            if (Math.abs(currentAsteroid.velocityX) < 10) {
                currentAsteroid.velocityX += currentAsteroid.accelerationX;
            }

            if (Math.abs(currentAsteroid.velocityY) < 10) {
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

            /* Friction
            if (Math.abs(currentAsteroid.velocityX) > 0.1) {
            currentAsteroid.velocityX *= 0.9;
            } else {
            currentAsteroid.velocityX = 0;
            }

            if (Math.abs(currentAsteroid.velocityY) > 0.1) {
            currentAsteroid.velocityY *= 0.9;
            } else {
            currentAsteroid.velocityY = 0;
            }
            */

            context.fillStyle = currentAsteroid.fill;
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