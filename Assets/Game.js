TrumpInvader.Game = function (game) {
    this.tsp1;
    this.tsp2;
    this.tsp3;
    this.tsp4;
    this.tsp5;
    this.tsp6;
    this.tsp7;
    this.ts1;
    this.ts2;
    this.ts3;
    this.ts4;
    this.ts5;
    this.ts6;
    this.ts7;
    this.totalPlanes;
    this.laserGroup;
    this.health;
    this.score;
    this.music;
    this.ship;
    this.gameover;
    this.cursor;
    this.velocity;
    this.bullets;
    this.bulletTime = 0;
    this.fireButton;
    this.lives;
    this.overmessage;
};
TrumpInvader.Game.prototype = {
    create: function() {
        this.gameover = false;
        this.lives = 3
        this.score = 0;
        this.music = this.add.audio("donaldtheme");
        this.cursor = this.input.keyboard.createCursorKeys();        
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.totalplanes = 50;
        this.buildWorld();
        this.ship = this.add.sprite(314, 1036, "futurefighter");
        this.physics.arcade.enable(this.ship);
        this.ship.body.collideWorldBounds = true;
        this.ship.body.bounce.x = 0.2;
        this.ship.body.bounce.y = 0.2;
        this.ship.anchor.setTo(0.5, 0.5);
        this.bullets = this.add.group();
        this.bullets.enableBody = true;
        this.physics.enable(this.bullets, Phaser.Physics.ARCADE);
        this.fireButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        
        for (var i = 1; i < 50; i++)
        {
            var b = this.bullets.create(0, 0, 'blast');
            b.name = 'bullet' + i;
            b.exists = false;
            b.visible = false;
            b.checkWorldBounds = true;
            b.events.onOutOfBounds.add(this.resetBullet, this);
        }

        
    },
    
    
    buildWorld: function() {
        this.add.image(0, 0, "city_background");
        this.buildPlane1();
        this.buildPlane2();
        this.buildPlane3();
        this.buildPlane4();
        this.buildPlane5();
        this.buildPlane6();
        this.buildPlane7();
        this.displayLives();
        this.displayScore();
    },
    
    
    playerMovement: function () {
        if (this.cursor.left.isDown){
            this.ship.body.velocity.x = -350;
        }
        else if (this.cursor.right.isDown){
            this.ship.body.velocity.x = 350;
        } else {
            this.ship.body.velocity.x = 0;
        }
        
        if (this.cursor.down.isDown){
            this.ship.body.velocity.y = 350;
        }
        else if (this.cursor.up.isDown){
            this.ship.body.velocity.y = -350;
        }
        else {
            this.ship.body.velocity.y = 0;
        } 
    },
    
    
    buildPlane1: function() {
        this.tsp1 = this.add.group();
        var p1 = this.tsp1.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0), "tsupporter1plane");
            this.physics.enable(p1, Phaser.Physics.ARCADE);
            p1.enableBody = true;
            p1.body.velocity.y = this.rnd.integerInRange(100, 200);
            p1.checkWorldBounds = true;
            p1.events.onOutOfBounds.add(this.resetP1, this);
        /*for(var i=0; i<this.totalPlanes; i++) {
            
        }*/
    },
    
    resetP1: function(p1) {
        if(p1.y > this.world.height) {
            this.respawnP1(p1);
        }
    },
    
    respawnP1: function (p1) {
        if(this.gameover == false) {
            p1.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0));
            p1.body.velocity.y = this.rnd.integerInRange(100, 200);
        }
    }, 
    
    blastCollisionP1: function(p1,b) {
        this.respawnP1(p1);
        b.kill();
        this.updateScore();
    },
    
    shipCollisionP1: function(ship, p1) {
        if(ship.exists){
            this.respawnP1(p1);
            this.lifeDown();
            this.displayLives();
        }
    },
    
    buildPlane2: function() {
        this.tsp2 = this.add.group();
        var p2 = this.tsp2.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0), "tsupporter2plane");
            this.physics.enable(p2, Phaser.Physics.ARCADE);
            p2.enableBody = true;
            p2.body.velocity.y = this.rnd.integerInRange(100, 200);
            p2.checkWorldBounds = true;
            p2.events.onOutOfBounds.add(this.resetP2, this);
        /*for(var i=0; i<this.totalPlanes; i++) {
            
        }*/
    },
    
    resetP2: function(p2) {
        if(p2.y > this.world.height) {
            this.respawnP2(p2);
        }
    },
    
    respawnP2: function (p2) {
        if(this.gameover == false) {
            p2.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0));
            p2.body.velocity.y = this.rnd.integerInRange(100, 200);
        }
    }, 
    
    blastCollisionP2: function(p2,b) {
        this.respawnP2(p2);
        b.kill();
        this.updateScore();
    },
    
    shipCollisionP2: function(ship, p2) {
        if(ship.exists){
            this.respawnP2(p2);
            this.lifeDown();
            this.displayLives();
        }
    },
    
    buildPlane3: function() {
        this.tsp3 = this.add.group();
        var p3 = this.tsp3.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0), "tsupporter3plane");
            this.physics.enable(p3, Phaser.Physics.ARCADE);
            p3.enableBody = true;
            p3.body.velocity.y = this.rnd.integerInRange(100, 200);
            p3.checkWorldBounds = true;
            p3.events.onOutOfBounds.add(this.resetP3, this);
        /*for(var i=0; i<this.totalPlanes; i++) {
            
        }*/
    },
    
    resetP3: function(p3) {
        if(p3.y > this.world.height) {
            this.respawnP3(p3);
        }
    },
    
    respawnP3: function (p3) {
        if(this.gameover == false) {
            p3.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0));
            p3.body.velocity.y = this.rnd.integerInRange(100, 200);
        }
    }, 
    
    
    blastCollisionP3: function(p3,b) {
        this.respawnP3(p3);
        b.kill();
        this.updateScore();
    },
    
    shipCollisionP3: function(ship, p3) {
        if(ship.exists){
            this.respawnP3(p3);
            this.lifeDown();
            this.displayLives();
        }
    },
    
    buildPlane4: function() {
        this.tsp4 = this.add.group();
        var p4 = this.tsp4.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0), "tsupporter4plane");
            this.physics.enable(p4, Phaser.Physics.ARCADE);
            p4.enableBody = true;
            p4.body.velocity.y = this.rnd.integerInRange(100, 200);
            p4.checkWorldBounds = true;
            p4.events.onOutOfBounds.add(this.resetP4, this);
        /*for(var i=0; i<this.totalPlanes; i++) {
            
        }*/
    },
    
    resetP4: function(p4) {
        if(p4.y > this.world.height) {
            this.respawnP4(p4);
        }
    },
    
    respawnP4: function (p4) {
        if(this.gameover == false) {
            p4.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0));
            p4.body.velocity.y = this.rnd.integerInRange(100, 200);
        }
    }, 
    
    blastCollisionP4: function(p4,b) {
        this.respawnP4(p4);
        b.kill();
        this.updateScore();
    },
    
    shipCollisionP4: function(ship, p4) {
        if(ship.exists){
            this.respawnP4(p4);
            this.lifeDown();
            this.displayLives();
        }
    },
    
    buildPlane5: function() {
        this.tsp5 = this.add.group();
        var p5 = this.tsp5.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0), "tsupporter5plane");
            this.physics.enable(p5, Phaser.Physics.ARCADE);
            p5.enableBody = true;
            p5.body.velocity.y = this.rnd.integerInRange(100, 200);
            p5.checkWorldBounds = true;
            p5.events.onOutOfBounds.add(this.resetP5, this);
        /*for(var i=0; i<this.totalPlanes; i++) {
            
        }*/
    },
    
    resetP5: function(p5) {
        if(p5.y > this.world.height) {
            this.respawnP5(p5);
        }
    },
    
    respawnP5: function (p5) {
        if(this.gameover == false) {
            p5.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0));
            p5.body.velocity.y = this.rnd.integerInRange(100, 200);
        }
    }, 
    
    blastCollisionP5: function(p5,b) {
        this.respawnP5(p5);
        b.kill();
        this.updateScore();
    },
    
    shipCollisionP5: function(ship, p5) {
        if(ship.exists){
            this.respawnP5(p5);
            this.lifeDown();
            this.displayLives();
        }
    },
    
    buildPlane6: function() {
        this.tsp6 = this.add.group();
        var p6 = this.tsp6.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0), "tsupporter6plane");
            this.physics.enable(p6, Phaser.Physics.ARCADE);
            p6.enableBody = true;
            p6.body.velocity.y = this.rnd.integerInRange(100, 200);
            p6.checkWorldBounds = true;
            p6.events.onOutOfBounds.add(this.resetP6, this);
        /*for(var i=0; i<this.totalPlanes; i++) {
            
        }*/
    },
    
    resetP6: function(p6) {
        if(p6.y > this.world.height) {
            this.respawnP6(p6);
        }
    },
    
    respawnP6: function (p6) {
        if(this.gameover == false) {
            p6.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0));
            p6.body.velocity.y = this.rnd.integerInRange(100, 200);
        }
    }, 
    
    blastCollisionP6: function(p6,b) {
        this.respawnP6(p6);
        b.kill();
        this.updateScore();
    },
    
    shipCollisionP6: function(ship, p6) {
        if(ship.exists){
            this.respawnP6(p6);
            this.lifeDown();
            this.displayLives();
        }
    },
    
    buildPlane7: function() {
        this.tsp7 = this.add.group();
        var p7 = this.tsp7.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0), "tsupporter7plane");
            this.physics.enable(p7, Phaser.Physics.ARCADE);
            p7.enableBody = true;
            p7.body.velocity.y = this.rnd.integerInRange(100, 200);
            p7.checkWorldBounds = true;
            p7.events.onOutOfBounds.add(this.resetP7, this);
        /*for(var i=0; i<this.totalPlanes; i++) {
            
        }*/
    },
    
    resetP7: function(p7) {
        if(p7.y > this.world.height) {
            this.respawnP7(p7);
        }
    },
    
    respawnP7: function (p7) {
        if(this.gameover == false) {
            p7.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(0, 0));
            p7.body.velocity.y = this.rnd.integerInRange(700, 200);
        }
    },
    
    blastCollisionP7: function(p7,b) {
        this.respawnP7(p7);
        b.kill();
        this.updateScore();
    },
    
    shipCollisionP7: function(ship, p7) {
        if(ship.exists){
            this.respawnP7(p7);
            this.lifeDown();
            this.displayLives();
        }
    },
    
    
    fireBullet: function () {
        this.bullet = this.bullets.getFirstExists(false);
        if (this.game.time.now > this.bulletTime)
        {
            this.bullet.reset(this.ship.x, this.ship.y - 6);
            this.bullet.body.velocity.y = -300;
            this.bulletTime = this.game.time.now + 150;
        }
    
},

    
    resetBullet: function (bullets){
      bullets.kill();  
    },
    
    lifeDown: function (){
        text.kill();
        if(this.lives > 0)
            this.lives = this.lives - 1;
        else
            this.gameover();
        
    },
    
    displayLives: function () {
        text2 = this.add.bitmapText(1345, 50, "eightbitwonder", "Lives: ")
        text = this.add.bitmapText(1500, 50, "eightbitwonder", this.lives);
    },
    
    showsScore: function(){
            this.overmessage = this.add.bitmapText(this.world.centerX-180, this.world.centerY-40, 'eightbitwonder', 'GAME OVER\n\n' + this.Score, 42);
            this.overmessage.align = "center";
            this.overmessage.inputEnabled = true;
            this.overmessage.events.onInputDown.addOnce(this.gameover, this);
    },
    
    updateScore: function () {
        text4.kill();
        this.score = this.score + 50;
        text3 = this.add.bitmapText(150, 50, "eightbitwonder", "Score: ");
        text4 = this.add.bitmapText(410, 50, "eightbitwonder", this.score);
    },
    
    updateScore2: function () {
        this.score = this.score + 100;
    },
    
    displayScore: function () {
        text3 = this.add.bitmapText(150, 50, "eightbitwonder", "Score: ");
        text4 = this.add.bitmapText(410, 50, "eightbitwonder", this.score);
    },
    
    gameover: function() {
        this.state.start('StartMenu');
    },

    update: function() {
        this.playerMovement();
        this.physics.arcade.overlap(this.tsp1, this.bullets, this.blastCollisionP1, null, this);
        this.physics.arcade.overlap(this.tsp1, this.ship, this.shipCollisionP1, null, this);
        
        this.physics.arcade.overlap(this.tsp2, this.bullets, this.blastCollisionP2, null, this);
        this.physics.arcade.overlap(this.tsp2, this.ship, this.shipCollisionP2, null, this);
        
        this.physics.arcade.overlap(this.tsp3, this.bullets, this.blastCollisionP3, null, this);
        this.physics.arcade.overlap(this.tsp3, this.ship, this.shipCollisionP3, null, this);
        
        this.physics.arcade.overlap(this.tsp4, this.bullets, this.blastCollisionP4, null, this);
        this.physics.arcade.overlap(this.tsp4, this.ship, this.shipCollisionP4, null, this);
        
        this.physics.arcade.overlap(this.tsp5, this.bullets, this.blastCollisionP5, null, this);
        this.physics.arcade.overlap(this.tsp5, this.ship, this.shipCollisionP5, null, this);
        
        this.physics.arcade.overlap(this.tsp6, this.bullets, this.blastCollision61, null, this);
        this.physics.arcade.overlap(this.tsp6, this.ship, this.shipCollisionP6, null, this);
        
        this.physics.arcade.overlap(this.tsp7, this.bullets, this.blastCollisionP7, null, this);
        this.physics.arcade.overlap(this.tsp7, this.ship, this.shipCollisionP7, null, this);


        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        {
          this.fireBullet();
        }
    },
};