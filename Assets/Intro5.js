TrumpInvader.Intro5 = function(game) {
    this.Trump;
    this.Message;
    this.text;
    this.text2;
    this.text3;
    this.startBG;
    this.startPrompt;
}

TrumpInvader.Intro5.prototype = {
    
    create: function () {
        Trump = this.add.image(0, 0, "EvilTrump");
        Message =this.add.image(255, 975, "messagebox");
        Trump.inputEnabled = true;
        Message.inputEnabled = true;
        Trump.events.onInputDown.addOnce(this.startIntro6, this);
        Message.events.onInputDown.addOnce(this.startIntro6, this);
        text = this.add.bitmapText(314, 996, "eightbitwonder", "president after ingesting too much");
        text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "of mom’s spaghetti.");
        text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "Years into the future,");
        
        
    },
    
    startIntro6: function (pointer) {
        this.state.start('Intro6');
        
    },
    
};