/*
$(document).ready(function(){
    initAllTheseThings();
});
*/

window.onload = function() {
    initAllTheseThings();
}

function initAllTheseThings() {
    var vivaciousVideo = function () {
        var video = $("#sampleVideo");

        $("#play").click(function () {
            video.get(0).play();
        });

        $("#pause").click(function () {
            video.get(0).pause();
        });
    };

    var coolCanvasVideo = function () {
        var video = $("#canvasVideo");

        $("#playCanvas").click(function () {
            video.get(0).play();
        });

        $("#pauseCanvas").click(function () {
            video.get(0).pause();
        });

        var canvas = $("#mainCanvas");
        var context = canvas.get(0).getContext("2d");

        video.bind("play", function () {
            drawCanvas();
        });

        var drawCanvas = function () {
            if (video.get(0).paused || video.get(0).ended) {
                return false;
            }

            context.drawImage(video.get(0), 0, 0, 560, 320);

            var imageData = context.getImageData(0, 0, canvas.width(), canvas.height());
            var pixels = imageData.data;

            context.clearRect(0, 0, canvas.width(), canvas.height());

            var numTileRows = 32;
            var numTileCols = 56;

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
                    context.fillRect(x - (tileWidth / 2), y - (tileHeight / 2), tileWidth, tileHeight);

                    // Circles!
                    /*
                    context.beginPath();
                    context.arc(x, y, tileWidth / 2, 0, Math.PI * 2, false);
                    context.closePath();
                    context.fill();
                    */
                };
            };

            setTimeout(drawCanvas, 30);
        };
    };

    vivaciousVideo();
    coolCanvasVideo();
}