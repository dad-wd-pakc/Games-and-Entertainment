$(document).ready(function(){
    initialiseGame();
});

var initialiseGame = function () {
    var canvas = $("#gameCanvas");
    var context = canvas.get(0).getContext("2d");

    // Canvas dimensions
    var canvasHeight = canvas.height();
    var canvasWidth = canvas.width();

    // Games settings
    var playGame;

    var platformX;
    var platformY;
    var platformOuterRadius; // The area of the whole platform
    var platformInnerRadius; // The area that the asteroids will be placed in

    var asteroids;

    var player;
    var playerOriginalX;
    var playerOriginalY;

    var playerSelected;
    var playerMaxAbsVelocity;
    var playerVelocityDampener;
    var powerX;
    var powerY;

    var ui = $("#gameUI");
    var uiIntro = $("#gameIntro");
    var uiStats = $("#gameStats");
    var uiComplete = $("#gameComplete");
    var uiPlay = $("#gamePlayBtn");
    var uiReset = $("#gameResetBtn");
    var uiRemaining = $("#gameAsteroids");
    var uiScore = $(".gameScore");

    var Asteroid = function (x, y, radius, mass, friction) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.mass = mass;
        this.friction = friction;
        this.velocityX = 0;
        this.velocityY = 0;
        this.player = false;
    };

    var startGame = function () {
        uiRemaining.html("0");
        uiScore.html("0");
        uiStats.show();

        playGame = false;

        platformX = canvasWidth / 2;
        platformY = 150;
        platformOuterRadius = 100;
        platformInnerRadius = 75;

        asteroids = new Array();

        playerSelected - false;
        playerMaxAbsVelocity = 30;
        playerVelocityDampener = 0.3;
        powerX = -1;
        powerY = -1;

        var pRadius = 15;
        var pMass = 10;
        var pFriction = 0.97;
        playerOriginalX = canvasWidth / 2;
        playerOriginalY = canvasHeight - 150;
        player = new Asteroid(playerOriginalX, playerOriginalY, pRadius, pMass, pFriction);
        player.player = true;
        asteroids.push(player);

        var outerRing = 8; // Asteroids around the outer ring
        var ringCount = 3; // Number of rings
        var ringSpacing = (platformInnerRadius / (ringCount - 1)); // Distance between each ring

        // creating the asteroids in a ring layout
        for (var r = 0; r < ringCount; r++) {
            var currentRing = 0;
            var angle = 0;
            var ringRadius = 0;

            // Is this the innermost ring?
            if (r == ringCount - 1) {
                currentRing = 1;
            } else {
                currentRing = outerRing - (r * 3);
                angle = 360 / currentRing;
                ringRadius = platformInnerRadius - (ringSpacing * r);
            }

            for (var a = 0; a < currentRing; a++) {
                var x = 0;
                var y = 0;

                // Is this ring the innermost ring?
                if (r == ringCount - 1) {
                    x = platformX;
                    y = platformY;
                } else {
                    x = platformX + (ringRadius * Math.cos((angle * a) * (Math.PI / 180)));
                    y = platformY + (ringRadius * Math.sin((angle * a) * (Math.PI / 180)))
                }

                var radius = 10;
                var mass = 5;
                var friction = 0.95;
                asteroids.push(new Asteroid(x, y, radius, mass, friction));
            }
        }

        uiRemaining.html(asteroids.length - 1);

        $(window).mousedown(function (e) {
            if (!playerSelected && player.x == playerOriginalX && player.y == playerOriginalY) {
                var canvasOffset = canvas.offset();
                var canvasX = Math.floor(e.pageX - canvasOffset.left);
                var canvasY = Math.floor(e.pageY - canvasOffset.top);

                if (!playGame) {
                    playGame = true;
                    animate();
                }

                var dX = player.x - canvasX;
                var dY = player.y - canvasY;
                var distance = Math.sqrt((dX * dX) + (dY * dY));
                var padding = 5;

                if (distance < player.radius + padding) {
                    powerX = player.x;
                    powerY = player.y;
                    playerSelected = true;
                }
            }
        });

        $(window).mousedown(function (e) {

        });

        $(window).mousedown(function (e) {

        });


        animate();
    };

    // Initialise the game environment
    var init = function () {
        // Hide UI elements on initial start screen
        uiStats.hide();
        uiComplete.hide();

        uiPlay.click(function (e) {
            e.preventDefault();
            uiIntro.hide();
            startGame();
        });

        uiReset.click(function (e) {
            e.preventDefault();
            uiComplete.hide();
            startGame();
        });
    };

    // The animation loop that brings things to life!
    var animate = function () {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.fillStyle = "rgba(0, 0, 0, 0.25)";
        context.beginPath();
        context.arc(platformX, platformY, platformOuterRadius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();

        if (playGame) {
            setTimeout(animate, 33);
        }

        context.fillStyle = "rgba(255, 255, 0, 1)";

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

                    // Rotate asteroid position
                    var x = 0;
                    var y = 0;

                    // Rotate asteroidB position
                    var xB = dX * cosine + dY * sine;
                    var yB = dY * cosine - dX * sine;

                    // Rotate asteroid velocity
                    var velocityX = currentAsteroid.velocityX * cosine + currentAsteroid.velocityY * sine;
                    var velocityY = currentAsteroid.velocityY * cosine - currentAsteroid.velocityX * sine;

                    // Rotate asteroidB velocity
                    var velocityXB = currentAsteroidB.velocityX * cosine + currentAsteroidB.velocityY * sine;
                    var velocityYB = currentAsteroidB.velocityY * cosine - currentAsteroidB.velocityX * sine;

                    // Conserve momentum
                    var vTotal = velocityX - velocityXB;
                    velocityX = ((currentAsteroid.mass - currentAsteroidB.mass) * velocityX + 2 * currentAsteroidB.mass * velocityXB) / (currentAsteroid.mass + currentAsteroidB.mass);
                    velocityXB = vTotal + velocityX;

                    // Move asteroids apart
                    xB = x + (currentAsteroid.radius + currentAsteroidB.radius);

                    // Rotate asteroid positions back
                    currentAsteroid.x = currentAsteroid.x + (x * cosine - y * sine);
                    currentAsteroid.y = currentAsteroid.y + (y * cosine + x * sine);

                    // Rotate velocities back
                    currentAsteroidB.x = currentAsteroid.x + (xB * cosine - yB * sine);
                    currentAsteroidB.y = currentAsteroid.y + (yB * cosine + xB * sine);

                    currentAsteroid.velocityX = velocityX * cosine - velocityY * sine;
                    currentAsteroid.velocityY = velocityY * cosine + velocityX * sine;

                    currentAsteroidB.velocityX = velocityXB * cosine - velocityYB * sine;
                    currentAsteroidB.velocityY = velocityYB * cosine + velocityXB * sine;
                }
            }

            // Calculate new position
            currentAsteroid.x += currentAsteroid.velocityX;
            currentAsteroid.y += currentAsteroid.velocityY;

            // Friction
            if (Math.abs(currentAsteroid.velocityX) > 0.1) {
                currentAsteroid.velocityX *= currentAsteroid.friction;
            } else {
                currentAsteroid.velocityX = 0;
            }

            if (Math.abs(currentAsteroid.velocityY) > 0.1) {
                currentAsteroid.velocityY *= currentAsteroid.friction;
            } else {
                currentAsteroid.velocityY = 0;
            }

            context.beginPath();
            context.arc(currentAsteroid.x, currentAsteroid.y, currentAsteroid.radius, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }
    };

    init();
};