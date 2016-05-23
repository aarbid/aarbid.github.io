TrumpInvader.Game = function(game) {
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
    this.totalPlanes1;
    this.totalPlanes2;
    this.totalPlanes3;
    this.totalPlanes4;
    this.totalPlanes5;
    this.totalPlanes6;
    this.totalPlanes7;
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
        this.ship = this.add.image(0, 0, "futurefighter");
        this.physics.startSystem(Phaser.Physics.ARCADE);

    },
    
    buildWorld: function() {
        this.add.image(0, 0, "city_background");
       

    },
    
   buildShip: function () {
        this.physics.enable(this.ship, Phaser.Physics.ARCADE);
        this.ship.enableBody = true
        this.cursor = this.input.keyboard.createCursorKeys();
        this.ship.body.velocity.x = 0;
        this.physics.arcade.collide(this.ship, null,this);

        if (this.cursor.left.isDown){
            this.ship.body.velocity.x = -150;
        }
        else if (this.cursor.right.isDown){
            this.ship.body.velocity.x = 150;
        }
        else if (this.cursor.down.isDown){
            this.ship.body.velocity.y = 150;
        }
        else if (this.cursor.up.isDown){
            this.ship.body.velocity.y = -150;
        }
        else {
            this.ship.body.velocity.y = 0;
        } 
        
   },
    
    buildPlane1: function() {
        this.tsp1 = this.add.group();
        for(var i=0; i<this.totalPlanes1; i++) {
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
    

    update: function() {
       
    },
};