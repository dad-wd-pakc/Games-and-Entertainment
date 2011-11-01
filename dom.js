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
            
            context.fillStyle = "rgb(255, 255, 0)";
            context.beginPath();
            context.arc(halfCanvasWidth, halfCanvasHeight, halfCanvasHeight, 0, Math.PI * 2, false);
            context.closePath();
            context.fill();
        };
        
        // Rectangle: x, y, width height
        // Draw filled rectangle
        // context.fillRect(40, 40, 200, 100);
        // Draw stroked rectangle
        // context.strokeRect(40, 40, 200, 100);
        
        /* Straight line
        context.beginPath();
        context.moveTo(40, 40);
        context.lineTo(340, 340);
        context.closePath();
        context.stroke();
        */
        
        /* Circle: x, y, radius, startAngle, endAngle, anticlockwise */
        // context.beginPath();
        // context.arc(150, 150, 80, 0, Math.PI*2, false);
        // context.arc(150, 150, 80, 0, Math.PI, false);
        // context.closePath;
        // context.fill();
        
        // Canvas uses radians
        // var degrees = 1;
        // var radians = degrees * (Math.PI / 180);
        
        context.fillStyle = "rgb(0, 255, 255)";
        context.fillRect(40, 40, 100, 100);
        context.fillRect(180, 40, 100, 100);
        
        context.fillStyle = "rgb(0, 0, 255)";
        context.fillRect(320, 40, 100, 100);
        
        context.strokeStyle = "rgb(255, 0, 255)";
        context.strokeRect(40, 40, 100, 100);
        context.strokeRect(180, 40, 100, 100);
        
        context.strokeStyle = "rgb(255, 255, 0)";
        context.strokeRect(320, 40, 100, 100);
        
        context.lineWidth = 15;
        context.strokeStyle = "rgb(0, 0, 0)";
        context.beginPath();
        context.moveTo(200, 300);
        context.lineTo(500, 300);
        context.closePath();
        context.stroke();
        
        context.lineWidth = 10;
        context.strokeStyle = "rgb(255, 255, 0)";
        context.beginPath();
        context.moveTo(50, 450);
        context.lineTo(590, 450);
        context.closePath();
        context.stroke();
        
        context.lineWidth = 10;
        context.strokeStyle = "rgb(100, 0, 100)";
        context.strokeRect(200, 200, 40, 40);
        
        context.lineWidth = 15;
        context.strokeStyle = "rgb(100, 0, 255)";
        context.strokeRect(300, 200, 40, 40);
        
        context.lineWidth = 20;
        context.strokeStyle = "rgb(100, 255, 255)";
        context.strokeRect(400, 200, 40, 40);
        
        var text = "This is a poor substitute for proper HTML text";
        context.font = "bold 30px georgia";
        context.fillText(text, 100, 600);
        
        context.lineWidth = 1;
        var strokeText = "This is stroked text";
        context.font = "60px sans-serif";
        context.strokeText(strokeText, 200, 700);
        
        // Clear the canvas
        // context.clearRect(0, 0, canvas.width(), canvas.height());
        
        // Reset the canvas
        // canvas.attr("width", canvas.width());
        // canvas.attr("height", canvas.height());

        // context.fillStyle = "rgb(255, 255, 0)";
        // context.beginPath();
        // context.arc(halfCanvasWidth, halfCanvasHeight, halfCanvasHeight, 0, Math.PI * 2, false);
        // context.closePath();
        // context.fill();
        
        // context.clearRect(halfCanvasWidth, halfCanvasHeight, halfCanvasHeight, halfCanvasHeight);
        
        resizeCanvas();
    };
    
    kerazyCanvas();
}