/*
892 pokemons
(26 * 34 + 8)
*/
var deck;
var mapSize;
var img;
var chosenPokemons;
var imageXCount = 26;
var imageYCount = 34;
var imageTileWidth = 80;
var pokemonCount = 150; //892;

function preload() {
  img = loadImage("data/pokemon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  newGame();
}

function draw() {
  background(51);

  drawMap();
  //image(img,0,0);
}

function newGame(){
  mapSize = 6;

  setPokemons();

  deck = [];
  for(var i = 0; i < mapSize ; i++){
    for(var j = 0; j < mapSize ; j++){
      // deck.push(new Card(i * (imageTileWidth + 10),j * (imageTileWidth + 10), 0, imageTileWidth, getPokemonImage(chosenPokemons[0])));
      var rndPokemon = random(chosenPokemons);
      //print(j + i * mapSize, rndPokemon);
      deck.push(new Card(j * (imageTileWidth + 10),i * (imageTileWidth + 10), rndPokemon, imageTileWidth, getPokemonImage(rndPokemon)));
    }
  }
}

function flipAll(){
  for(var i = 0; i < deck.length; i++){
    deck[i].flip();
  }
}

function setPokemons(){
  chosenPokemons = [];

  do{
    var rndPokemon = floor(random(0, pokemonCount));

    if(!containsPokemon(rndPokemon)){
      chosenPokemons.push(rndPokemon);
    }
  }while(chosenPokemons.length < mapSize);
}

function containsPokemon(pokemon){
  for(var i = 0; i < chosenPokemons.length; i++){
    if(chosenPokemons[i] === pokemon){
      return true;
    }
  }

  return false;
}

function getPokemonImage(index){
  var row = floor(index / imageXCount);
  var col = floor(index % imageXCount);
  return img.get(col * imageTileWidth, row * imageTileWidth, imageTileWidth, imageTileWidth);
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

function keyPressed(){
  if(key == 'A'){
    flipAll();
  }
}
