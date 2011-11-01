/*
$(document).ready(function(){
    initAllTheseThings();
});
*/

window.onload = function() {
    initAllTheseThings();
}

function initAllTheseThings() {
    var kerazyCanvas = function() {
        var canvas = $("#datCanvass");
        var context = canvas.get(0).getContext("2d"); 
        // canvas.attr("width", $(window).get(0).innerWidth);
        // canvas.attr("height", $(window).get(0).innerHeight);
        
        $(window).resize(resizeCanvas);
        
        function resizeCanvas()  {
            var canvasWidth = $("body").width();
            var canvasHeight = $("body").height();
            
            canvas.attr("width", canvasWidth);
            canvas.attr("height", canvasHeight);
            var halfCanvasWidth = canvasWidth/2;
            var halfCanvasHeight = canvasHeight/2;
            
            context.fillStyle = "rgb(46, 30, 56)";
            context.fillRect(0, 0, canvasWidth, canvasHeight);
            
            context.fillStyle = "rgba(255, 95, 80, .85)";
            context.beginPath();
            context.moveTo(100, 50);
            context.lineTo(150, 150);
            context.lineTo(50, 150);
            context.closePath();
            context.stroke();
            context.fill();
            
            context.strokeStyle = "rgba(255, 95, 80, .85)";
            context.lineWidth = 15;
            context.beginPath();
            context.moveTo(200, 400);
            context.quadraticCurveTo(400, 100, 600, 400); // x, y of control point, x, y of destination
            context.stroke();
            
            context.lineWidth = 5;
            context.beginPath();
            context.moveTo(200, 600);
            context.bezierCurveTo(400, 400, 600, 800, 800, 600); // x, y of control point 1, x, y of control point 2, x, y of destination
            context.stroke();
            
            /*
            var dataURL = canvas.get(0).toDataURL();
            var img = $("<img />");
            img.attr("src", dataURL);
            canvas.replaceWith(img);
            */
        }
        
        resizeCanvas();
    };
    
    kerazyCanvas();
}