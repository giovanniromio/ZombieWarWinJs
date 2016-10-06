// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {    
    "use strict";    

    WinJS.UI.Pages.define("/pages/game.html", {
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


(function(window){
    "use strict";

    window.game = {
        system: null,
        isPaused: false
    };

}(window))


var System = function (updateFPS, canvasID) {

    var canvasContext;
    var canvasElement;

    var entities = [];
    var player;
    

    var gametick = 0; // | >>gt1<< | >>gt2<< | >>gt3<< | >>gt4<< | >>gt5<< | => 1S
    var frameID = 0;    
    var dt = 0;
    var now = 0;
    var last = 0;

    //Clear or pause animation timer
    var timerID = 0;

    function init() {
        canvasElement = document.getElementById(canvasID);
        canvasContext = canvasElement.getContext("2d");

        gametick = 1000 / updateFPS;
        gametick = parseFloat(gametick.toFixed(5)); //to fix float errors


        //Map initialization
        //Hud initialization
        //Player initialization
        //ZombieManager initialization
        //BulletManager initialization

        var timerID = setInterval(run(), 1);
    }


    function run() {
        //Main GameLoop

        //| >>gt1<< | >>gt2<< | >>gt3<< | >>gt4<< | >>gt5<< | => 1S

        now = Date.now();
        dt += Math.Main(now - last, gametick * 5);

        while (dt > gametick) {
            update();
            dt -= gametick;
        }        
        
        requestAnimationFrame(draw());

    }


    function update() {
        
        //Map update        
        //Player update
        //Zombies update
        //Bullets update
        //Hud update

    }


    function draw() {

        //Map draw        
        //Player draw
        //Zombies draw
        //Bullets draw
        //Hud draw

    }

}

function startGame() {
    game.system = new System(30, "canvas2d");
}