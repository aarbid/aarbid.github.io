TrumpInvader.Intro3 = function(game) {
    this.Trump;
    this.Message
    this.text;
    this.text2;
    this.text3;
    this.startBG;
    this.startPrompt;
}

TrumpInvader.Intro3.prototype = {
    
    create: function () {
        Trump = this.add.image(0, 0, "EvilTrump");
        Message =this.add.image(255, 975, "messagebox");
        Trump.inputEnabled = true;
        Message.inputEnabled = true;
        Trump.events.onInputDown.addOnce(this.startIntro4, this);
        Message.events.onInputDown.addOnce(this.startIntro4, this);
        text = this.add.bitmapText(314, 996, "eightbitwonder", "country was successful, but in doing");
        text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "so caused the whole economy to");
        text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "fall apart throwing America into");
        
        
    },
    
    startIntro4: function (pointer) {
        this.state.start('Intro4');
        
    },
    
};