var nx, ny, retval;
var spd = .2;

function enem(ix,iy){
    this.x = ix;
    this.y = iy;
    this.dx = 0;
    this.dy = 0;
    enems.push(this);


    this.update = function(dt){
        if (this.dx == 0 && this.dy == 0){
            this.newdirect();
        }
        nx = this.x + (this.dx * dt * spd);
        ny = this.y + (this.dy * dt * spd);
        if (!trymove(this,nx,ny)){
            this.newdirect();
        }
        

    }

    this.newdirect = function(){
        this.dx = (Math.random()*2)-1;
        this.dy = (Math.random()*2) -1;
        retval = normalize(this.dx,this.dy);
        this.dx = retval[0];
        this.dy = retval[1];
    }

    this.draw = function(){
        ctx.beginPath();
            ctx.arc(this.x,this.y,20,0,2*Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
}