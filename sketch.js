var deck;
var mapSize;
var img;

function preload() {
  img = loadImage("data/pokemon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mapSize = 6;

  deck = [];
  for(var i = 0; i < mapSize ; i++){
    for(var j = 0; j < mapSize ; j++){
      deck.push(new Card(i * 90,j * 90));
    }
  }
}

function draw() {
  background(51);

  drawMap();
  //image(img,0,0);
}

function drawMap() {
  for(var i = 0; i < deck.length; i++){
    deck[i].display();
  }
  // for(var i = 0; i < mapSize ; i++){
  //   for(var j = 0; j < mapSize ; j++){
  //     image(img, i * 80, j * 80, 80, 80, i * 90, j * 90, 80, 80);
  //   }
  // }
}

function mousePressed(){
  for(var i = 0; i < deck.length; i++){
    if(mouseX <= deck[i].x + deck[i].a &&
      mouseX >= deck[i].x &&
      mouseY <= deck[i].y + deck[i].a &&
      mouseY >= deck[i].y){
        // print(i);
        deck[i].flip();
      }
  }
}
