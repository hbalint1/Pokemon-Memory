class Card {
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.a = 50;
  }

  flip(){

  }

  display(){
    noFill();
    stroke(255);
    rect(this.x, this.y, this.a, this.a);
  }
}
