(function (window) {
    "use strict";

    function Player() {
        game.Entity.call(this); //inizializza il costruttore

        //Per ogni frame bisogna sommare la velocita alla posizione [e la accellerazione alla velocità]
        this.position = { xScreen: 200, yScreen: 200, xMap: 200, yMap: 200, rotation: 0 };       
        this.velocityVector = null;
        this.accellerationVector = null;

        this.imageWidth = 0;
        this.imageHeight = 0;
        this.framesInAnimation = 5;
        this.image = null;
        this.animation = {spritesheet: null, timer: 0, timing: 1}

        this.init();
    };

    Player.prototype = Object.create(game.Entity.prototype); //Eredita da Entity

    Player.prototype.init = function () {

        this.animation.spritesheet = this.loadImage("/resources/sprites/player.png");
        var that = this;
        this.animation.spritesheet.onload = function () {
            that.imageWidth = that.animation.spritesheet.width.toFixed(0) / that.framesInAnimation;
            that.imageHeight = that.animation.spritesheet.height.toFixed(0);
            for (var i = 0; i < that.framesInAnimation; i++) {
                that.frames[i] = new game.Frame(i * that.imageWidth, 0, that.imageWidth, that.imageHeight);
            }
        }
            
    };
    Player.prototype.update = function() {
        this.image = this.animation.spritesheet;
        
        if (game.system.inputManager.arrowLeft === true || game.system.inputManager.arrowRight === true
            || game.system.inputManager.arrowUp === true || game.system.inputManager.arrowDown === true) {
            this.currentFrame++;
            if (this.currentFrame === this.framesInAnimation) {
                        this.currentFrame = 0;
            }
        }

        var velocityX = 0;
        var velocityY = 0;        

        if (game.system.inputManager.arrowRight) {            
            velocityX += this.velocity;
        }

        if (game.system.inputManager.arrowUp) {            
            velocityY -= this.velocity;
        }

        if (game.system.inputManager.arrowDown) {            
            velocityY += this.velocity;
        }

        if (game.system.inputManager.arrowLeft) {            
            velocityX -= this.velocity;
        }
                
        this.velocityVector = Math.sqrt(Math.pow(velocityX,2) + Math.pow(velocityY,2));
        if (this.velocityVector != 0) {
            this.position.xScreen += velocityX / this.velocityVector;
            this.position.yScreen += velocityY / this.velocityVector;
        }

    };
    
    //Player.prototype.draw = function () {
    //    this.frames[this.currentFrame].draw(this.position.xScreen, this.position.yScreen, this.image,
    //        this.position.rotation, this.flipped, this.scale);
    //};
    
    Player.prototype.constructor = Player;

    game.Player = Player;
}(window))