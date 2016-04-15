
var material = new THREE.MeshPhongMaterial({
  color: 0xccccff,
  opacity: 0.2,
  side: THREE.FrontSide,
  transparent: true
});

var halfSphereGeometry = new THREE.SphereGeometry(4, 16, 16, 0, Math.PI*2, Math.PI/2, Math.PI);
var halfSphere = new THREE.Mesh(halfSphereGeometry, material);
halfSphere.position.setY(3);
scene.add(halfSphere);

var cylinderGeometry = new THREE.CylinderGeometry(0.3,0.3,4,16);
var cylinder = new THREE.Mesh(cylinderGeometry, material);
cylinder.position.setY(-3);
scene.add(cylinder);

var littleDiscGeometry = new THREE.CylinderGeometry(3,3,0.2,16);
var littleDisc = new THREE.Mesh(littleDiscGeometry, material);
littleDisc.position.setY(-5);
scene.add(littleDisc);

var planeGeometry = new THREE.PlaneGeometry(30,30);
var plane = new THREE.Mesh(planeGeometry, new THREE.MeshLambertMaterial({
  color: 0x77FF66
}));
plane.rotation.set(-Math.PI/2,0,0);
plane.position.setY(-5);
scene.add(plane);
// --

camera.position.set(0, 10, 20);

var light1 = new THREE.DirectionalLight(0xffcccc, 1);
light1.position.set(20,20,20);
scene.add(light1);

var light2 = new THREE.DirectionalLight(0xccccff, 0.8);
light2.position.set(-20,20,20);
scene.add(light2);

function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}
render();
var controls = new THREE.OrbitControls(camera, renderer.domElement);
