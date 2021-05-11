class Umbrella {
    constructor()
    {}

    display()
    {
        
        walkingMan = createSprite(200,500,20,50);
        walkingMan.addImage("walking",WalkingManImgs);
        walkingMan.scale = 0.65;
        walkingMan.visible = true;

       
        batman = createSprite(200,500,20,50);
        batman.addImage(batmanImg);
        batman.scale = 0.8; 
        batman.visible = false;

        drawSprites();

        if(frameCount >= 200)
        {
          
          walkingMan.visible = false;
          batman.visible = true;  

        }else
        {
            console.log("walkingMan is Visible")
        }
        
        

    }

}
