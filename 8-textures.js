
var imagePrefix = 'textures/';
var directions = ['posx', 'negx', 'posy', 'negy', 'posz', 'negz'];
var imageSuffix = '.jpg';
var skyGeometry = new THREE.BoxGeometry(5000, 5000, 5000);
var materialArray = [];
for (var i = 0; i < 6; i++) {
   materialArray.push(new THREE.MeshBasicMaterial({
       map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
       side: THREE.BackSide
   }));
}
var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(skyBox);


var cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
var texture = THREE.ImageUtils.loadTexture('textures/wood.jpg');
var material = new THREE.MeshLambertMaterial({
  map: texture
});

var cube = new THREE.Mesh(cubeGeometry, material);
cube.position.x = -2;
scene.add(cube);

var materialArray = [];
var imgName = './textures/crate_';
for (var i = 1; i < 7; i++) {
  materialArray.push(new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture(imgName + i + '.jpg')
  }));
}
var faceMaterial = new THREE.MeshFaceMaterial(materialArray);
var cube2 = new THREE.Mesh(cubeGeometry, faceMaterial);
cube2.position.x = 2;
scene.add(cube2);

var light1 = new THREE.DirectionalLight(0xffcccc, 1);
light1.position.set(20,20,20);
scene.add(light1);

var light2 = new THREE.DirectionalLight(0xccccff, 0.8);
light2.position.set(-20,20,20);
scene.add(light2);

camera.position.set(2, 3, 4);

function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}
render();
var controls = new THREE.OrbitControls(camera, renderer.domElement);
