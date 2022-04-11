var ship1,sea,cloud;

function preload(){
  //prof: o comando para carregar imagens é sprite = loadImage("nomedaimagem.png")
  seaImg = loadImage("sea.png");

  //prof: carregar todas as imagens da animação
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200);
  ship1 = createSprite(130,200,30,30);
  sea.addImage(seaImg);

  //prof: adicionar movimento ao mar
  sea.velocityX = -5;

  //prof: mudar a escala do mar
  sea.scale = 0.3;

  //prof: adicionar animação ao navio
  ship1.addAnimation("movingShip",shipImg1)

  //prof: mudar a escala do navio
  ship1.scale = 0.25;
}

function draw() {
  background("blue");
    drawSprites();

 
}
