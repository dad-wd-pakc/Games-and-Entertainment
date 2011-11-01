$(document).ready(function(){
    initAllTheseThings();
});

function initAllTheseThings() {     
    var basicFunction = function() {
        var secondaryHeadings = $("h2");
        secondaryHeadings.html("Content is about to change...");
    }
    basicFunction();
    
    var kerazyCanvas = function() {
        var canvas = $("#datCanvass");
        var context = canvas.get(0).getContext("2d");
        var halfCanvasWidth = canvas.width()/2;
        var halfCanvasHeight = canvas.height()/2;
        
        canvas.attr("width", $(window).get(0).innerWidth);
        canvas.attr("height", $(window).get(0).innerHeight);
        
        $(window).resize(resizeCanvas);
        
        function resizeCanvas()  {
            // alert("BOOM!");
            canvas.attr("width", $(window).get(0).innerWidth);
            canvas.attr("height", $(window).get(0).innerHeight);
            // Reset the canvas
            canvas.attr("width", canvas.width());
            canvas.attr("height", canvas.height());
            
            var halfCanvasWidth = canvas.width()/2;
            var halfCanvasHeight = canvas.height()/2;
            
            context.fillStyle = "rgb(130, 250, 255)";
            context.beginPath();
            context.arc(halfCanvasWidth, halfCanvasHeight, halfCanvasHeight, 0, Math.PI * 2, false);
            context.closePath();
            context.fill();
        };
        
        resizeCanvas();
    };
    
    kerazyCanvas();
}