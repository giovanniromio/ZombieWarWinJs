(function (window) {
    "use strict";

    function Player() {
        game.Entity.call(this); //inizializza il costruttore

        this.position = { xScreen: 200, yScreen: 200, xMap: 200, yMap: 200, rotation: 0 };
        this.imageWidth = 27;
        this.imageHeight = 31;
        this.framesInAnimation = 5;
        this.image = null;
        
        this.init();
    };

    Player.prototype = Object.create(game.Entity.prototype); //Eredita da Entity

    Player.prototype.init = function() {                    
        this.animation = this.loadImage("/resources/sprites/player.png");
        var that = this;
        this.animation.onload = function () {
            for (var i = 0; i < that.framesInAnimation; i++) {
                that.frames[i] = new game.Frame(i * that.imageWidth, 0, that.imageWidth, that.imageHeight);
            }
        }
            
    };
    Player.prototype.update = function() {
        this.image = this.animation;
        this.currentFrame = this.currentFrame === this.framesInAnimation ? 0 : this.currentFrame++;
    };
    //Player.prototype.draw = function () {
    //    this.frames[this.currentFrame].draw(this.position.xScreen, this.position.yScreen, this.image,
    //        this.position.rotation, this.flipped, this.scale);
    //};
    
    Player.prototype.constructor = Player;

    game.Player = Player;
}(window))