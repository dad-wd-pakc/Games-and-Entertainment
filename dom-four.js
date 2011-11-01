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
        canvas.attr("width", $("body").width());
        canvas.attr("height", $("body").height());
        var halfCanvasWidth = canvas.width()/2;
        var halfCanvasHeight = canvas.height()/2;
        
        context.setTransform(1, 0, 0, 1, 0, 0); // x-scale, y-skew, x-skew, y-scale, x-trans, y-trans
        var xScale = Math.cos(0.7854);
        var ySkew = -Math.sin(0.7854);
        var xSkew = Math.sin(0.7854);
        var yScale = Math.cos(0.7854);
        var xTrans = 100;
        var yTrans = 100;
        
        context.transform(xScale, ySkew, xSkew, yScale, xTrans, yTrans);
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(0, 0, 100, 100);
        
        context.globalAlpha = 0.9;
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(50, 50, 100, 100);
        
        context.globalAlpha = 0.8;
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(100, 100, 100, 100);
        
        context.globalAlpha = 0.7;
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(150, 150, 100, 100);
        
        context.globalAlpha = 0.6;
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(200, 200, 100, 100);
        
        context.globalAlpha = 0.5;
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(250, 250, 100, 100);
        
        context.globalAlpha = 0.4;
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(300, 300, 100, 100);
        
        context.globalAlpha = 0.3;
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(350, 350, 100, 100);
        
        context.globalAlpha = 0.2;
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(400, 400, 100, 100);
        
        // Reset
        context.setTransform(1, 0, 0, 1, 0, 0); // x-scale, y-skew, x-skew, y-scale, x-trans, y-trans
        context.globalAlpha = 1;
        
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(100, 250, 100, 100);
        context.globalCompositeOperation = "source-over"; // Default setting, drawn over existing canvas
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(150, 300, 100, 100);
        
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(300, 250, 100, 100);
        context.globalCompositeOperation = "destination-over"; // Drawn under existing canvas
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(350, 300, 100, 100);
        
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(500, 250, 100, 100);
        context.globalCompositeOperation = "source-atop"; // Cropped inside existing content
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(550, 300, 100, 100);
        
        context.globalCompositeOperation = "source-over";
        
        /*
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(500, 250, 100, 100);
        context.globalCompositeOperation = "destination-atop"; // Existing content is cropped inside
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(550, 300, 100, 100);
        
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(500, 250, 100, 100);
        context.globalCompositeOperation = "source-in"; // Only where the source and destination overlap, new item remains
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(550, 300, 100, 100);
        
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(500, 250, 100, 100);
        context.globalCompositeOperation = "destination-in"; // Only where the source and destination overlap, existing content remains
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(550, 300, 100, 100);
        
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(500, 250, 100, 100);
        context.globalCompositeOperation = "source-out"; // Only where the source and destination  do not overlap, new item remains
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(550, 300, 100, 100);
        
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(500, 250, 100, 100);
        context.globalCompositeOperation = "destination-out"; // Only where the source and destination  do not overlap, existing content remains
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(550, 300, 100, 100);
        */
        
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(700, 250, 100, 100);
        context.globalCompositeOperation = "lighter"; // Adds the RGB values of the overlap
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(750, 300, 100, 100);
        
        /*
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(100, 450, 100, 100);
        context.globalCompositeOperation = "copy"; // Only the new element will be drawn
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(150, 500, 100, 100);
        */
        
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(300, 450, 100, 100);
        context.globalCompositeOperation = "xor"; // Only where there is no overlap, will be drawn
        context.fillStyle = "rgb(46, 30, 56)";
        context.fillRect(350, 500, 100, 100);
        
        context.globalCompositeOperation = "source-over";
        context.shadowColor = "rgba(46, 30, 56, 0.5)";
        context.shadowBlur = 1;
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.fillStyle = "rgba(255, 95, 80, 1)";
        context.fillRect(500, 450, 100, 100);
        
        context.shadowColor = "rgba(46, 30, 56, 1)";
        context.shadowBlur = 50;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.fillStyle = "rgba(255, 95, 80, .75)";
        context.beginPath();
        context.arc(750, 500, 50, 0, Math.PI*2, false);
        context.closePath();
        context.fill();
        
        context.shadowBlur = 0;
        var gradient = context.createLinearGradient(0, 0, 0, canvas.height());
        gradient.addColorStop(0, "rgba(247, 153, 33, 1)");
        gradient.addColorStop(0.5, "rgba(64, 117, 145, 1)");
        gradient.addColorStop(1, "rgba(46, 30, 56, 1)");
        
        context.fillStyle = gradient;
        context.fillRect(900, 50, 200, 500);
        
        var radialGradient = context.createRadialGradient(1200, 150, 0, 1200, 150, 250); // x0, y0, r0, x1, y1, r1
        radialGradient.addColorStop(0, "rgba(247, 153, 33, 1)");
        radialGradient.addColorStop(1, "rgba(46, 30, 56, 1)");
        
        context.fillStyle = radialGradient;
        context.fillRect(1100, 50, 200, 200);
    };
    
    kerazyCanvas();
}