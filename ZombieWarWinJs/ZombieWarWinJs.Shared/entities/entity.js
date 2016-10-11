(function () {
    "use strict";
    var Entity = {
        //Questa è un'interfaccia, non deve mai essere inizializzata con una new!
        init : function() {
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

        },
        update: function() {
            
        },
        draw: function() {
            this.frames[this.currentFrame].draw(this.position.xScreen, this.position.yScreen, this.image, this
                .position.rotation, this.flipped, this.scale);
        },
        loadImage: function (path) {
            var img = new Image();
            img.src = path;
            return img;
        }
    }

    game.Entity = Entity;
}())