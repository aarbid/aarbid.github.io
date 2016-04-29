var TrumpInvader = {}

TrumpInvader.Boot = function (game) {};
TrumpInvader.Boot.prototype = {
	
	preload: function () {
        
        
    },

	create: function () {
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false; 
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 270;
		this.scale.minHeight = 480;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;  
		this.scale.updateLayout(true);  

		this.input.addPointer();
        this.state.start ("Preloader")
	}
	
};
