;(function (window) {
    "use strict";

    function InputManager() {
        this.arrowLeft = false;
        this.arrowRight = false;
        this.arrowUp = false;
        this.arrowDown = false;
        this.cursorPosition = {x : null, y : null}

        this.init();
    }

    InputManager.prototype.init = function () {
        var that = this;
        window.addEventListener("keydown", function(e){
            that.keyDown.call(that, e);
        });
        window.addEventListener("keyup", function(e){
            that.keyUp.call(that, e);
        });
        window.addEventListener("mousemove",function(e){
            that.mouseMove.call(that,e)
        });


    }

    InputManager.prototype.keyDown = function (e) {
        
        switch (e.keyCode) {
            //Arrow left
            case (37): this.arrowLeft = true; break;
            //Upper key
            case (38): this.arrowUp = true; break;
            //Arrow right
            case (39): this.arrowRight = true; break;
            //Arrow down
            case (40): this.arrowDown = true; break;
        }
    }

    InputManager.prototype.keyUp = function (e) {        
        switch (e.keyCode) {
            //Arrow left
            case (37): this.arrowLeft = false; break;
            //Upper key
            case (38): this.arrowUp = false; break;
            //Arrow right
            case (39): this.arrowRight = false; break;
            //Arrow down
            case (40): this.arrowDown = false; break;
        }
    }    

    InputManager.prototype.mouseMove = function (e) {
        var canvasRect = game.system.canvaselement.getBoundingClientRect();
        this.cursorPosition.x = e.clientX - canvasRect.left;
        this.cursorPosition.y = e.clientY - canvasRect.top;
    }

    game.InputManager = InputManager;

}(window));