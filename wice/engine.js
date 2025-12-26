
// vram, plus extra storage lol
const memory = new WebAssembly.Memory( { initial: 18 } );


const imports = {
    js: {
        mem: memory,
        log: (arg) => {console.log(arg);return arg},
        randi: (arg) => {return Math.floor(Math.random() * arg) }
    }
};

const byteArray = new Uint8ClampedArray( memory.buffer, 0, 512 * 512 * 4 );
var frloop;



function decode(encoded) {
    var binaryString =  atob(encoded);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

async function engine(){
    fetch('./main.wasm')
    .then( response => response.arrayBuffer() )
    .then( bytes => WebAssembly.compile( bytes ) )
    .then( module => new WebAssembly.Instance( module, imports ) )
    .then( instance => {

         frloop = instance.exports;
        const res = frloop.blank();
        frloop.init();
        renderframe();
        

    });
}


    var img;
    var canvas;
    var debugdiv;
    var ctx;
    var frame=0;

    initcanvas();
     engine();
    

    function initcanvas(){
         canvas = document.getElementById('c');
         debugdiv = document.getElementById('d');
         ctx = canvas.getContext('2d');
    }

function renderframe(){
// Create an ImageData instance from the array

         img = new ImageData( byteArray, 512, 512 );
        // Put the image data into the canvas
        ctx.putImageData( img, 0, 0 );
        //debugdiv.innerText = "image rendered, frame " + frame;
        if (frloop != null){
   // frloop.run();
   //frloop.sethl(frame%511,frame%511,5);
   //frloop.setvl(frame%511,0,5);
   frloop.ss();
        }       
        
        frame += 1;
        
        //console.log(byteArray);
        requestAnimationFrame(renderframe);

        
        
}
