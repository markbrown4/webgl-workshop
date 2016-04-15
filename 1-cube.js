
// add a basic cube
var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0xFC6A45 });
var cube = new THREE.Mesh(cubeGeometry, material);
scene.add(cube);

// render loop
camera.position.z = 3;
function render() {
  requestAnimationFrame(render);

  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;

  renderer.render(scene, camera);
}
render();
