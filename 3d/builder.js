function makeCube( initpos, sfactor = 1, doesrotate = false, rf = 1){
  mesh = new SoftEngine.Mesh("Cube", 8,12);
  meshes.push(mesh);
  mesh.doesrotate = doesrotate;
  mesh.rf = rf;
  mesh.Position = initpos;
  mesh.rdist = Math.sqrt(initpos.x * initpos.x + initpos.z * initpos.z)
  mesh.Vertices[0] =
  makeVertex(new BABYLON.Vector3(sfactor *-1, sfactor *1,sfactor * 1),mesh.Position);
  mesh.Vertices[1] = makeVertex(new BABYLON.Vector3(sfactor *1, sfactor * 1,sfactor * 1),mesh.Position);
  mesh.Vertices[2] = makeVertex(new BABYLON.Vector3(sfactor* -1, sfactor* -1, sfactor*1),mesh.Position);
  mesh.Vertices[3] = makeVertex(new BABYLON.Vector3(sfactor*1, sfactor*-1,sfactor* 1),mesh.Position);
  mesh.Vertices[4] = makeVertex(new BABYLON.Vector3(sfactor* -1,sfactor* 1,sfactor* -1),mesh.Position);
  mesh.Vertices[5] = makeVertex(new BABYLON.Vector3(sfactor*1,sfactor* 1, sfactor* -1),mesh.Position);
  mesh.Vertices[6] = makeVertex(new BABYLON.Vector3(sfactor*1, sfactor*-1, sfactor*-1),mesh.Position);
  mesh.Vertices[7] = makeVertex(new BABYLON.Vector3(sfactor* -1, sfactor*-1,sfactor* -1),mesh.Position);

  mesh.Faces[0] = { A:0, B:1, C:2 ,N: new BABYLON.Vector3(0,0,1)};
  mesh.Faces[1] = { A:1, B:2, C:3,N: new BABYLON.Vector3(0,0,1) };
  mesh.Faces[2] = { A:1, B:3, C:6 ,N: new BABYLON.Vector3(1,0,0)};
  mesh.Faces[3] = { A:1, B:5, C:6 ,N: new BABYLON.Vector3(1,0,0)};
  mesh.Faces[4] = { A:0, B:1, C:4 ,N: new BABYLON.Vector3(0,1,0)};
  mesh.Faces[5] = { A:1, B:4, C:5,N: new BABYLON.Vector3(0,1,0) };

  mesh.Faces[6] = { A:2, B:3, C:7 ,N: new BABYLON.Vector3(0,-1,0)};
  mesh.Faces[7] = { A:3, B:6, C:7 ,N: new BABYLON.Vector3(0,-1,0)};
  mesh.Faces[8] = { A:0, B:2, C:7 ,N: new BABYLON.Vector3(-1,0,0)};
  mesh.Faces[9] = { A:0, B:4, C:7 ,N: new BABYLON.Vector3(-1,0,0)};
  mesh.Faces[10] = { A:4, B:5, C:6 ,N: new BABYLON.Vector3(0,0,-1)};
  mesh.Faces[11] = { A:4, B:6, C:7 ,N: new BABYLON.Vector3(0,0,-1)};
  return mesh;

}




function makeFlatGround(centerbit){
  mesh = new SoftEngine.Mesh("flat", 4,2);
  meshes.push(mesh);
  mesh.doesrotate = false;
  mesh.Position = centerbit;
  mesh.Vertices[0] = makeVertex(new BABYLON.Vector3(-2, 0, -2),mesh.Position);
  mesh.Vertices[1] = makeVertex(new BABYLON.Vector3(2, 0, -2),mesh.Position);
  mesh.Vertices[2] = makeVertex(new BABYLON.Vector3(-2, 0, 2),mesh.Position);
  mesh.Vertices[3] = makeVertex(new BABYLON.Vector3(2, 0, 2),mesh.Position);
  mesh.Faces[0] = { A:0, B:1, C:2 ,N: new BABYLON.Vector3(0,1,0)};
  mesh.Faces[1] = { A:1, B:2, C:3,N: new BABYLON.Vector3(0,1,0) };
}


//
//

function makePointy(centerbit, dr = false){
  mesh = new SoftEngine.Mesh("pointy", 9,8);
  meshes.push(mesh);

  mesh.Position = centerbit;
  mesh.Vertices[0] = makeVertex(new BABYLON.Vector3(-1, 0, 1),mesh.Position);
  mesh.Vertices[1] = makeVertex(new BABYLON.Vector3(0, 0, 1),mesh.Position);
  mesh.Vertices[2] = makeVertex(new BABYLON.Vector3(1, 0, 1),mesh.Position);
  mesh.Vertices[3] = makeVertex(new BABYLON.Vector3(-1, 0, 0),mesh.Position);
  mesh.Vertices[4] = makeVertex(new BABYLON.Vector3(0, 3, 0),mesh.Position);
  mesh.Vertices[5] = makeVertex(new BABYLON.Vector3(1, 0, 0),mesh.Position);
  mesh.Vertices[6] = makeVertex(new BABYLON.Vector3(-1, 0, -1),mesh.Position);
  mesh.Vertices[7] = makeVertex(new BABYLON.Vector3(0, 0, -1),mesh.Position);
  mesh.Vertices[8] = makeVertex(new BABYLON.Vector3(1, 0, -1),mesh.Position);

  // 0   1  2
  //3   4  5
  //6  7  8
  mesh.Faces[0] = { A:0, B:1, C:3 ,N: new BABYLON.Vector3(0,1,0)};
  mesh.Faces[1] = { A:1, B:2, C:5,N: new BABYLON.Vector3(0,1,0) };
  mesh.Faces[2] = { A:7, B:5, C:8 ,N: new BABYLON.Vector3(0,1,0)};
  mesh.Faces[3] = { A:3, B:7, C:6,N: new BABYLON.Vector3(0,1,0) };

  mesh.Faces[4] = { A:4, B:1, C:3 ,N: new BABYLON.Vector3(-1,1,1)};
  mesh.Faces[5] = { A:1, B:4, C:5,N: new BABYLON.Vector3(1,1,1) };
  mesh.Faces[6] = { A:7, B:5, C:4 ,N: new BABYLON.Vector3(1,1,-1)};
  mesh.Faces[7] = { A:3, B:7, C:4,N: new BABYLON.Vector3(-1,1,-1) };
}
