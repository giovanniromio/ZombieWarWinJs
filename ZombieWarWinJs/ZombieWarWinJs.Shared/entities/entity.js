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
            this.frames = [];
            this.currentFrame = 0;
            this.flipped = false;
            this.scale = 1;
            
            //Game logic
            this.velocity = 0;
            this.alive = true;

        }


        function update() {
            
        }


        function draw() {
            frames[currentFrame].draw(this.position.xScreen, this.position.yScreen, frames[currentFrame], this.position.rotation, this.flipped, this.scale)
        }


    }

    this.game.Entity = Entity;
}())