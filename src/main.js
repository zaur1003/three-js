import * as THREE from "three";

import C from "./constants";
import images from "./images";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
// Ceiling
const ceilingGeometry = new THREE.PlaneGeometry(
  C.GALLERY.WIDTH,
  C.GALLERY.DEPTH
);
const ceilingMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceiling.position.y = C.GALLERY.HEIGHT / 2; // Place it at the top of the gallery
ceiling.rotation.x = Math.PI / 2; // Rotate so it’s horizontal
scene.add(ceiling);

// Floor
const floorGeometry = new THREE.PlaneGeometry(C.GALLERY.WIDTH, C.GALLERY.DEPTH);
const floorMaterial = new THREE.MeshBasicMaterial({
  color: 0x4b2e2b,
  side: THREE.DoubleSide,
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
scene.add(floor);

// Walls
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xd3d3d3 });
const createWall = (width, height) =>
  new THREE.Mesh(new THREE.PlaneGeometry(width, height), wallMaterial);

const backWall = createWall(C.GALLERY.WIDTH, C.GALLERY.HEIGHT);
backWall.position.z = -C.GALLERY.DEPTH / 2;
scene.add(backWall);

const frontWall = createWall(C.GALLERY.WIDTH, C.GALLERY.HEIGHT);
frontWall.position.z = C.GALLERY.DEPTH / 2;
frontWall.rotation.y = Math.PI;
scene.add(frontWall);

const leftWall = createWall(C.GALLERY.DEPTH, C.GALLERY.HEIGHT);
leftWall.position.x = -C.GALLERY.WIDTH / 2;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

const rightWall = createWall(C.GALLERY.DEPTH, C.GALLERY.HEIGHT);
rightWall.position.x = C.GALLERY.WIDTH / 2;
rightWall.rotation.y = -Math.PI / 2;
scene.add(rightWall);

const addPicture = (url, width, height, pos, rotationY, framePos) => {
  const frameMaterial = new THREE.MeshBasicMaterial({ color: 0x6b6565 });
  const frameGeometry = new THREE.PlaneGeometry(width + 0.2, height + 0.2);
  const frame = new THREE.Mesh(frameGeometry, frameMaterial);
  frame.position.set(framePos.x, framePos.y, framePos.z);
  frame.rotation.y = rotationY;
  scene.add(frame);

  const pictureTexture = textureLoader.load(url);
  const pictureMaterial = new THREE.MeshBasicMaterial({ map: pictureTexture });
  const pictureGeometry = new THREE.PlaneGeometry(width, height);
  const picture = new THREE.Mesh(pictureGeometry, pictureMaterial);
  picture.position.set(pos.x, pos.y, pos.z);
  picture.rotation.y = rotationY;
  scene.add(picture);
};

images.forEach((image) => {
  addPicture(
    image.src,
    image.width,
    image.height,
    image.pos,
    image.rotationY,
    image.framePos
  );
});

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, C.GALLERY.HEIGHT / 2, 0);
scene.add(pointLight);

camera.position.set(0, 2, 10);

let moveForward = false,
  moveBackward = false,
  rotateLeft = false,
  rotateRight = false;

// Key controls for movement and turning
document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      moveForward = true;
      break;
    case "ArrowDown":
    case "KeyS":
      moveBackward = true;
      break;
    case "ArrowLeft":
    case "KeyA":
      rotateLeft = true;
      break;
    case "ArrowRight":
    case "KeyD":
      rotateRight = true;
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      moveForward = false;
      break;
    case "ArrowDown":
    case "KeyS":
      moveBackward = false;
      break;
    case "ArrowLeft":
    case "KeyA":
      rotateLeft = false;
      break;
    case "ArrowRight":
    case "KeyD":
      rotateRight = false;
      break;
  }
});

// Movement and rotation parameters
const movementSpeed = 0.1;
const rotationSpeed = 0.03;

function animate() {
  requestAnimationFrame(animate);

  if (moveForward) {
    camera.position.z -= Math.cos(camera.rotation.y) * movementSpeed;
    camera.position.x -= Math.sin(camera.rotation.y) * movementSpeed;
  }
  if (moveBackward) {
    camera.position.z += Math.cos(camera.rotation.y) * movementSpeed;
    camera.position.x += Math.sin(camera.rotation.y) * movementSpeed;
  }

  if (rotateLeft) camera.rotation.y += rotationSpeed;
  if (rotateRight) camera.rotation.y -= rotationSpeed;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
