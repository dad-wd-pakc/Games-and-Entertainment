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
            var canvasWidth = $("body").width();
            var canvasHeight = $("body").height();

            canvas.attr("width", canvasWidth);
            canvas.attr("height", canvasHeight);
            /*var halfCanvasWidth = canvasWidth / 2;
            var halfCanvasHeight = canvasHeight / 2;

            var imageData = context.createImageData(400, 400);
            var pixels = imageData.data;

            var numPixels = imageData.width * imageData.height;

            for (var i = 0; i < numPixels; i++) {
            pixels[i * 4] = Math.floor(Math.random() * 255);
            pixels[i * 4 + 1] = Math.floor(Math.random() * 255);
            pixels[i * 4 + 2] = Math.floor(Math.random() * 255);
            pixels[i * 4 + 3] = 255;
            };

            context.putImageData(imageData, 0, 0);*/

            var imageData = context.createImageData(500, 500);
            var pixels = imageData.data;

            // Numbers of mosaic tiles
            var numTileRows = 10;
            var numTileCols = 10;

            // Dimensions of each tile
            var tileWidth = imageData.width / numTileCols;
            var tileHeight = imageData.height / numTileRows;

            for (var r = 0; r < numTileRows; r++) {
                for (var c = 0; c < numTileCols; c++) {
                    // Set the pixel values for each tile
                    var red = Math.floor(Math.random() * 255);
                    var green = Math.floor(Math.random() * 255);
                    var blue = Math.floor(Math.random() * 255);

                    for (var tr = 0; tr < tileHeight; tr++) {
                        for (var tc = 0; tc < tileWidth; tc++) {
                            var trueX = (c * tileWidth) + tc;
                            var trueY = (r * tileHeight) + tr;

                            var pos = (trueY * (imageData.width * 4)) + (trueX * 4);
                            pixels[pos] = red;
                            pixels[pos + 1] = green;
                            pixels[pos + 2] = blue;
                            pixels[pos + 3] = 255;
                        };
                    };
                };

                context.putImageData(imageData, 0, 0);
            };
        }

        resizeCanvas();
    };
    
    kerazyCanvas();
}