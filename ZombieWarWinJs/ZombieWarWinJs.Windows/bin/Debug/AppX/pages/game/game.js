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
    
    this.canvascontext = null;
    this.canvaselement = null;

    this.entities = [];
    this.player = null;
    

    this.gametick = 0; // | >>gt1<< | >>gt2<< | >>gt3<< | >>gt4<< | >>gt5<< | => 1S
    this.frameID = 0;    
    this.dt = 0;
    this.now = 0;
    this.last = 0;

    //Clear or pause animation timer
    this.timerID = 0;

    this.init = function() {
        this.canvaselement = document.getElementById(canvasID);
        this.canvascontext = this.canvaselement.getContext("2d");

        this.gametick = 1000 / updateFPS;
        this.gametick = parseFloat(this.gametick.toFixed(5)); //to fix float errors

        //Map initialization
        this.player = this.createEntity("Player");

        //Player initialization
        //ZombieManager initialization
        //BulletManager initialization
        //Hud initialization
        var that = this;
        this.timerID = setInterval(function(){that.run()}, 1);
    }


    this.run = function() {
        //Main GameLoop

        //| >>gt1<< | >>gt2<< | >>gt3<< | >>gt4<< | >>gt5<< | => 1S

        this.now = Date.now();
        this.dt += Math.min(this.now - this.last, this.gametick * 5);

        while (this.dt > this.gametick) {
            this.update();
            this.dt -= this.gametick;
        }        
        
        requestAnimationFrame(this.draw());

    }


    this.update = function () {

        //Map update   
        this.entities.forEach(function (entity) {
            //Player draw
            //Zombies draw
            //Bullets draw
            entity.update();
        });
        //Hud update

    }


    this.draw = function () {


        this.canvascontext.clearRect(0, 0, 768, 1366);

        //Map draw    
        
        this.entities.forEach(function (entity) {
            //Player draw
            //Zombies draw
            //Bullets draw
            entity.draw();
        });
        
        //Hud draw
    }

    this.createEntity = function(entity, settings) {
        if (typeof settings !== "undefined") {
            this.entities.push(new game[entity](settings));
        } else {
            this.entities.push(new game[entity]());
        }
        return this.entities[this.entities.length - 1];
    }
    
}

function startGame() {
    game.system = new System(30, "canvas2d");
    game.system.init();
}