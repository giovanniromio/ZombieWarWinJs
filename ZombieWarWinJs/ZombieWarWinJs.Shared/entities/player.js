(function (window) {
    "use strict";

    function Player() {
        game.Entity.call(this); //inizializza il costruttore

        //Per ogni frame bisogna sommare la velocita alla posizione [e la accellerazione alla velocità]
        this.position = { xScreen: 200, yScreen: 200, xMap: 200, yMap: 200, rotation: 0 };       
        this.velocityVector = null;
        this.accelleration = { min : 1, max : 5 };
                
        this.imageWidth = 0;
        this.imageHeight = 0;
        this.framesInAnimation = 5;
        this.image = null;
        this.animation = { spritesheet: null, timer: 0, timing: 1 }
        this.velocity = 50 / 1000; //pixel in second        

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
    Player.prototype.update = function(dt) {
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
            velocityX += 1;
        }

        if (game.system.inputManager.arrowUp) {
            velocityY -= 1;
        }

        if (game.system.inputManager.arrowDown) {
            velocityY += 1;
        }

        if (game.system.inputManager.arrowLeft) {
            velocityX -= 1;
        }
                
        this.velocityVector = Math.sqrt(Math.pow(velocityX,2) + Math.pow(velocityY,2));
        if (this.velocityVector != 0) {
            this.position.xScreen += (velocityX / this.velocityVector) * (dt * this.velocity);
            this.position.yScreen += (velocityY / this.velocityVector) * (dt * this.velocity);
        }

        var cP = game.system.inputManager.cursorPosition;

        this.position.rotation = (Math.atan2((cP.y - (this.position.yScreen + (this.imageHeight / 2))), cP.x - (this.position.xScreen + (this.imageWidth / 2))) - Math.PI/2) * 180 / Math.PI;//Perchè l'immagine è ruotata verso il basso e non verso destra e la funzione draw di frame utilizza i gradi e non i radianti
    };
    
    Player.prototype.draw = function () {
        game.Entity.prototype.draw.call(this, null);
    };
    
    Player.prototype.constructor = Player;

    game.Player = Player;
}(window))