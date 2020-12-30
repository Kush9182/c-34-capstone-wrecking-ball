class wbstring{
    constructor(a,b){
       var options={
          bodyA: a,
          pointB: b,
          length: 350 
       } 
       this.constraint=Constraint.create(options);
       this.s=b
       World.add(world,this.constraint);
    }
    display(){
       var posa=this.constraint.bodyA.position; 
       var posb=this.s;
       line(posa.x,posa.y,posb.x,posb.y); 

    }

}