import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { BufferAttribute } from "three";

/**
 * Debug
 */
const debug = new dat.GUI();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

const doorTexture = {
  alpha: textureLoader.load("/textures/door/alpha.jpg"),
  ambientOcclusion: textureLoader.load("/textures/door/ambientOcclusion.jpg"),
  color: textureLoader.load("/textures/door/color.jpg"),
  height: textureLoader.load("/textures/door/height.jpg"),
  metalness: textureLoader.load("/textures/door/metalness.jpg"),
  normal: textureLoader.load("/textures/door/normal.jpg"),
  roughness: textureLoader.load("/textures/door/roughness.jpg"),
};
const gradientsTexture = {
  3: textureLoader.load("/textures/gradients/3.jpg"),
  5: textureLoader.load("/textures/gradients/5.jpg"),
};
gradientsTexture[3].minFilter = THREE.NearestFilter;
gradientsTexture[3].magFilter = THREE.NearestFilter;
gradientsTexture[3].generateMipmaps = false;

const matcapsTexture = {
  1: textureLoader.load("/textures/matcaps/1.png"),
  2: textureLoader.load("/textures/matcaps/2.png"),
  3: textureLoader.load("/textures/matcaps/3.png"),
  4: textureLoader.load("/textures/matcaps/4.png"),
  5: textureLoader.load("/textures/matcaps/5.png"),
  6: textureLoader.load("/textures/matcaps/6.png"),
  7: textureLoader.load("/textures/matcaps/7.png"),
  8: textureLoader.load("/textures/matcaps/8.png"),
};

const environmentMapTexture = cubeTextureLoader.load([
  "/textures/environmentMaps/0/px.jpg",
  "/textures/environmentMaps/0/nx.jpg",
  "/textures/environmentMaps/0/py.jpg",
  "/textures/environmentMaps/0/ny.jpg",
  "/textures/environmentMaps/0/pz.jpg",
  "/textures/environmentMaps/0/nz.jpg",
]);

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// const material = new THREE.MeshBasicMaterial();
// material.map = doorTexture.color;
// material.opacity = 0.5;
// material.transparent = true;
// material.alphaMap = doorTexture.alpha;
// material.side = THREE.DoubleSide;

// const material = new THREE.MeshNormalMaterial();
// material.wireframe = true;
// material.flatShading = true;

// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcapsTexture[8];

// const material = new THREE.MeshDepthMaterial();

// const material = new THREE.MeshLambertMaterial();

// const material = new THREE.MeshPhongMaterial();
// material.shininess = 100;
// material.specular = new THREE.Color(0x1188ff);

// const material = new THREE.MeshToonMaterial();
// material.gradientMap = gradientsTexture[3];

// material.map = doorTexture.color;
// material.aoMap = doorTexture.ambientOcclusion;
// material.aoMapIntensity = 1;
// material.displacementMap = doorTexture.height;
// material.displacementScale = 0.05;
// material.metalnessMap = doorTexture.metalness;
// material.roughnessMap = doorTexture.roughness;
// material.normalMap = doorTexture.normal;
// material.normalScale.set(0.5, 0.5);
// material.alphaMap = doorTexture.alpha;
// material.transparent = true;

const material = new THREE.MeshStandardMaterial();
material.metalness = 0.7;
material.roughness = 0.2;
material.envMap = environmentMapTexture;

/**
 * Debug
 */
debug.add(material, "metalness").max(1).min(0).step(0.0001);
debug.add(material, "roughness").max(1).min(0).step(0.0001);
debug.add(material, "aoMapIntensity").max(10).min(0).step(0.0001);
debug.add(material, "displacementScale").max(0.2).min(-0.2).step(0.0001);

const sphere = new THREE.Mesh(
  new THREE.SphereBufferGeometry(0.5, 64, 64),
  material
);
sphere.position.x = -1.5;
sphere.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2)
);

const plane = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(1, 1, 100, 100),
  material
);
plane.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
);

const torus = new THREE.Mesh(
  new THREE.TorusBufferGeometry(0.3, 0.2, 64, 128),
  material
);
torus.position.x = 1.5;
torus.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2)
);

scene.add(sphere, plane, torus);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  sphere.rotation.y = 0.1 * elapsedTime;
  plane.rotation.y = 0.1 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;

  sphere.rotation.x = 0.15 * elapsedTime;
  plane.rotation.x = 0.15 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
