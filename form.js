class Form{
    constructor(){
       this.input=createInput("").attribute("placeholder","ENTER YOUR NAME");
       this.title=createElement("h2");
       this.button=createButton("play");
       this.reset=createButton("reset");
       this.greeting=createElement("h3");
    }
    setElementPosition(){
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.greeting.position(displayWidth/2-70,displayHeight/4);
        this.title.position(displayWidth/2-50,0);
        this.reset.position(displayWidth-50,20);

    }
setElementStyle(){
    this.input.class("customInput")
    this.button.class("customButton")
    this.greeting.class("greeting")
    this.reset.class("resetButton")
}
handleMousePressed(){
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var message=`hello ${this.input.value}</br>Wait for others to join`
        player.name=this.input.value();
        playerCount++;
        player.index=playerCount;
       player.update();
       player.updateCount(playerCount);

       this.greeting.html(message);
       })

       this.reset.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);
        })
    
}
    display(){
        
        this.title.html("CANNON CLIMB");
        this.setElementPosition()
        this.setElementStyle()
        this.handleMousePressed()
    }
        
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

}