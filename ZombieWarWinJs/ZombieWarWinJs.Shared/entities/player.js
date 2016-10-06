(function () {
    "use strict";


    var Player = function() {
        this.game.Entity.init.apply(this, null);

        this.update = function() {
            //animation logic
        }

        this.draw = function() {
            this.game.Entity.draw.apply(this, null);
        }

    }

    game.Player = Player;
}())