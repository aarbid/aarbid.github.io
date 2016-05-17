TrumpInvader.Intro4 = function(game) {
    this.Trump;
    this.Message;
    this.text;
    this.text2;
    this.text3;
    this.startBG;
    this.startPrompt;
}

TrumpInvader.Intro4.prototype = {
    
    create: function () {
        Trump = this.add.image(0, 0, "EvilTrump");
        Message =this.add.image(255, 975, "messagebox");
        Trump.inputEnabled = true;
        Message.inputEnabled = true;
        Trump.events.onInputDown.addOnce(this.startIntro5, this);
        Message.events.onInputDown.addOnce(this.startIntro5, this);
        text = this.add.bitmapText(314, 996, "eightbitwonder", "yet another Great depression.");
        text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "After severals years of conflict,");
        text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "Trump was shut down from being");
        
        
    },
    
    startIntro5: function (pointer) {
        this.state.start('Intro5');
        
    },
    
};