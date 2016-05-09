TrumpInvader.Intro2 = function(game) {
    this.Trump;
    this.Message;
    this.text;
    this.text2;
    this.text3;
    this.startBG;
    this.startPrompt;
}

TrumpInvader.Intro2.prototype = {
    
    create: function () {
        Trump = this.add.image(0, 0, "EvilTrump");
        Message =this.add.image(255, 975, "messagebox");
        Trump.inputEnabled = true;
        Message.inputEnabled = true;
        Trump.events.onInputDown.addOnce(this.startIntro3, this);
        Message.events.onInputDown.addOnce(this.startIntro3, this);
        text = this.add.bitmapText(314, 996, "eightbitwonder", "under supreme ruler Donald J. Trump.");
        text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "Trump’s plan to build a wall to");
        text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "stop latino immigration into the");
        
        
    },
    
    startIntro3: function (pointer) {
        this.state.start('Intro3');
        
    },
    
};