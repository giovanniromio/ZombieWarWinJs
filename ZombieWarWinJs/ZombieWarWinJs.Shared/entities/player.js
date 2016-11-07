(function (window) {
    "use strict";

    function Player() {
        game.Entity.call(this); //inizializza il costruttore
        
        this.position = { xScreen: 200, yScreen: 200, xMap: 200, yMap: 200, rotation: 0 };       
        this.distance = null;        
                
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

        var directionX = 0;
        var directionY = 0;

        if (game.system.inputManager.arrowRight) {
            directionX += 1;
        }

        if (game.system.inputManager.arrowUp) {
            directionY -= 1;
        }

        if (game.system.inputManager.arrowDown) {
            directionY += 1;
        }

        if (game.system.inputManager.arrowLeft) {
            directionX -= 1;
        }
                
        this.distance = Math.sqrt(Math.pow(directionX, 2) + Math.pow(directionY, 2));
        if (this.distance != 0) {
            //Vettore direzione * vettore velocità
            //Lo spazio percorso è dato dal vettore direzione * (tempoTrascorsoT * distanzaDaPercorrereInT)
            this.position.xScreen += (directionX / this.distance) * (dt * this.velocity);
            this.position.yScreen += (directionY / this.distance) * (dt * this.velocity);
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