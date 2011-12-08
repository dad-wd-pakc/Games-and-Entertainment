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

    var animate = function () {
        setTimeout(animate, 33);
    };
};