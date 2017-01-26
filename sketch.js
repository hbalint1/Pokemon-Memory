/*
892 pokemons
(26 * 34 + 8)
*/

// Image constants
var img;
var imageXCount = 26;
var imageYCount = 34;
var imageTileWidth = 80;

// Game constants
var deck;
var mapSize;
var chosenPokemons;
var pokemonCount = 150; //892;

// Players
var players;
var currentPlayer;

// Locks
var flipping = false;

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
}

function newGame(){
  mapSize = 6;

  players = [];
  players.push(new Player(players.length, "Player1"));
  players.push(new Player(players.length, "Player2"));
  currentPlayer = players[0];

  setPokemons();

  deck = [];
  for(var i = 0; i < mapSize ; i++){
    for(var j = 0; j < mapSize ; j++){
      var rndPokemon = -1;
      do{
        rndPokemon = random(chosenPokemons);
      } while(!goodChoice(rndPokemon));
      var id = j + i * mapSize;
      deck.push(new Card(id, j * (imageTileWidth + 10),i * (imageTileWidth + 10), rndPokemon, imageTileWidth, getPokemonImage(rndPokemon)));
    }
  }
}

function goodChoice(pokemon){
  var count = 0;
  for(var i = 0; i < deck.length; i++){
    if(deck[i].pokemon === pokemon){
      count++;
    }
  }

  if (count > 1){
    return false;
  }

  return true;
}

function flipAll(){
  for(var i = 0; i < deck.length; i++){
    if(!deck[i].flipped){
      deck[i].flip();
    }
  }
}

function setPokemons(){
  chosenPokemons = [];

  do{
    var rndPokemon = floor(random(0, pokemonCount));

    if(!containsPokemon(rndPokemon)){
      chosenPokemons.push(rndPokemon);
    }
  }while(chosenPokemons.length < mapSize * mapSize / 2);
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
}

function mousePressed(){
  // We can't do anythign while flipping
  if(flipping){
    return;
  }

  for(var i = 0; i < deck.length; i++){
    if(mouseX <= deck[i].x + deck[i].a &&
      mouseX >= deck[i].x &&
      mouseY <= deck[i].y + deck[i].a &&
      mouseY >= deck[i].y){
        if(!deck[i].flipped){
          currentPlayer.flip(deck[i]);
        }
      }
  }
}

function changePlayer(){
  print("Changing players.");
  var index = ((currentPlayer.id + 1) %  players.length);
  print(index);
  currentPlayer = players[index];
  changingPlayer = false;
  print("Current player: ", currentPlayer.name);
  checkIfOver();
}

function checkIfOver(){
  if(isOver()){
    var winner = getWinner();
    print(winner.name, " wins!");
    setTimeout(newGame, 3000);
  }
}

function getWinner(){
  var maxPlayer = players[0];
  for(var i = 1; i < players.length; i++){
    if(players[i].score > maxPlayer.score){
      maxPlayer = players[i];
    }
  }

  return maxPlayer;
}

function isOver(){
  for(var i = 0; i < deck.length; i++){
    if(!deck[i].flipped){
      return false;
    }
  }

  return true;
}

function keyPressed(){
  if(key == 'A'){
    flipAll();
  }
}
