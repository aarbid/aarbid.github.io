TrumpInvader.Objective= function(game) {
    this.Plane;
    this.Supporter;
    this.Message;
    this.text;
    this.text2;
    this.text3;
    this.startBG;
    this.startPrompt;
}

TrumpInvader.Objective.prototype = {
    
    create: function () {
        Plane = this.add.image(600, 400, "trumpsupporter2");
        Supporter = this.add.image(800, 400, "tsupporter2plane");
        Message =this.add.image(255, 975, "messagebox");
        Plane.inputEnabled = true;
        Supporter.inputEnabled = true;
        Message.inputEnabled = true;
        Plane.events.onInputDown.addOnce(this.startInstructions, this);
        Supporter.events.onInputDown.addOnce(this.startInstructions, this);
        Message.events.onInputDown.addOnce(this.startInstructions, this);
        text = this.add.bitmapText(314, 996, "eightbitwonder", "Your task is to eliminate Trump");
        text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "and his supporters.");
        text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "Best of luck agent.");
        
        
    },
    
    startInstructions: function (pointer) {
        this.state.start('Instructions');
        
    },
    
};