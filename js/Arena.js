Arena = function(game) {
  // Appel des variables nécéssaires
  this.game = game;
  var scene = game.scene;

  //***************** LIGHTS ***********************************//

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 20, 0), scene);
  light.diffuse = new BABYLON.Color3(1, 1, 1);
  light.specular = new BABYLON.Color3(1, 1, 1);

  var light1 = new BABYLON.DirectionalLight("Dir1", new BABYLON.Vector3(20, 10, 0), scene);
  light1.diffuse = new BABYLON.Color3(1, 1, 0);
  light1.specular = new BABYLON.Color3(1, 1, 0);

  //***************** END LIGHTS ***********************************//


  //***************** MATERIALS ***********************************//
  var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);
  materialGround.diffuseTexture = new BABYLON.Texture("assets/images/assets_floor_2001.png", scene);
  materialGround.diffuseTexture.uScale = 40.0;
  materialGround.diffuseTexture.vScale = 40.0;

  var materialPink = new BABYLON.StandardMaterial("boxTexture", scene);
  materialPink.diffuseTexture = new BABYLON.Texture("assets/images/pink_cube.png", scene);
  materialPink.diffuseTexture.uScale = 1.0;
  materialPink.diffuseTexture.vScale = 1.0;

  var materialYellow = new BABYLON.StandardMaterial("boxTexture", scene);
  materialYellow.diffuseTexture = new BABYLON.Texture("assets/images/yellow_cube.png", scene);
  materialYellow.diffuseTexture.uScale = 1.0;
  materialYellow.diffuseTexture.vScale = 1.0;

  var materialColumn = new BABYLON.StandardMaterial("wallTexture", scene);
  materialColumn.diffuseTexture = new BABYLON.Texture("assets/images/column.png", scene);
  materialColumn.diffuseTexture.uScale = 10.0;

  var materialBlueYellowPoint = new BABYLON.StandardMaterial('texture', scene);
  materialBlueYellowPoint.diffuseTexture = new BABYLON.Texture('assets/images/blue_yellow_point.png', scene);
  materialBlueYellowPoint.diffuseTexture.uScale = 10.0;

  var materialBords = new BABYLON.StandardMaterial('texture', scene);
  materialBords.diffuseTexture = new BABYLON.Texture('assets/images/bords.jpeg', scene);
  materialBords.diffuseTexture.uScale = 1.0;

  var materialBords2  =new BABYLON.StandardMaterial('texture', scene);
  materialBords2.diffuseTexture = new BABYLON.Texture('assets/images/ciel.jpeg', scene);
  materialBords2.diffuseTexture.uScale = 1.0;

  //**************************** END MATERIALS******************************//


  //***************** OBJETS ***********************************//

  // BASE
  var ground = BABYLON.Mesh.CreateGround("ground1", 100, 100, 2, scene);
  ground.scaling = new BABYLON.Vector3(2, 10, 3);
  ground.scaling.z = 2;
  ground.material = materialGround;


  var planeNorth = BABYLON.Mesh.CreatePlane("planeNorth",200, scene,false,BABYLON.Mesh.FRONTSIDE);
  planeNorth.position = new BABYLON.Vector3(0, 200/2, 100);
  planeNorth.material = materialBords;

  var planeSouth = BABYLON.Mesh.CreatePlane("planeSouth",200, scene, false,BABYLON.Mesh.BACKSIDE);
  planeSouth.position = new BABYLON.Vector3(0, (200/2), -100);
  planeSouth.material = materialBords;

  var planeWest = BABYLON.Mesh.CreatePlane("planeWest",200, scene, false,BABYLON.Mesh.BACKSIDE);
  planeWest.position = new BABYLON.Vector3(-100, (200/2), 0);
  planeWest.rotation.y = (Math.PI * 90) / 180;
  planeWest.material = materialBords2;

  var planeEast = BABYLON.Mesh.CreatePlane("planeWest",200, scene, false,BABYLON.Mesh.FRONTSIDE);
  planeEast.position = new BABYLON.Vector3(100, (200/2), 0);
  planeEast.rotation.y = (Math.PI * 90) / 180;
  planeEast.material = materialBords2;

  // //BOX
  var miniBox = BABYLON.Mesh.CreateBox("box1", 3, scene);
  miniBox.scaling.y = 1;
  miniBox.position = new BABYLON.Vector3(5, ((3 / 2)), 5);
  miniBox.rotation.y = (Math.PI * 45) / 180;
  miniBox.material = materialYellow;

  var minibox2 = miniBox.clone('minibox2');
  minibox2.position = new BABYLON.Vector3(90, ((3 / 2)), 50);

  var minibox3 = miniBox.clone('minibox3');
  minibox3.position = new BABYLON.Vector3(-50, ((3 / 2)), 70);

  var minibox4 = miniBox.clone('minibox4');
  minibox4.position = new BABYLON.Vector3(20, ((3 / 2)), -40);

  var minibox5 = miniBox.clone('minibox5');
  minibox5.position = new BABYLON.Vector3(-20, ((3 / 2)), 50);

  var minibox6 = miniBox.clone('minibox6');
  minibox6.position = new BABYLON.Vector3(-60, ((3 / 2)), -60);


  var medBox = BABYLON.Mesh.CreateBox("medBox1", 5, scene);
  medBox.position = new BABYLON.Vector3(-10, (5 / 2), -10)
  medBox.material = materialPink;

  var giantBox = BABYLON.Mesh.CreateBox("giantBox", 45, scene)
  giantBox.position = new BABYLON.Vector3(30, 40, -40);
  giantBox.material = materialYellow;
  //CYLINDER
  var cylinder = BABYLON.Mesh.CreateCylinder("cyl1", 20, 5, 5, 20, 4, scene);
  cylinder.position.y = 20 / 2;
  cylinder.material = materialColumn;

  var cylinder2 = cylinder.clone("cylinder2");
  cylinder2.position = new BABYLON.Vector3(-70, 20 / 2, 70);

  var cylinder3 = cylinder.clone("cylinder3");
  cylinder3.position = new BABYLON.Vector3(20, 20 / 2, -20);

  var cylinder4 = cylinder.clone("cylinder4");
  cylinder4.position = new BABYLON.Vector3(40, 20 / 2, -20);

  var cylinder5 = cylinder.clone("cylinder5");
  cylinder5.position = new BABYLON.Vector3(20, 20 / 2, -60);

  var cylinder6 = cylinder.clone("cylinder6");
  cylinder6.position = new BABYLON.Vector3(40, 20 / 2, -60);

  var bigCylinder = BABYLON.Mesh.CreateCylinder('bigCyl1', 40, 50, 50, 20, 4, scene);
  bigCylinder.position = new BABYLON.Vector3(-40, (40 / 2), -10)
  bigCylinder.material = materialPink;

  // SPHERES
  var sphere = BABYLON.Mesh.CreateSphere('sphere1', 10, 20, scene);
  sphere.position = new BABYLON.Vector3(7, (20 / 2), -70)

  var sphere2 = sphere.clone('sphere2');
  sphere2.position = new BABYLON.Vector3(40, (20 / 2), 55)
  sphere2.material = materialBlueYellowPoint;




};
