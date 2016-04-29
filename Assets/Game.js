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
        this.add.image(0, 0, "EvilTrump");
        this.add.image(255, 975, "messagebox");
        //var text;
        //var text2;
        //var text3;
        var ship;
        ship = this.add.image(0, 0, "futurefighter")
        var cursors;
        var text;
        text = this.add.text(314, 996, "In the year 3025, America", 
        { font: "65px Arial", fill: "#ff0044", align: "center" });
        text.anchor.setTo(314, 996);
        //text = this.add.bitmapText(314, 996, "eightbitwonder", "In the year 3025, America");
        //text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "has finally regained its former");
        //text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "glory after years of cruel rule");
        cursors = this.input.keyboard.createCursorKeys();
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.p2.defaultRestitution = 0.8;
        this.physics.p2.enable(ship);
        this.input.onDown.addOnce(this.removeText, this);
    },
    
    spaseshipMovement: function() {
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

     removeText: function() {

            text.destroy();

},


    update: function() {},
};