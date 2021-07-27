class paper{
    constructor(x, y, radius) {
    var options = {
    
        isStatic: False, 
        'restitution':0.5,
        'friction':0.5,
        'density':1.2
    }
        this.body = Bodies .rectangle(x, y, radius, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
     }
      display(){
        ellipseMode(RADIUS);
        
        fill("yellow");
        
        circle(this.body.position.x, this.body.position.y, this. radius);
        }
      };