class Card {
  constructor(x_, y_, img_){
    this.x = x_;
    this.y = y_;
    this.a = 80;
    this.img = img_;
    this.flipped = false;
  }

  flip(){
    this.flipped = !this.flipped;
  }

  display(){
    if(this.flipped){
      noFill();
      stroke(255);
      rect(this.x, this.y, this.a, this.a);
    } else {
      fill(0);
      noStroke();
      rect(this.x, this.y, this.a, this.a);
    }
  }
}
