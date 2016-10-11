(function (window) {
    "use strict";

    var Player = function() {

        this.init = function () {
            
            game.Entity.init.apply(this, null);

            this.animation = game.Entity.loadImage.apply("resources/sprites/player.png");

            this.image = null;
            this.imageWidth = this.animation.width / 5;
            this.imageHeight = this.animation.height;

            this.position.xScreen = 200;
            this.position.yScreen = 200;
            this.position.xMap = 200;
            this.position.yMap = 200;
            this.position.rotation = 0;

            for (var i = 0; i < 5; i++) {
                this.frames[i] = new game.Frame(i * this.imgWidth, 0, this.imgWidth, this.imgHeight);
            }
        };

        this.update = function() {
            this.image = this.animation;
        };

        this.draw = function() {
            game.Entity.draw.apply(this, null);
        };

        this.init();

    };
    game.Player = Player;
}(window))