// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {    
    "use strict";    

    WinJS.UI.Pages.define("/pages/game/game.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {            
            WinJS.Utilities.query("a", document).listen("click", navigationHandler, false);
            startGame();
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();


(function(window) {
    "use strict";
    window.game = {
        system: null,
        isPaused: false
    };

}(window));


var System = function (updateFPS, canvasID) {
    //pubbliche perchè richiesto dalla libreria Frame.js
    this.canvascontext = null;
    this.canvaselement = null;

    var entities = [];
    var player = null;    

    var gametick = 0; // | >>gt1<< | >>gt2<< | >>gt3<< | >>gt4<< | >>gt5<< | => 1S
    var frameID = 0;    
    var dt = 0;
    var now = 0;
    var last = 0;
    //Clear or pause animation timer
    var timerID = 0;

    var init = function() {
        this.canvaselement = document.getElementById(canvasID);
        this.canvascontext = this.canvaselement.getContext("2d");

        gametick = 1000 / updateFPS;
        gametick = parseFloat(gametick.toFixed(5)); //to fix float errors
        
        player = createEntity("Player");
        
        var that = this;
        timerID = setInterval(function(){that.run()}, 1);
    }

    var run = function() {       

        now = Date.now();
        dt += Math.min(now - last, gametick * 5);

        while (dt > gametick) {
            update();
            dt -= gametick;
        }        
        
        requestAnimationFrame(draw());
    }

    var update = function () {
        
        this.entities.forEach(function (entity) {            
            entity.update();
        });       

    }

    var draw = function () {

        this.canvascontext.clearRect(0, 0, 1366, 768);        
        
        this.entities.forEach(function (entity) {            
            entity.draw();
        });        
        
    }

    var createEntity = function(entity, settings) {
        if (typeof settings !== "undefined") {
            this.entities.push(new game[entity](settings));
        } else {
            this.entities.push(new game[entity]());
        }
        return this.entities[this.entities.length - 1];
    }
    
    return {init: init}

}

function startGame() {
    game.system = new System(30, "canvas2d");
    game.system.init();
}