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

        $(window).resize(resizeCanvas);

        function resizeCanvas() {
            // var canvasWidth = $("body").width();
            // var canvasHeight = $("body").height();

            canvas.attr("width", 500);
            canvas.attr("height", 500);

            var image = new Image();
            image.src = "white-lies.jpg";
            $(image).load(function () {
                context.drawImage(image, 0, 0, 500, 500);

                var imageData = context.getImageData(0, 0, canvas.width(), canvas.height());
                var pixels = imageData.data;
                // var numPixels = pixels.length;

                context.clearRect(0, 0, canvas.width(), canvas.height());

                // Colour inversion
                /*
                for (var i = 0; i < numPixels; i++) {
                pixels[i * 4] = 255 - pixels[i * 4]; // Red
                pixels[i * 4 + 1] = 255 - pixels[i * 4 + 1]; // Green
                pixels[i * 4 + 2] = 255 - pixels[i * 4 + 2]; // Blue
                };
                */

                // Grayscale
                /*
                for (var i = 0; i < numPixels; i++) {
                var average = (pixels[i * 4] + pixels[i * 4 + 1] + pixels[i * 4 + 2]) / 3;

                pixels[i * 4] = average; // Red
                pixels[i * 4 + 1] = average; // Green
                pixels[i * 4 + 2] = average; // Blue
                };
                */

                // Pixelation
                var numTileRows = 20;
                var numTileCols = 20;

                var tileWidth = imageData.width / numTileCols;
                var tileHeight = imageData.height / numTileRows;

                for (var r = 0; r < numTileRows; r++) {
                    for (var c = 0; c < numTileCols; c++) {
                        var x = (c * tileWidth) + (tileWidth / 2);
                        var y = (r * tileHeight) + (tileHeight / 2);

                        var pos = (Math.floor(y) * (imageData.width * 4)) + (Math.floor(x) * 4);

                        var red = pixels[pos];
                        var green = pixels[pos + 1];
                        var blue = pixels[pos + 2];

                        context.fillStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
                        // context.fillRect(x - (tileWidth / 2), y - (tileHeight / 2), tileWidth, tileHeight);

                        context.beginPath();
                        context.arc(x, y, tileWidth / 2, 0, Math.PI * 2, false);
                        context.closePath();
                        context.fill();
                    };
                };
            });
        }

        resizeCanvas();
    };
    
    kerazyCanvas();
}