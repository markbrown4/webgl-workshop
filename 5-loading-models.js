
loader = new THREE.ColladaLoader();

loader.load('./models/tha-face-web.dae', function(collada) {
  collada.scene.traverse(function(child) {
    console.log(child.id + ' ' + child.type);
  });
  scene.add(collada.scene);

});

// --

camera.position.set(0, 10, 20);

var light1 = new THREE.DirectionalLight(0xffcccc, .7);
light1.position.set(20,20,20);
scene.add(light1);

var light2 = new THREE.DirectionalLight(0xccccff, 0.5);
light2.position.set(-20,20,20);
scene.add(light2);

function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}
render();

var controls = new THREE.OrbitControls(camera, renderer.domElement);
