$(document).ready(function(){
    initGame();
});

var animationLoop = function () {
    var canvas = $("#mainCanvas");
    var context = canvas.get(0).getContext("2d");

    initGame();
};