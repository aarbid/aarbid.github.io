TrumpInvader.Preloader = function (game) {
    this.ready = false;
};

TrumpInvader.Preloader.prototype = {
	
	preload: function () {
		this.load.image("startmenu", "pics/startmenu.png");
        this.load.bitmapFont("eightbitwonder", "font/eightbitwonder.png", "font/eightbitwonder.fnt");
        this.load.image("trumpsupporter.gif", "pics/trumpsupporter.gif");
        this.load.image("trumpsupporter2.gif", "pics/trumpsupporter2.gif");
        this.load.image("trumpsupporter3.gif", "pics/trumpsupporter3.gif");
        this.load.image("trumpsupporter4.gif", "pics/trumpsupporter4.gif");
        this.load.image("trumpsupporter5.gif", "pics/trumpsupporter5.gif");
        this.load.image("trumpsupporter6.gif", "pics/trumpsupporter6.gif");
        this.load.image("trumpsupporter7.gif", "pics/trumpsupporter7.gif");
        this.load.image("trumphead.gif", "pics/trumphead.gif");
        this.load.image("lefttrumphand.gif", "pics/lefttrumphand.gif");
        this.load.image("righttrumphand.gif", "pics/righttrumphand.gif");
        this.load.image("EvilTrump.gif", "pics/EvilTrump.gif");
    },

	create: function () {
		this.state.start("Preloader");
        this.buildWorld();
        
	},
    
    buildWorld: function() {
        this.add.image(0,0, "startmenu")
    },

	update: function () {
        this.state.start("StartMenu");
        this.ready = true;
        
	}
};