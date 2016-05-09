//var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {create: create, update: update });


TrumpInvader.Game = function(game) {
    this.enemyGroup;
    this.eshipGroup;
    this.laserGroup;
    this.gameover;
    this.health;
    this.score;
    this.music;
};
TrumpInvader.Game.prototype = {
    create: function() {
        this.gameover = false;
        this.score = 0;
        this.music = this.add.audio("Bergentrückung");
        this.buildWorld();
    },
    
    
    
    buildWorld: function() {
        var ship;
        ship = this.add.image(0, 0, "futurefighter")
        var cursors;
       	game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.defaultRestitution = 0.8;
        game.physics.p2.enable(sprite);
        game.body.fixedRotation = true;
        cursors = this.input.keyboard.createCursorKeys();
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(onDown, this);
    },
    

    update: function() {
        if (cursors.left.isDown)
           {
            ship.body.moveLeft(400);
        }
        else if (cursors.right.isDown)
        {
            ship.body.moveRight(400);
        }

        if (cursors.up.isDown)
        {
            ship.body.moveUp(400);
        }
        else if (cursors.down.isDown)
        {
            ship.body.moveDown(400);
        }
    },
};