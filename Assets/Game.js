//var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {create: create, update: update });


TrumpInvader.Game = function(game) {
    this.enemyGroup;
    this.eshipGroup;
    this.laserGroup;
    this.gameover;
    this.health;
    this.score;
    this.music;
    this.ship;
    this.cursors;
    this.alive;
};
TrumpInvader.Game.prototype = {
    create: function() {
        this.gameover = false;
        this.score = 0;
        this.music = this.add.audio("Bergentrückung");
        this.buildWorld();
        this.alive = true
    },
    
    
    
    buildWorld: function() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(0, 0, "city_background");
        this.ship = this.add.image(0, 0, "futurefighter");
    },
    

    update: function() {
        if alive = true {
            if (cursors.left.isDown) {
            ship.body.velocity.x = -200;
            }
            else if (cursors.right.isDown) {
            ship.body.velocity.x = 200  ;
            }
            
            if (cursors.up.isDown) {
            ship.body.velocity.y = 200;
            }
            else if (cursors.down.isDown) {
            ship.body.velocity.y = -200;
            }
        }
    },
};