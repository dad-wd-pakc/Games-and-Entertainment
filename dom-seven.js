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

            // context.fillStyle = "rgb(255, 255, 255)";
            // context.fillRect(0, 0, canvasWidth, canvasHeight);

            var image = new Image();
            image.src = "android-black-eyes.png";

            $(image).load(function () {
                // context.drawImage(source, cropXPos, cropYPos, width, height, targetXPos, targetYPos, targetWidth, targetHeight);

                // Top left
                context.translate(50, 50);
                context.drawImage(image, 0, 0, 512, 512);

                // Bottom left
                context.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation matrix
                context.translate(50, 1067);
                context.scale(1, -1);
                context.drawImage(image, 0, 0, 512, 512);

                // Bottom right
                context.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation matrix
                context.translate(990, 1067);
                context.scale(-1, -1);
                context.drawImage(image, 0, 0, 512, 512);

                // Top right
                context.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation matrix
                context.translate(990, 50);
                context.scale(-1, 1);
                context.drawImage(image, 0, 0, 512, 512);

                // context.getImageData(xPos, yPos, width, height);
                /*var imageData = context.getImageData(300, 300, 3, 3);
                var pixel = imageData.data;

                var red = pixel[0];
                var green = pixel[1];
                var blue = pixel[2];
                var alpha = pixel[3];*/

                /*var imageData = context.getImageData(300, 300, 3, 3);

                var width = imageData.width;
                var x = 2;
                var y = 2;

                var pixelRed = ((y - 1) * (width * 4)) + ((x - 1) * 4);
                var pixelGreen = pixelRed + 1;
                var pixelBlue = pixelRed + 2;
                var pixelAlpha = pixelRed + 3;*/
            });

            canvas.click(function (e) {
                var canvasOffset = canvas.offset();
                var canvasX = Math.floor(e.pageX - canvasOffset.left);
                var canvasY = Math.floor(e.pageY - canvasOffset.top);

                var imageData = context.getImageData(canvasX, canvasY, 1, 1);
                var pixel = imageData.data;
                var pixelColor = "rgba(" + pixel[0] + ", " + pixel[1] + ", " + pixel[2] + ", " + pixel[3] + ")";
                $("body").css("backgroundColor", pixelColor);

                console.log(pixelColor);
            });
        }

        resizeCanvas();
    };
    
    kerazyCanvas();
}