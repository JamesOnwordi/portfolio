import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";

const CharacterAnimation = () => {
  const modelRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false); // State to track if the model is loaded

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/path/to/your/model.gltf", (gltf) => {
      modelRef.current = gltf.scene;
      setIsLoaded(true); // Set loaded state to true
    });
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Optional: add rotation for effect
    }
  });

  return (
    <>
      {isLoaded ? <primitive object={modelRef.current} /> : null}{" "}
      {/* Render the model only if loaded */}
    </>
  );
};

const CharacterCanvas = () => {
  return (
    <Canvas
      style={{ height: "400px" }}
      camera={{ position: [0, 1, 3], fov: 50 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CharacterAnimation />
    </Canvas>
  );
};

export default CharacterCanvas;
