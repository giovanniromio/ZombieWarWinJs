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


    function init() {
        canvasElement = document.getElementById("canvas2d");
        canvasContext = canvasElement.getContext("2d");
    }


    function run() {
        //Main GameLoop


    }


    function update() {
    }


    function draw() {

    }  



}

function startGame() {
    game.system = new System()
}