class createDrops {
    constructor()
    {}

     display()
    {

        rain = createSprite(random(-100,500),random(0,500),20,20);
        rain.addImage(rainDropImg);
        rain.scale = 0.015;
        rain.lifetime = 2;


        //drawSprites();
    }
}