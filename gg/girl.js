var nx, ny;
var spd = .2;
var shootrate = 150;
var shootcount = 0;

function girl(ix,iy) {
  this.x = ix;
  this.y = iy;
  this.aimx = 0;
  this.aimy = 1;
  this.r = 10;
  this.dx = 0;
  this.dy = 0;



  this.update = function(dt){
    this.aimx = jorx;
    this.aimy = jory;

    this.dx = jlx;
    this.dy = -jly;

    if (!((this.dx==0)&&(this.dy==0))){
        nx = this.x + (this.dx * dt * spd);
        ny = this.y + (this.dy * dt * spd);
       
    
        if(!trymove(this,nx,ny)){
            if(!trymove(this,this.x,ny)){
                if(!trymove(this,nx,this.y))
                {
                    //stuck on wall
                }
            }
        }
    }


    shootcount += dt;
    if (shootcount > shootrate){
        new proj(this.x,this.y,this.aimx,this.aimy);
        shootcount = 0;
    }
    

 
   

  };


  this.draw = function(){
    ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x + (this.aimx*50), this.y - (this.aimy*50));
    ctx.stroke();
    ctx.closePath();
    //var aimangle = -Math.atan2(this.aimy, this.aimx);
    //drawImage(ctx,meimg,this.x,this.y,aimangle +(Math.PI/2),0.1);
  }



}
