function proj(ix,iy,idx,idy,spd = .4){
    this.x = ix;
    this.y = iy;
    this.spd = spd;
    this.dx = idx;
    this.dy = idy;
    this.r = 5;
    projs.push(this);

    this.update = function(dt){
        nx = this.x + (this.dx * dt * this.spd);
        ny = this.y - (this.dy * dt * this.spd);
        if (!trymove(this,nx,ny)){
            projs.splice(projs.indexOf(this),1);

        }
    }

    this.draw = function(){
        ctx.beginPath();
            ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
            ctx.fill();
        ctx.closePath();
    }

}