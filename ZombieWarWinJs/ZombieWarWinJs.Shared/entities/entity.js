(function () {
    "use strict";
    function Entity (){        
        this.position = { xScreen: 0, yScreen: 0, xMap: 0, yMap: 0, rotation: 0 }

        this.image = null;
        this.imageWidth = 0;
        this.imageHeight = 0;
        this.frames = [];
        this.currentFrame = 0;
        this.flipped = false;
        this.scale = 1;

        this.velocity = 1;
        this.alive = true;       
    }

    Entity.prototype.draw = function () {
        this.frames[this.currentFrame].draw(this.position.xScreen, this.position.yScreen, this.image,
            this.position.rotation, this.flipped, this.scale);
    }

    Entity.prototype.loadImage = function(path){
        var img = new Image();
        img.src = path;
        return img;
    }

    game.Entity = Entity;
}());