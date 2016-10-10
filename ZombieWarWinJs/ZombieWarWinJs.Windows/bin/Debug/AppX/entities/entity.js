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
            this.imageWidth = 0;
            this.imageHeight = 0;
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
            frames[this.currentFrame].draw(this.position.xScreen, this.position.yScreen, this.image, this
                .position.rotation, this.flipped, this.scale);
        }


        function loadImage(path) {
            var img = new Image();
            img.src = path;
            return img;
        }


    }

    this.game.Entity = Entity;
}())