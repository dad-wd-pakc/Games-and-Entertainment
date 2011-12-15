$(document).ready(function(){
    initialiseGame();
});

var initialiseGame = function () {
    var canvas = $("#mainCanvas");
    var context = canvas.get(0).getContext("2d");

    var canvasHeight = canvas.height();
    var canvasWidth = canvas.width();

    var playGame;

    var ui = $("#gameUI");
    var uiIntro = $("#gameIntro");
    var uiStats = $("#gameStats");
    var uiComplete = $("#gameComplete");
    var uiPlay = $("#gamePlayBtn");
    var uiReset = $("#gameResetBtn");
    var uiRemaining = $("#gameAsteroids");
    var uiScore = $("#gameScore");

    var startGame() {
        playGame = false;

        animate();
    };

    var init = function() {
        
    };

    var animate = function() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        if (playGame) {
            setTimeout(animate, 33);
        }
    };
};