
// vram, 16 pages pages of 16 kiB.
const memory = new WebAssembly.Memory( { initial: 16 } );


const imports = {
    js: {
        mem: memory,
        log: (arg) => {console.log(arg);return arg}
    }
};

const byteArray = new Uint8ClampedArray( memory.buffer, 0, 512 * 512 * 4 );
var frloop;

var encoded = "... contents of encoded from above ...";



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
        debugdiv.innerText = "image rendered, frame " + frame;
        if (frloop != null){
   // frloop.run();
   frloop.setp(((frame)%512) + (frame/512),((frame)%512) + (frame/512));
        }       
        
        frame += 1;
        
        //console.log(byteArray);
        requestAnimationFrame(renderframe);
        
}
