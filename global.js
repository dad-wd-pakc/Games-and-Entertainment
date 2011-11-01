window.onload = function() {
    initAllTheseThings();
}

function initAllTheseThings() {     
    var basicFunction = function() {
        function formatName(firstName, lastName) {
            return "<p>" + firstName + " " + lastName + "</p>";
        }
        var myName = formatName("J.","Query");
        document.write(myName);
    }
    //basicFunction();
    
    var basicRocket = function() {
        function Rocket(rocketName, engineCount, thrust, wings) {
            this.rocketName = rocketName;
            this.engineCount = engineCount;
            this.thrust = thrust;
            this.wings = wings;
            this.powerUpEngines = function(engineState) {
                if(engineState.toString().toUpperCase() == "ON") {
                    document.write("<p>All Engines " + "(" + engineCount + ") of " + this.rocketName + " are now <strong>ON</strong>!</p>");
                } else if(engineState.toString().toUpperCase() == "OFF") {
                    document.write("<p>All Engines " + "(" + engineCount + ") of " + this.rocketName  + " are now <strong>OFF</strong>!</p>");
                } else {
                    document.write("<p>" + this.rocketName + "'s engines can only be <strong>on</strong> or <strong>off</strong>, not " + "<strong>" + engineState.toString().toUpperCase() + "</strong> :-(</p>");
                }
            }
        }
        
        var rocket = new Rocket("Maude", 10, 4000, 3);
        rocket.powerUpEngines("On Like Donkey Kong");
        
        var anotherRocket = new Rocket("Elsie", 8, 6000, 6);
        anotherRocket.powerUpEngines("oN");
        
        var rocketDeets = rocket.rocketName + " has <strong>" + rocket.wings + "</strong> wings.";
        var anotherRocketDeets = anotherRocket.rocketName + " has <strong>" + anotherRocket.engineCount + "</strong> engines.";
        
        var shabba = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum vehicula varius. Curabitur commodo varius massa non auctor.";
        
        function wrapInParagraph(content) {
            document.write("<p>" + content + "</p>");
        }
        
        var firstParagraph = wrapInParagraph(rocketDeets);
        var secondParagraph = wrapInParagraph(anotherRocketDeets);
        var thirdParagraph = wrapInParagraph(shabba);
    }
    
    basicRocket();
}