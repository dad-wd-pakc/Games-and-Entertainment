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
        
        context.translate(-50, -50);
        
        context.fillStyle = "rgb(130, 250, 255)";
        context.save();
        context.fillRect(50, 50, 100, 100); // Blue
        
        context.fillStyle = "rgb(242, 197, 61)";
        context.save();
        context.fillRect(150, 150, 100, 100); // Yellow
        
        context.restore();
        context.fillRect(250, 250, 100, 100); // Yellow
        
        context.restore();
        context.fillRect(350, 350, 100, 100); // Blue
        
        context.scale(2, 2);
        context.fillRect(225, 225, 50, 50);
        
        context.save();
        
        context.translate(50, 50);
        context.scale(2, 2);
        context.fillRect(112.5, 112.5, 25, 25);
        
        context.restore();
        context.fillStyle = "rgb(242, 197, 61)";
        context.fillRect(325, 325, 50, 50);
        
        context.translate(392.5, 392.5);
        context.rotate(0.7854); // Rotate 45 Degrees (Math.PI/4)
        context.fillRect(-25, -25, 50, 50);
        
        context.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation matrix. x-scale, y-skew, x-skew, y-scale, x-trans, y-trans
        var xScale = Math.cos(0.7854);
        var ySkew = -Math.sin(0.7854);
        var xSkew = Math.sin(0.7854);
        var yScale = Math.cos(0.7854);
        var xTrans = 200;
        var yTrans = 600;
        
        context.transform(xScale, ySkew, xSkew, yScale, xTrans, yTrans);
        context.fillStyle = "rgb(255, 95, 80)";
        context.fillRect(-50, -50, 100, 100);
    };
    
    kerazyCanvas();
}