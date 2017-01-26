class Player {
  constructor(id_, name_){
    this.id = id_;
    this.name = name_;
    this.score = 0;
    this.flipCount = 0;
    this.flippedCards = [];
    this.pairs = [];
  }

  flip(card){
    print(this.name, "flips.");

    this.flipCount++;

    if(this.flippedCards.length < 2){
      card.flip();
      this.flippedCards.push(card);
    }

    if(currentPlayer.flippedCards.length == 2){
      this.checkIfPair();
    }
  }

  checkIfPair(){
    // If player found a pair
    if(this.flippedCards[0].pokemon === this.flippedCards[1].pokemon){
      print("pair!");
      this.foundPair();
      changePlayer();
    } else{
      print("not pair!");
      flipping = true;
      setTimeout(function() {
          currentPlayer.flipBackAll();
          changePlayer();
        },
        2000
      );
    }
  }

  flipBackAll(){
    print(this.name, "flipped back all.");

    for(var i = 0; i < this.flippedCards.length; i++){
      this.flippedCards[i].flip();
    }
    this.flippedCards = [];

    flipping = false;
  }

  foundPair(){
    print(this.name, "found a pair.");
    this.score++;
  }
}
