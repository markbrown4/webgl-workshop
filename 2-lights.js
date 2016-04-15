
// add a cube with lighting mesh
var geometery = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial({ color: 0xFC6A45 })
var cube = new THREE.Mesh(geometery, material)
scene.add(cube);

var light1 = new THREE.DirectionalLight(0xffdddd, 1);
light1.position.set(10,10,10);
scene.add(light1);

var light2 = new THREE.DirectionalLight(0xddddff, 0.7);
light2.position.set(-10,0,5);
scene.add(light2);

// Animation
function update() {
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
}

// render loop
function render() {
  requestAnimationFrame(render);
  update();
  renderer.render(scene, camera);
}
render();
