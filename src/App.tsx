import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

function App() {
  return (
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
          <OrbitControls />
          <mesh>
              <boxGeometry />
              <meshNormalMaterial />
          </mesh>
      </Canvas>
  );
}

export default App;
