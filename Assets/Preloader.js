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
        this.load.atlasXML("EvilTrump", "pics/eviltrump3.png", "pics/eviltrump4.xml")
        this.load.image("Blast", "pics/Blast.gif");
        this.load.image("futurefighter", "pics/futurefighter.gif");
        this.load.image("messagebox", "pics/messagebox.gif");
        this.load.image("Trump", "pics/Trump.png");
        this.load.audio("Bergentrückung", "sounds/Bergentrückung.mp3");
        this.load.image("tsupporter1plane", "pics/tsupporter1plane.gif");
        this.load.image("tsupporter2plane", "pics/tsupporter2plane.gif");
        this.load.image("tsupporter3plane", "pics/tsupporter3plane.gif");
        this.load.image("tsupporter4plane", "pics/tsupporter4plane.gif");
        this.load.image("tsupporter5plane", "pics/tsupporter5plane.gif");
        this.load.image("tsupporter6plane", "pics/tsupporter6plane.gif");
        this.load.image("tsupporter7plane", "pics/tsupporter7plane.gif");
    },
    
	update: function () {
        this.state.start("StartMenu");
        this.ready = true;
        
	}
};