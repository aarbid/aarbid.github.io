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
        this.add.bitmapText(314, 996, "eightbitwonder", "In the year 3025, America")
        this.add.bitmapText(314, 1036, "eightbitwonder", "has finally regained its former")
        this.add.bitmapText(314, 1076, "eightbitwonder", "glory after years of cruel rule under supreme ruler Donald J. Trump.")
    },
    update: function() {},
};