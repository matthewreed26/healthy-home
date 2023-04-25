import './Three.css';

import { useState, useEffect } from 'react';
import * as THREE from 'three';

function CanvasCube() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [cubeRotation, setCubeRotation] = useState(0);

  function animate() {
    setCubeRotation(prevRotation => prevRotation + 0.01);
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    if (canvas) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas });

      camera.position.z = 5;

      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);

      scene.add(cube);

      animate();

      const render = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [canvas]);

  return <canvas ref={el => setCanvas(el)} />;
}

export default CanvasCube;
