TrumpInvader.Preloader = function (game) {
    this.ready = false;
};

TrumpInvader.Preloader.prototype = {
	
	preload: function () {
		this.load.image("startmenu", "pics/startmenu.png");
        this.load.bitmapFont("eightbitwonder", "font/eightbitwonder.png", "font/eightbitwonder.fnt");
        this.load.image("trumpsupporter", "pics/trumpsupporter.gif");
        this.load.image("trumpsupporter2", "pics/trumpsupporter2.gif");
        this.load.image("trumpsupporter3", "pics/trumpsupporter3.gif");
        this.load.image("trumpsupporter4", "pics/trumpsupporter4.gif");
        this.load.image("trumpsupporter5", "pics/trumpsupporter5.gif");
        this.load.image("trumpsupporter6", "pics/trumpsupporter6.gif");
        this.load.image("trumpsupporter7", "pics/trumpsupporter7.gif");
        this.load.image("trumphead", "pics/trumphead.gif");
        this.load.image("lefttrumphand", "pics/lefttrumphand.gif");
        this.load.image("righttrumphand", "pics/righttrumphand.gif");
        this.load.image("EvilTrump", "pics/EvilTrump.gif");
        this.load.image("Blast", "pics/Blast.fw.png");
        this.load.image("futurefighter", "pics/futurefighter.gif");
        this.load.image("messagebox", "pics/messagebox.gif");
        this.load.image("Trump", "pics/Trump.png");
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