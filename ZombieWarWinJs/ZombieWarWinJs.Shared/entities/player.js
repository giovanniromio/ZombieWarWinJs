(function (window) {
    "use strict";

    var Player = function() {

        this.init = function() {

            game.Entity.init.apply(this, null);

            this.position = { xScreen: 200, yScreen: 200, xMap: 200, yMap: 200, rotation: 0 }

            this.imageWidth = 27;
            this.imageHeight = 31;
            this.framesInAnimation = 5;

            this.image = null;
            this.animation = game.Entity.loadImage("/resources/sprites/player.png");

            var that = this;
            this.animation.onload = function () {
                for (var i = 0; i < that.framesInAnimation; i++) {
                    that.frames[i] = new game.Frame(i * that.imageWidth, 0, that.imageWidth, that.imageHeight);
                }
            }
            
        };

        this.update = function() {
            this.image = this.animation;
            this.currentFrame = this.currentFrame === this.framesInAnimation ? 0 : this.currentFrame++;
        };

        this.draw = function () {
            game.Entity.draw.apply(this, null);
        };

        this.init();

    };
    game.Player = Player;
}(window))