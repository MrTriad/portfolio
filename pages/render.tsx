
import { useEffect, useRef } from 'react';

import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/SceneInit';

function render() {

	const animationMixer = useRef(null);
	

	useEffect(() => {
		const test = new SceneInit('myThreeJsCanvas');
		test.initialize();
		test.animate();

		// const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
		// const boxMaterial = new THREE.MeshNormalMaterial();
		// const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
		// test.scene.add(boxMesh);

		let loadedModel: GLTF;
		const glftLoader = new GLTFLoader();
		glftLoader.load('./3dModels/deskw.glb', (gltfScene) => {	//Modello koboldo piu scrivania
			const model = gltfScene.scene;
			const animations = gltfScene.animations;

			

			animationMixer.current = new THREE.AnimationMixer(model);
			//console.log(animations);
			/*
					Array(5) [ {…}, {…}, {…}, {…}, {…} ]
					​
					0: Object { name: "Idle", duration: 13.333333015441895, blendMode: 2500, … }
					​
					1: Object { name: "Shock", duration: 6.666666507720947, blendMode: 2500, … }
					​
					2: Object { name: "Tpose", duration: 0, blendMode: 2500, … }
					​
					3: Object { name: "Welcome", duration: 3.3333332538604736, blendMode: 2500, … }
					​
					4: Object { name: "ChairAction", duration: 0, blendMode: 2500, … }
			*/

			let animationIndex = 3; //Imposto Welcome
			let currentAction;
			animationMixer.current.addEventListener('finished', playNextAnimation);
			currentAction = animationMixer.current.clipAction(animations[animationIndex]); //Imposta il saluto come prima
			currentAction.setLoop(THREE.LoopPingPong, 2);
			currentAction.play();

			function playNextAnimation() {
					currentAction.reset();
					(animationIndex == 0) ? animationIndex = 1 : animationIndex = 0; //Ciclo tra idle and shock
					console.log(animationIndex);
					currentAction = animationMixer.current.clipAction(animations[animationIndex]); // Change this to the index of the next animation
					
					currentAction.setLoop(THREE.LoopRepeat, 1);
					currentAction.play();
				
			}

			loadedModel = gltfScene;
			// console.log(loadedModel);

			gltfScene.scene.rotation.y = Math.PI / 8;
			gltfScene.scene.position.y = 3;
			gltfScene.scene.scale.set(10, 10, 10);
			if (test.scene) {
				test.scene.add(gltfScene.scene);
			}
		});



		const animate = () => {
			requestAnimationFrame(animate);
			if (animationMixer.current) {
				animationMixer.current.update(0.016); // This updates the animation
			}
			test.renderer.render(test.scene, test.camera);
		};

		animate();

	}, []);


	return (
		<div>
			<canvas id="myThreeJsCanvas" />
		</div>
	);
}



export default render;