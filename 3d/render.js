var viewMatrix;
var drawverts = false;

var drawblines = false;
var drawfaces = true;
var pcolor = new BABYLON.Color4(1, 1, 0, 1);
var dcolor = new BABYLON.Color4(1, 0, 1, 1);

var lightPos = new BABYLON.Vector3(0 , 20, 0);

function makeVertex(vp,oc){
  var res = {
        Coordinates: new BABYLON.Vector3(vp.x, vp.y, vp.z),
        Normal: new BABYLON.Vector3(vp.x-oc.x, vp.y-oc.y, vp.z-oc.z),
        WorldCoordinates: null
    };
    return res;
}



var SoftEngine;
  (function (SoftEngine) {
    var Texture = (function () {
      // Working with a fix sized texture (512x512, 1024x1024, etc.).
      function Texture(filename, width, height) {
          this.width = width;
          this.height = height;
          this.load(filename);
      }

      Texture.prototype.load = function (filename) {
          var _this = this;
          var imageTexture = new Image();
          imageTexture.height = this.height;
          imageTexture.width = this.width;
          imageTexture.onload = function () {
              var internalCanvas = document.createElement("canvas");
              internalCanvas.width = _this.width;
              internalCanvas.height = _this.height;
              var internalContext = internalCanvas.getContext("2d");
              internalContext.drawImage(imageTexture, 0, 0);
              _this.internalBuffer = internalContext.getImageData(0, 0, _this.width, _this.height);
          };
          imageTexture.src = filename;
      };

      // Takes the U & V coordinates exported by Blender
      // and return the corresponding pixel color in the texture
      Texture.prototype.map = function (tu, tv) {
          if (this.internalBuffer) {
              // using a % operator to cycle/repeat the texture if needed
              var u = Math.abs(((tu * this.width) % this.width)) >> 0;
              var v = Math.abs(((tv * this.height) % this.height)) >> 0;

              var pos = (u + v * this.width) * 4;

              var r = this.internalBuffer.data[pos];
              var g = this.internalBuffer.data[pos + 1];
              var b = this.internalBuffer.data[pos + 2];
              var a = this.internalBuffer.data[pos + 3];

              return new BABYLON.Color4(r / 255.0, g / 255.0, b / 255.0, a / 255.0);
          }
          // Image is not loaded yet
          else {
              return new BABYLON.Color4(1, 1, 1, 1);
          }
      };
      return Texture;
  })();
  SoftEngine.Texture = Texture;

   var Camera = (function () {
       function Camera() {
           this.Position = BABYLON.Vector3.Zero();
           this.Rotation = BABYLON.Vector3.Zero();
           this.Forward = new BABYLON.Vector3(0,0,-1);

       }


       return Camera;
   })();
   SoftEngine.Camera = Camera;

   var Mesh = (function () {
       function Mesh(name, verticesCount,facesCount) {
           this.name = name;
           this.Color = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1)
           this.Faces = new Array(facesCount);
           this.Vertices = new Array(verticesCount);
           this.Rotation = BABYLON.Vector3.Zero();
           this.Position = BABYLON.Vector3.Zero();
       }
       return Mesh;
   })();
   SoftEngine.Mesh = Mesh;

   var Device = (function () {
       function Device(canvas) {
           // Note: the back buffer size is equal to the number of pixels to draw
           // on screen (width*height) * 4 (R,G,B & Alpha values).
           this.workingCanvas = canvas;
           this.workingWidth = canvas.width;
           this.workingHeight = canvas.height;
           this.workingContext = this.workingCanvas.getContext("2d");
           this.depthbuffer = new Array(this.workingWidth * this.workingHeight);
       }
        // This function is called to clear the back buffer with a specific color
       Device.prototype.clear = function () {
           // Clearing with black color by default
           //this.workingContext.clearRect(0, 0, this.workingWidth, this.workingHeight);
            this.workingContext.fillStyle = "rgba(255,0,255,.2)";
            this.workingContext.fillRect(0,0,vw,vh);
           // once cleared with black pixels, we're getting back the associated image data to
           // clear out back buffer
           this.backbuffer = this.workingContext.getImageData(0, 0, this.workingWidth, this.workingHeight);
           // Clearing depth buffer
            for (var i = 0; i < this.depthbuffer.length; i++) {
                // Max possible value
                this.depthbuffer[i] = 10000000;
            }
       };
        // Once everything is ready, we can flush the back buffer
       // into the front buffer.
       Device.prototype.present = function () {
           this.workingContext.putImageData(this.backbuffer, 0, 0);
       };
        // Called to put a pixel on screen at a specific X,Y coordinates
        var index;
        var index4;
       Device.prototype.putPixel = function (x, y,z, color) {
         this.backbufferdata = this.backbuffer.data;
          // As we have a 1-D Array for our back buffer
          // we need to know the equivalent cell index in 1-D based
          // on the 2D coordinates of the screen
           index = ((x >> 0) + (y >> 0) * this.workingWidth);
           index4 = index * 4;

          if(this.depthbuffer[index] < z) {
              return; // Discard
          }

          this.depthbuffer[index] = z;

          // RGBA color space is used by the HTML5 canvas
          this.backbufferdata[index4] = color.r * 255;
          this.backbufferdata[index4 + 1] = color.g * 255;
          this.backbufferdata[index4 + 2] = color.b * 255;
          this.backbufferdata[index4 + 3] = color.a * 255;
       };
       var point2d;
       var point3DWorld;
       var normal3DWorld;
       var x;
       var y;
        // Project takes some 3D coordinates and transform them
       // in 2D coordinates using the transformation matrix
       Device.prototype.project = function (vertex, transMat, world) {
         // transforming the coordinates into 2D space
           point2d = BABYLON.Vector3.TransformCoordinates(vertex.Coordinates, transMat);
          // transforming the coordinates & the normal to the vertex in the 3D world
           point3DWorld = BABYLON.Vector3.TransformCoordinates(vertex.Coordinates, world);
        //  world.invert();
          // var tworld = BABYLON.Matrix.Transpose(world);
          //tworld.invert();
           normal3DWorld = BABYLON.Vector3.TransformCoordinates(vertex.Normal, world);

          // The transformed coordinates will be based on coordinate system
          // starting on the center of the screen. But drawing on screen normally starts
          // from top left. We then need to transform them again to have x:0, y:0 on top left.
           x = point2d.x * this.workingWidth + this.workingWidth / 2.0;
           y = -point2d.y * this.workingHeight + this.workingHeight / 2.0;

          return ({
              Coordinates: new BABYLON.Vector3(x, y, point2d.z),
              Normal: normal3DWorld,
              WorldCoordinates: point3DWorld
          });
       };
        // drawPoint calls putPixel but does the clipping operation before
       Device.prototype.drawPoint = function (px,py,pz, color) {
         //var point = pdata.Coordinates;
           // Clipping what's visible on screen
           //console.log(point);
           if (px >= 0 && py >= 0 && px < this.workingWidth
                                             && py < this.workingHeight) {
               // Drawing a yellow point
               this.putPixel(px, py, pz, color);

               //mctx.fillStyle = "rgba(0,255,0,.9)";
               //mctx.fillRect(point.x-5,point.y-5,10,10);
           }
       };
       Device.prototype.drawPointOld = function (px,py,pz, color) {

           // Clipping what's visible on screen
           if (px >= 0 && py >= 0 && px < this.workingWidth
                                             && py < this.workingHeight) {
               // Drawing a yellow point
               this.putPixel(px, py, pz, color);
               //mctx.fillStyle = "rgba(0,255,0,.9)";
               //mctx.fillRect(point.x-5,point.y-5,10,10);
           }
       };

       // Clamping values to keep them between 0 and 1
      Device.prototype.clamp = function (value, min, max) {
          if (typeof min === "undefined") { min = 0; }
          if (typeof max === "undefined") { max = 1; }
          return Math.max(min, Math.min(value, max));
      };

      // Interpolating the value between 2 vertices
      // min is the starting point, max the ending point
      // and gradient the % between the 2 points
      Device.prototype.interpolate = function (min, max, gradient) {
          return min + (max - min) * this.clamp(gradient);
      };


      // drawing line between 2 points from left to right
      // papb -> pcpd
      // pa, pb, pc, pd must then be sorted before
      var pa;
      var pb;
      var pc;
      var pd;
      Device.prototype.processScanLine = function (data, va, vb, vc, vd, color) {
         pa = va.Coordinates;
         pb = vb.Coordinates;
         pc = vc.Coordinates;
         pd = vd.Coordinates;

        // Thanks to current Y, we can compute the gradient to compute others values like
        // the starting X (sx) and ending X (ex) to draw between
        // if pa.Y == pb.Y or pc.Y == pd.Y, gradient is forced to 1
        var gradient1 = pa.y != pb.y ? (data.currentY - pa.y) / (pb.y - pa.y) : 1;
        var gradient2 = pc.y != pd.y ? (data.currentY - pc.y) / (pd.y - pc.y) : 1;

        var sx = this.interpolate(pa.x, pb.x, gradient1) >> 0;
        var ex = this.interpolate(pc.x, pd.x, gradient2) >> 0;

        // starting Z & ending Z
        var z1 = this.interpolate(pa.z, pb.z, gradient1);
        var z2 = this.interpolate(pc.z, pd.z, gradient2);

        // drawing a line from left (sx) to right (
        for (var x = sx; x < ex; x++) {
            var gradient = (x - sx) / (ex - sx);

            var z = this.interpolate(z1, z2, gradient);
            var ndotl = data.ndotla;
            //ndotl *= 1.1;
            // changing the color value using the cosine of the angle
            // between the light vector and the normal vector
            this.drawPointOld(x, data.currentY, z,
                          new BABYLON.Color4(color.r * ndotl, color.g * ndotl, color.b * ndotl, 1));
        //   this.drawPointOld(x, data.currentY, z,color);

        }
    };

    // Compute the cosine of the angle between the light vector and the normal vector
    // Returns a value between 0 and 1
    var lightDirection;
    Device.prototype.computeNDotL = function (vertex, normal, lightPosition) {
         lightDirection = new BABYLON.Vector3(.3, 1.0, -.6);

        normal.normalize();
        lightDirection.normalize();

        return Math.max(0, BABYLON.Vector3.Dot(normal, lightDirection));
    };
      var centerPoint;
      var p1;
      var p2;
      var p3;
    Device.prototype.drawTriangle = function (v1, v2, v3, color, tnorm, world) {
        // Sorting the points in order to always have this order on screen p1, p2 & p3
        // with p1 always up (thus having the Y the lowest possible to be near the top screen)
        // then p2 between p1 & p3
        if (v1.Coordinates.y > v2.Coordinates.y) {
            var temp = v2;
            v2 = v1;
            v1 = temp;
        }

        if (v2.Coordinates.y > v3.Coordinates.y) {
            var temp = v2;
            v2 = v3;
            v3 = temp;
        }

        if (v1.Coordinates.y > v2.Coordinates.y) {
            var temp = v2;
            v2 = v1;
            v1 = temp;
        }

         p1 = v1.Coordinates;
         p2 = v2.Coordinates;
         p3 = v3.Coordinates;

        // normal face's vector is the average normal between each vertex's normal
       // computing also the center point of the face
       //var vnFace = BABYLON.Vector3.TransformCoordinates(tnorm, world);
        centerPoint = (v1.WorldCoordinates.add(v2.WorldCoordinates.add(v3.WorldCoordinates))).scale(1 / 3);
       // Light position

       // computing the cos of the angle between the light vector and the normal vector
       // it will return a value between 0 and 1 that will be used as the intensity of the color
       var ndotl = this.computeNDotL(centerPoint, tnorm, lightPos);

       var data = { ndotla: ndotl };

          // inverse slopes
          var dP1P2 = 0; var dP1P3;
          var tright = false; var tleft = false;

          // http://en.wikipedia.org/wiki/Slope
          // Computing slopes
          if(p2.y - p1.y > 0) {
              dP1P2 = (p2.x - p1.x) / (p2.y - p1.y);
          } else if (p2.x > p1.x){

            tright = true;
          }

          else {
              tleft = true;
          }

          if(p3.y - p1.y > 0) {
              dP1P3 = (p3.x - p1.x) / (p3.y - p1.y);
          } else {
              dP1P3 = 0;
          }



          // First case where triangles are like that:
          // P1
          // -
          // --
          // - -
          // -  -
          // -   - P2
          // -  -
          // - -
          // -
          // P3
        if(tright || (!tleft && dP1P2 > dP1P3)) {
              for(var y = p1.y >> 0; y <= p3.y >> 0; y++) {
                data.currentY = y;
                  if(y < p2.y) {
                      this.processScanLine(data, v1, v3, v1, v2, color);
                  } else {
                      this.processScanLine(data, v1, v3, v2, v3, color);
                  }
              }
          }
          // First case where triangles are like that:
          //       P1
          //        -
          //       --
          //      - -
          //     -  -
          // P2 -   -
          //     -  -
          //      - -
          //        -
          //       P3
          else {
              for(var y = p1.y >> 0; y <= p3.y >> 0; y++) {
                data.currentY = y;
                  if(y < p2.y) {
                      this.processScanLine(data, v1, v2, v1, v3, color);
                  } else {
                      this.processScanLine(data, v2, v3, v1, v3, color);
                  }
              }
          }
      };
       Device.prototype.drawLine = function (point0, point1,color) {
            var dist = point1.subtract(point0).length();

            // If the distance between the 2 points is less than 2 pixels
            // We're exiting
            if(dist < 2) {
                return;
            }

            // Find the middle point between first & second point
            var middlePoint = point0.add((point1.subtract(point0)).scale(0.5));
            // We draw this point on screen
            this.drawPoint(middlePoint.X,middlePoint.Y,middlePoint.Z,color);
            // Recursive algorithm launched between first & middle point
            // and between middle & second point
            this.drawLine(point0, middlePoint, color);
            this.drawLine(middlePoint, point1, color);
        };

        Device.prototype.drawBline = function (point0, point1,color) {
              var x0 = point0.x >> 0;
              var y0 = point0.y >> 0;
              var x1 = point1.x >> 0;
              var y1 = point1.y >> 0;

              var dx = Math.abs(x1 - x0);
              var dy = Math.abs(y1 - y0);

              var sx = (x0 < x1) ? 1 : -1;
              var sy = (y0 < y1) ? 1 : -1;

              var err = dx - dy;
              while(true) {
                  this.drawPointOld(x0, y0,0,color);
                  if((x0 == x1) && (y0 == y1)) break;
                  var e2 = 2 * err;

                  if(e2 > -dy) { err -= dy; x0 += sx; }
                  if(e2 < dx) { err += dx; y0 += sy; }
              }
          };
        // The main method of the engine that re-compute each vertex projection
       // during each frame
       var projectionMatrix;
       var worldMatrix;
       var transformMatrix;
       var worldView;
       var cMesh;
       var currentFace;
       Device.prototype.render = function (camera, meshes) {
           // To understand this part, please read the prerequisites resources
          // var viewMatrix = BABYLON.Matrix.LookAtLH(camera.Position, camera.Target(), BABYLON.Vector3.Up());
            viewMatrix = BABYLON.Matrix.RotationYawPitchRoll(
               camera.Rotation.y, camera.Rotation.x, camera.Rotation.z)
                .multiply(BABYLON.Matrix.Translation(
                  camera.Position.x, camera.Position.y, camera.Position.z));
                  //console.log(viewMatrix.m);
                  camera.Forward.x = viewMatrix.m[8];
                  camera.Forward.y = viewMatrix.m[9];
                  camera.Forward.z = viewMatrix.m[10];
                  camera.Forward.normalize();
                  var zax = camera.Forward;
                  viewMatrix.invert();


                var numdrew = 0;

          //  console.log(viewMatrix.toArray());

            projectionMatrix = BABYLON.Matrix.PerspectiveFovLH(0.7,
              this.workingWidth / this.workingHeight, 0.1, 1.0);
            for (var index = 0; index < meshes.length; index++) {
               // current mesh to work on
                cMesh = meshes[index];
               // Beware to apply rotation before translation
                worldMatrix = BABYLON.Matrix.RotationYawPitchRoll(
                   cMesh.Rotation.y, cMesh.Rotation.x, cMesh.Rotation.z)
                    .multiply(BABYLON.Matrix.Translation(
                      cMesh.Position.x, cMesh.Position.y, cMesh.Position.z));
                 transformMatrix = worldMatrix.multiply(viewMatrix).multiply(projectionMatrix);

                 worldView = worldMatrix.multiply(viewMatrix);
              //  console.log(zax);
                var ez = BABYLON.Vector3.Dot(zax,camera.Position.subtract(cMesh.Position));
               //console.log(ez);
               if (ez < -4){
                // draw faces
                if (drawfaces){
                  for (var indexFaces = 0; indexFaces < cMesh.Faces.length; indexFaces++) {
                       currentFace = cMesh.Faces[indexFaces];
                      var vertexA = cMesh.Vertices[currentFace.A];
                      var vertexB = cMesh.Vertices[currentFace.B];
                      var vertexC = cMesh.Vertices[currentFace.C];
                      var dfcolor = cMesh.Color;

                      var transformedNormal = BABYLON.Vector3.TransformNormal(currentFace.N, worldView);


                  if (transformedNormal.z < .12) {
                      var pixelA = this.project(vertexA, transformMatrix, worldMatrix);
                      var pixelB = this.project(vertexB, transformMatrix, worldMatrix);
                      var pixelC = this.project(vertexC, transformMatrix, worldMatrix);
                      if (currentFace.CR != null){
                        dfcolor = currentFace.CR;
                      }
                      numdrew += 1;
                      this.drawTriangle(pixelA, pixelB, pixelC, dfcolor, transformedNormal, worldMatrix);
                  }}
                }


                //draw lines
                if (drawblines){
                  var dcolor = cMesh.Color;
                  for (var indexFaces = 0; indexFaces < cMesh.Faces.length; indexFaces++)
                    {
                        var currentFace = cMesh.Faces[indexFaces];
                        var vertexA = cMesh.Vertices[currentFace.A];
                        var vertexB = cMesh.Vertices[currentFace.B];
                        var vertexC = cMesh.Vertices[currentFace.C];

                        var pixelA = this.project(vertexA, transformMatrix, worldMatrix).Coordinates;
                        var pixelB = this.project(vertexB, transformMatrix, worldMatrix).Coordinates;
                        var pixelC = this.project(vertexC, transformMatrix, worldMatrix).Coordinates;

                        this.drawBline(pixelA, pixelB, dcolor);
                        this.drawBline(pixelB, pixelC, dcolor);
                        this.drawBline(pixelC, pixelA, dcolor);
                    }
                }

                //draw verts
                if (drawverts){
                  for (var indexVertices = 0; indexVertices < cMesh.Vertices.length; indexVertices++) {
                     // First, we project the 3D coordinates into the 2D space
                     var projectedPoint = this.project(cMesh.Vertices[indexVertices], transformMatrix, worldMatrix);
                     // Then we can draw on screen
                     this.drawPoint(projectedPoint.x,projectedPoint.y,projectedPoint.z,pcolor);

                 }
                }

}


           }

       };
       return Device;
   })();
   SoftEngine.Device = Device;
})(SoftEngine || (SoftEngine = {}));

function Cross2D( x0,  y0,  x1,  y1)

{

   return x0 * y1 - x1 * y0;

}
function LineSide2D(p, lineFrom, lineTo)
{

   return Cross2D(p.X - lineFrom.X, p.Y - lineFrom.Y, lineTo.X - lineFrom.X, lineTo.Y - lineFrom.Y);

}
