
var snowMan = new THREE.Object3D();

var snowMaterial = new THREE.MeshLambertMaterial({ wireframe: false, color: 0xffffff })

var headGeometry = new THREE.SphereGeometry(4, 20, 20);
var bodyGeometry = new THREE.SphereGeometry(8, 20, 20);

var head = new THREE.Mesh(headGeometry, snowMaterial);
var body = new THREE.Mesh(bodyGeometry, snowMaterial);
head.position.y = 5;
body.position.y = -5;

snowMan.add(head);
snowMan.add(body);
scene.add(snowMan);

snowMan.position.x = 0;

// --

camera.position.set(0, 0, 20);

var light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(10,10,10);
scene.add(light1);

var light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(-10,0,5);
scene.add(light2);

renderer.render(scene, camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
