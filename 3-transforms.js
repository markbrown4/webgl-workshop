
// add a cube with lighting mesh
var geometery = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial({ color: 0xFC6A45 })
var cube = new THREE.Mesh(geometery, material)
scene.add(cube);

var xMovement = 0.05;

// Animation
function update() {

  // translate
  if (cube.position.x > 3) {
    xMovement = -0.05;
  }
  else if (cube.position.x < -3) {
    xMovement = 0.05;
  }
  cube.position.x += xMovement;

  // rotate
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;

  // cube.scale.y += 0.01;
  // cube.scale.x -= 0.002;
}

var light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(10,10,10);
scene.add(light1);

var light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(-10,0,5);
scene.add(light2);

// render loop
function render() {
  requestAnimationFrame(render);
  update();
  renderer.render(scene, camera);
}
render();
