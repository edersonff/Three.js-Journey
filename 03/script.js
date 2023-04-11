const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 0.5;
scene.add(camera);

// Render
const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

const body = document.querySelector("body");
function createLink(href, i) {
  const link = document.createElement("a");
  link.href = "https://threejs-journey.com/assets/lessons/" + href;
  link.text = i + " link";
  body.appendChild(link);
}
/**
 * 
15	Lights	sneak peek	42mn
16	Shadows	sneak peek	1h 01mn
17	Haunted House	sneak peek	1h 15mn
18	Particles	sneak peek	49mn
19	Galaxy Generator	sneak peek	1h 08mn
20	Scroll based animation	sneak peek	1h 23mn

21	Physics	sneak peek	1h 57mn
22	Imported models	sneak peek	1h 07mn
23	Raycaster and Mouse Events	sneak peek	1h 07mn
24	Custom models with Blender	sneak peek	1h 59mn
25	Realistic render	sneak peek	1h 16mn
26	Code structuring for bigger projects	sneak peek	3h 19mn

27	Shaders	sneak peek	2h 17mn
28	Shader patterns	sneak peek	1h 49mn
29	Raging sea	sneak peek	1h 15mn
30	Animated galaxy	sneak peek	1h 14mn
31	Modified materials	sneak peek	51mn

32	Post-processing	sneak peek	1h 36mn
33	Performance tips	sneak peek	1h 12mn
34	Intro and loading progress	sneak peek	49mn
35	Mixing HTML and WebGL	sneak peek	58mn

36	Creating a scene in Blender	sneak peek	2h 04mn
37	Baking and exporting the scene	sneak peek	2h 11mn
38	Importing and optimizing the scene	sneak peek	48mn
39	Adding details to the scene	sneak peek	1h 34mn

40	What are React and React Three Fiber	free new	25mn
41	First React Application	sneak peek new	4h 23mn
42	First R3F Application	sneak peek new	2h 05mn
43	Drei	sneak peek new	1h 14mn
44	Debug	sneak peek new	51mn
45	Environment and Staging	sneak peek new	2h 03mn
46	Load models	sneak peek new	1h 29mn
47	3D Text	sneak peek new	59mn
48	Portal Scene	sneak peek new	41mn
49	Mouse Events	sneak peek new	47mn
50	Post-processing	sneak peek new	2h 04mn
51	Fun and Simple Portfolio	sneak peek new	51mn
52	Physics	sneak peek new	2h 10mn
53	Create a game	sneak peek new	4h 10mn

 */
[
  "15/15-lights.zip",
  "16/16-shadows.zip",
  "17/17-haunted-house.zip",
  "18/18-particles.zip",
  "19/19-galaxy-generator.zip",
  "20/20-scroll-based-animation.zip",
  "21/21-physics.zip",
  "22/22-imported-models.zip",
  "23/23-raycaster-and-mouse-events.zip",
  "24/24-custom-models-with-blender.zip",
  "25/25-realistic-render.zip",
  "26/26-code-structuring-for-bigger-projects.zip",
  "27/27-shaders.zip",
  "28/28-shader-patterns.zip",
  "29/29-raging-sea.zip",
  "30/30-animated-galaxy.zip",
  "31/31-modified-materials.zip",
  "32/32-post-processing.zip",
  "33/33-performance-tips.zip",
  "34/34-intro-and-loading-progress.zip",
  "35/35-mixing-html-and-webgl.zip",
  "36/36-creating-a-scene-in-blender.zip",
  "37/37-baking-and-exporting-the-scene.zip",
  "38/38-importing-and-optimizing-the-scene.zip",
  "39/39-adding-details-to-the-scene.zip",
  "40/40-what-are-react-and-react-three-fiber.zip",
  "41/41-first-react-application.zip",
  "42/42-first-r3f-application.zip",
  "43/43-drei.zip",
  "44/44-debug.zip",
  "45/45-environment-and-staging.zip",
  "46/46-load-models.zip",
  "47/47-3d-text.zip",
  "48/48-portal-scene.zip",
  "49/49-mouse-events.zip",
  "50/50-post-processing.zip",
  "51/51-fun-and-simple-portfolio.zip",
  "52/52-physics.zip",
  "53/53-create-a-game.zip",
].map((href, i) => {
  createLink(href, i);
});
