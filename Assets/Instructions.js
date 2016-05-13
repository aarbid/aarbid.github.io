TrumpInvader.Instructions = function(game) {
    this.ArrowKeys;
    this.Message;
    this.text;
    this.text2;
    this.text3;
    this.startBG;
    this.startPrompt;
}

TrumpInvader.Instructions.prototype = {
    
    create: function () {
        
        ArrowKeys= this.add.image(650, 300, "arrow_keys");
        Message =this.add.image(255, 975, "messagebox");
        ArrowKeys.inputEnabled = true;
        Message.inputEnabled = true;
        ArrowKeys.events.onInputDown.addOnce(this.startGame, this);
        Message.events.onInputDown.addOnce(this.startGame, this);
        text = this.add.bitmapText(314, 996, "eightbitwonder", "Use the arrow keys to move");
        text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "the fighter plane. Use the");
        text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "space bar to shoot.");
        
        
    },
    
    startGame: function (pointer) {
        this.state.start('Game');
        
    },
    
};