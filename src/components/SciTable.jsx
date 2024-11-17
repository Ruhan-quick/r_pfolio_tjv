/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Inditrion Dradnon (https://sketchfab.com/dradnon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-computer-desk-console-28c67457f2ef4973a0bbc8b667bb183f
Title: Sci-Fi Computer Desk Console
*/

import { useGLTF } from '@react-three/drei'

const SciTable = (props)=> {
    const { nodes, materials } = useGLTF('/models/sci-fi_computer_desk_console.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[-39.769, 2.09, -28.414]}
                        rotation={[-1.682, -0.056, 0.342]}
                        scale={[-0.245, 0.1, 0.139]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.MaterialFBXASC032FBXASC0352142146907.geometry}
                            material={materials.MaterialFBXASC032FBXASC0352142146907}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.MaterialFBXASC032FBXASC03511186.geometry}
                            material={materials.MaterialFBXASC032FBXASC03511186}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.MaterialFBXASC032FBXASC0352142146802.geometry}
                            material={materials.MaterialFBXASC032FBXASC0352142146802}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/sci-fi_computer_desk_console.glb')

export default SciTable;