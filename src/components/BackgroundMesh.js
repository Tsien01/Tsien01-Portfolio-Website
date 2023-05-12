// import { useRef, useEffect } from "react"
// import { useFrame } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber";
import * as THREE from "three"; 


export default function BackgroundMesh ({ coordinates }) {
    const imageMap = useLoader(THREE.TextureLoader, "Cosmic_Cliffs_in_Carina_NIRCam.png")

    return (
        <mesh position={coordinates} 
        // ref={ref}
        >
            {/* <sphereGeometry args={[ 2, 64, 64]} /> */}
            <meshStandardMaterial map={imageMap} />
        </mesh>
    )
}