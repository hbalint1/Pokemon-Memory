class Card {
  constructor(id_, x_, y_, pokemonNO_, imgTileWidth_, img_){
    this.id = id_;
    this.x = x_;
    this.y = y_;
    this.pokemon = pokemonNO_
    this.a = imgTileWidth_;
    this.img = img_;
    this.flipped = false;
  }

  flip(){
    this.flipped = !this.flipped;
  }

  display(){
    if(this.flipped){
      // noFill();
      // stroke(255);
      // rect(this.x, this.y, this.a, this.a);
      image(this.img, this.x, this.y, this.a, this.a);
    } else {
      fill(0);
      noStroke();
      rect(this.x, this.y, this.a, this.a);
    }
  }
}
