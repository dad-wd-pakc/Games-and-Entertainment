/*
$(document).ready(function(){
    initAllTheseThings();
});
*/

window.onload = function() {
    initAllTheseThings();
}

function initAllTheseThings() {
    var kerazyCanvas = function () {
        var canvas = $("#datCanvass");
        var context = canvas.get(0).getContext("2d");
        // canvas.attr("width", $(window).get(0).innerWidth);
        // canvas.attr("height", $(window).get(0).innerHeight);

        $(window).resize(resizeCanvas);

        function resizeCanvas() {
            var canvasWidth = $("body").width();
            var canvasHeight = $("body").height();

            canvas.attr("width", canvasWidth);
            canvas.attr("height", canvasHeight);
            var halfCanvasWidth = canvasWidth / 2;
            var halfCanvasHeight = canvasHeight / 2;

            context.fillStyle = "rgb(59, 41, 37)";
            context.fillRect(0, 0, canvasWidth, canvasHeight);

            context.shadowBlur = canvasWidth * 0.05;
            context.shadowColor = "rgb(255, 255, 255)";

            var image = new Image();
            image.src = "sample.jpg";

            $(image).load(function () {
                // context.drawImage(source, cropXPos, cropYPos, width, height, targetXPos, targetYPos, targetWidth, targetHeight); 
                // context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
                // context.drawImage(image, 0, 210, 1280, 814, 0, 0, canvasWidth, canvasHeight);
                context.drawImage(image, 0, 210, 1280, 814, 0, 0, canvasWidth * 0.75, canvasHeight * 0.75);
                // context.drawImage(image, 0, 0, canvasWidth * 0.75, canvasHeight * 0.75);
            });
        }

        resizeCanvas();
    };
    
    kerazyCanvas();
}