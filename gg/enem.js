var nx, ny, retval;


function enem(ix,iy, spd = .15){
    this.x = ix;
    this.y = iy;
    this.spd = spd;
    this.dx = 0;
    this.dy = 0;
    this.r = 20;
    enems.push(this);


    this.update = function(dt){
        if (this.dx == 0 && this.dy == 0){
            this.newdirect();
        }
        nx = this.x + (this.dx * dt * this.spd);
        ny = this.y + (this.dy * dt * this.spd);
        if (!trymove(this,nx,ny)){
            if(!trymove(this,this.x,ny)){
                if(!trymove(this,nx,this.y))
                {
                    this.newdirect();
                }
                else{
                    this.dy = -this.dy;
                }
            }
            else{
                this.dx = -this.dx;
            }
        }

        for (let p of projs){
            if (doesTouch(this,p)){
                projs.splice(projs.indexOf(p),1);
                this.r -= 2;
                this.spd = Math.min(this.spd + .04, .4);
                this.newdirect();
                if (this.r < 8){
                    enems.splice(enems.indexOf(this),1);
                    addScore(1);
                   spawnNewEnem();
                }

                
            }
        }

        if (doesTouch(this,me)){
            location.reload();
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
            ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
}

function spawnNewEnem(){
    var nex, ney;
    if (me.x < 100){
        nex = 150;
    }
    else{
        nex = 50;
    }
    if (me.y < 50){
        ney = 75;
    }
    else{
        ney = 25;
    }
    new enem(nex,ney);

}