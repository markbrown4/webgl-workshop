
var color = new THREE.Color();
var updateColors = function() {
  color.setRGB(1, 1, 0);

  setTimeout(function() {
    color.setHex(0x3333ff);

    setTimeout(function() {
      color.setHSL(.8, .3, .5);

      setTimeout(updateColors, 1000);
    }, 1000);
  }, 1000);
}
updateColors();

var basicMaterial = new THREE.MeshBasicMaterial();
basicMaterial.color = color;

var sphere = new THREE.SphereGeometry(4, 20, 20);
var ballOfWonder = new THREE.Mesh(sphere, basicMaterial);
scene.add(ballOfWonder);

var lambertMaterial = new THREE.MeshLambertMaterial()
lambertMaterial.color = color;

var sphere2 = sphere.clone();
var ballOfLight = new THREE.Mesh(sphere2, lambertMaterial);
ballOfLight.position.setX(5);
scene.add(ballOfLight);

var phongMaterial = new THREE.MeshPhongMaterial()
phongMaterial.color = color;

var sphere3 = sphere.clone();
var ballOfMark = new THREE.Mesh(sphere3, phongMaterial);
ballOfMark.position.setX(-5);
scene.add(ballOfMark);

// --

camera.position.set(0, 10, 20);

var light1 = new THREE.DirectionalLight(0xffaaaa, .7);
light1.position.set(20,20,20);
scene.add(light1);

var light2 = new THREE.DirectionalLight(0xaaaaff, 0.5);
light2.position.set(-20,20,20);
scene.add(light2);

function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}
render();
var controls = new THREE.OrbitControls(camera, renderer.domElement);
