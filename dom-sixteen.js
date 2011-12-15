$(document).ready(function(){
    initialiseGame();
});

var initialiseGame = function () {
    var canvas = $("#gameCanvas");
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
    var uiScore = $(".gameScore");

    var startGame = function () {
        uiRemaining.html("0");
        uiScore.html("0");
        uiStats.show();

        playGame = false;

        var platformX;
        var platformY;
        var platformOuterRadius;
        var platformInnerRadius;

        animate();
    };

    var init = function () {
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

    var animate = function () {
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        if (playGame) {
            setTimeout(animate, 33);
        }
    };

    init();
};