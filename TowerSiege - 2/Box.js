class Box {
  constructor(x, y,width,height) {
    var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Box.png");
    this.visibility = 255;
    //console.log(this.body.speed);
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 7){
    var pos =this.body.position;
    var angle = this.body.angle;
    console.log(this.body.speed);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    //strokeWeight(4);
    //stroke("color");  
    image(this.image,0, 0, this.width, this.height);
    pop();
    }else {
      World.remove(world,this.body);
      push ();
      this.visibility = this.visibility-5;
      tint (255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height); 
      pop ();
    }
  }
  score(){
    if(this,this.visibility <0 && this.visibility>-105){
      score++;
    }
  }
};