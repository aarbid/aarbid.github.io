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
};
TrumpInvader.Game.prototype = {
    create: function() {
        this.gameover = false;
        this.score = 0;
        this.music = this.add.audio("donaldtheme");
        this.buildWorld();
        this.cursor = this.input.keyboard.createCursorKeys();        
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.totaplanes = 2
        this.ship = this.add.sprite(0, 0, "futurefighter");
        this.physics.arcade.enable(this.ship);
        this.ship.body.collideWorldBounds = true;
        this.ship.body.bounce.x = 0.2;
        this.ship.body.bounce.y = 0.2;
        this.ship.anchor.setTo(0.5, 0.5);
        
    },
    
    
    buildWorld: function() {
        this.add.image(0, 0, "city_background");
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
        for(var i=0; i<this.totalPlanes; i++) {
            var p1 = this.tsp1.create(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), "tsupporter1plane");
            this.physics.enable(p1, Phaser.Physics.ARCADE);
            p1.enableBody = true
            p1.body.velocity.y = this.rnd.intergerInRange(100, 150);
            p1.checkWorldBounds = true
            p1.events.onOutOfBounds.add(this.resetP1, this)
        }
    },
    
    resertP1: function(p1) {
        if(p1.y > this.world.height) {
            this.respawnP1(p1);
        }
    },
    
    respawnP1: function (p1) {
        if(this.gameover == false) {
            p1.reset(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0));
            p1.body.velocity.y = this.rnd.intergerInRange(100, 150);
        }
    }, 
    
    buildPlane2: function() {
        this.tsp2 = this.add.group();
        for(var i=0; i<this.totalPlanes; i++) {
            var p2 = this.tsp2.create(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), "tsupporter2plane");
            this.physics.enable(p2, Phaser.Physics.ARCADE);
            p2.enableBody = true
            p2.body.velocity.y = this.rnd.intergerInRange(100, 150);
            p2.checkWorldBounds = true
            p2.events.onOutOfBounds.add(this.resetP2, this)
        }
    },
    
    resertP2: function(p2) {
        if(p2.y > this.world.height) {
            this.respawnP2(p2);
        }
    },
    
    respawnP2: function (p2) {
        if(this.gameover == false) {
            p2.reset(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0));
            p2.body.velocity.y = this.rnd.intergerInRange(100, 150);
        }
    },
    
    buildPlane3: function() {
        this.tsp3 = this.add.group();
        for(var i=0; i<this.totalPlanes; i++) {
            var p3 = this.tsp3.create(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), "tsupporter3plane");
            this.physics.enable(p3, Phaser.Physics.ARCADE);
            p3.enableBody = true
            p3.body.velocity.y = this.rnd.intergerInRange(100, 150);
            p3.checkWorldBounds = true
            p3.events.onOutOfBounds.add(this.resetP3, this)
        }
    },
    
    resertP3: function(p3) {
        if(p3.y > this.world.height) {
            this.respawnP3(p3);
        }
    },
    
    respawnP3: function (p3) {
        if(this.gameover == false) {
            p3.reset(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0));
            p3.body.velocity.y = this.rnd.intergerInRange(100, 150);
        }
    },
    
    buildPlane4: function() {
        this.tsp4 = this.add.group();
        for(var i=0; i<this.totalPlanes; i++) {
            var p4 = this.tsp4.create(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), "tsupporter4plane");
            this.physics.enable(p4, Phaser.Physics.ARCADE);
            p4.enableBody = true
            p4.body.velocity.y = this.rnd.intergerInRange(100, 150);
            p4.checkWorldBounds = true
            p4.events.onOutOfBounds.add(this.resetP4, this)
        }
    },
    
    resertP4: function(p4) {
        if(p4.y > this.world.height) {
            this.respawnP4(p4);
        }
    },
    
    respawnP4: function (p4) {
        if(this.gameover == false) {
            p4.reset(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0));
            p4.body.velocity.y = this.rnd.intergerInRange(100, 150);
        }
    },
    
    buildPlane5: function() {
        this.tsp5 = this.add.group();
        for(var i=0; i<this.totalPlanes; i++) {
            var p5 = this.tsp5.create(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), "tsupporter5plane");
            this.physics.enable(p5, Phaser.Physics.ARCADE);
            p5.enableBody = true
            p5.body.velocity.y = this.rnd.intergerInRange(100, 150);
            p5.checkWorldBounds = true
            p5.events.onOutOfBounds.add(this.resetP5, this)
        }
    },
    
    resertP5: function(p5) {
        if(p5.y > this.world.height) {
            this.respawnP5(p5);
        }
    },
    
    respawnP5: function (p5) {
        if(this.gameover == false) {
            p5.reset(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0));
            p5.body.velocity.y = this.rnd.intergerInRange(100, 150);
        }
    },
    
    buildPlane6: function() {
        this.tsp6 = this.add.group();
        for(var i=0; i<this.totalPlanes; i++) {
            var p6 = this.tsp6.create(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), "tsupporter6plane");
            this.physics.enable(p6, Phaser.Physics.ARCADE);
            p6.enableBody = true
            p6.body.velocity.y = this.rnd.intergerInRange(100, 150);
            p6.checkWorldBounds = true
            p6.events.onOutOfBounds.add(this.resetP6, this)
        }
    },
    
    resertP6: function(p6) {
        if(p6.y > this.world.height) {
            this.respawnP6(p6);
        }
    },
    
    respawnP6: function (p6) {
        if(this.gameover == false) {
            p6.reset(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0));
            p6.body.velocity.y = this.rnd.intergerInRange(100, 150);
        }
    },
    
    buildPlane7: function() {
        this.tsp7 = this.add.group();
        for(var i=0; i<this.totalPlanes; i++) {
            var p7 = this.tsp7.create(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), "tsupporter7plane");
            this.physics.enable(p7, Phaser.Physics.ARCADE);
            p7.enableBody = true
            p7.body.velocity.y = this.rnd.intergerInRange(100, 150);
            p7.checkWorldBounds = true
            p7.events.onOutOfBounds.add(this.resetP7, this)
        }
    },
    
    resertP7: function(p7) {
        if(p7.y > this.world.height) {
            this.respawnP7(p7);
        }
    },
    
    respawnP7: function (p7) {
        if(this.gameover == false) {
            p7.reset(this.rnd.intergerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0));
            p7.body.velocity.y = this.rnd.intergerInRange(100, 150);
        }
    },

    update: function() {
       this.playerMovement();
    },
};