TrumpInvader.Intro6 = function(game) {
    this.Trump;
    this.Message
    this.text;
    this.text2;
    this.text3;
    this.startBG;
    this.startPrompt;
}

TrumpInvader.Intro6.prototype = {
    
    create: function () {
        Trump = this.add.image(0, 0, "EvilTrump");
        Message =this.add.image(255, 975, "messagebox");
        Trump.inputEnabled = true;
        Message.inputEnabled = true;
        Trump.events.onInputDown.addOnce(this.startObjective, this);
        Message.events.onInputDown.addOnce(this.startObjective, this);
        text = this.add.bitmapText(314, 996, "eightbitwonder", "a group of scientists who had");
        text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "dedicated their lives to Trump,");
        text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "and revived him from the dead");
        
        
    },
    
    startObjective: function (pointer) {
        this.state.start('Objective');
        
    },
    
};