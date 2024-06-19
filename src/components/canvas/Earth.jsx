import React, { Suspense, useRef , useEffect} from "react";
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations} from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CanvasLoader from "../Loader";

const Me = () => {
  const earth = useLoader(GLTFLoader, "./planet/mewaving.glb",);

 const ref = useRef();
  const { scene, animations } = useGLTF("./planet/mewaving.glb", true);

  const { actions, mixer } = useAnimations(animations, ref);

  
  // useEffect(() => {
  //   actions[actionName]
  //     .reset()
  //     .setEffectiveTimeScale(1)
  //     .setEffectiveWeight(1)
  //     .fadeIn(0.5)
  //     .play();
  // }, [actions, actionName, prevActionName])

  return (
    <primitive ref={ref} object={scene} scale={1.5} position-y={0} rotation-y={0} />
  );
};



const MeCanvas = () => {
 
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <pointLight position={[0, 0, 12]} intensity={1}/>
        <pointLight position={[20, 270, 12]} intensity={1}/>
        <OrbitControls
          
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Me />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MeCanvas;
