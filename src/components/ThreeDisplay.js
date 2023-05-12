import "./ThreeDisplay.css"; 

import BackgroundMesh from "./BackgroundMesh";

import { Canvas, extend } from "@react-three/fiber"; 
import { OrbitControls } from "@react-three/drei"; 

export default function ThreeDisplay (props) {


    return (
        <div className="canvasContainer">
          <Canvas 
            scene={{
                background: {
                    color: "#10aae5", 
                }, 
            }} 
            // orthographic={true} 
            camera={{
                fov: 45, 
                aspect: window.self.innerWidth / window.self.innerHeight, 
                position: [0, 0, 5], 
            }}
          >

            {/* <color attach="background" args={["black"]}></color> */}
            <ambientLight intensity={0.1}></ambientLight>
            <pointLight color={"#0xffffff"} position={[0, 10, 10]} /> 
            <BackgroundMesh coordinates={[0, 0, 0]} />
            <OrbitControls />
          </Canvas>
        </div>
    )
}

//  createRoot(document.getElementById('root')).render(<ThreeDisplay />)