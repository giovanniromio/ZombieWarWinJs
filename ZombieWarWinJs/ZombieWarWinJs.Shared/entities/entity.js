(function () {
    "use strict";
    var Entity = function () {

        function init() {
            //Position to draw
            this.position = {
                xScreen: 0, yScreen: 0, xMap: 0, yMap: 0, rotation: 0
            }

            //Image
            this.image = null;
            this.imgWidth = 0;
            this.imgHeight = 0;
            
            //Game logic
            this.velocity = 0;
            this.alive = true;

        }


        function update() {
            
        }


        function draw() {
            
        }


    }

    this.game.Entity = Entity;
}())