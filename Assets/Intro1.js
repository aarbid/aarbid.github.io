TrumpInvader.Intro1 = function(game) {
    this.Trump;
    this.Message
    this.text;
    this.text2;
    this.text3;
    this.startBG;
    this.startPrompt;
}

TrumpInvader.Intro1.prototype = {
    
    create: function () {
        Trump = this.add.image(0, 0, "EvilTrump");
        Message =this.add.image(255, 975, "messagebox");
        Trump.inputEnabled = true;
        Message.inputEnabled = true;
        Trump.events.onInputDown.addOnce(this.startIntro2, this);
        Message.events.onInputDown.addOnce(this.startIntro2, this);
        text = this.add.bitmapText(314, 996, "eightbitwonder", "In the year 3025, America");
        text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "has finally regained its former");
        text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "glory after years of cruel rule");
        
        
    },
    
    startIntro2: function (pointer) {
        this.state.start('Intro2');
        
    },
    
};