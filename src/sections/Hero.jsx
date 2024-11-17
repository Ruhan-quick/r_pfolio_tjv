import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import HackerRoom from "../components/HackerRoom.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
// import HelloDesk from "../components/HelloDesk.jsx";
import SciTable from "../components/SciTable.jsx";
const Hero = () => {
    const isSmall = useMediaQuery({maxWidth:440})
    const isMobile = useMediaQuery({minWidth:440,maxWidth: 768})
    const isTablet = useMediaQuery({maxWidth: 1024, minWidth:768})
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const x = useControls(
        'Hacker Room', {
            positionX:{
                value: 51,
                min: -80,
                max: 80
            },
            positionY:{
                value: -10.8,
                min: -20,
                max: 20
            },
            positionZ:{
                value: 45.0,
                min: -20,
                max: 70
            },
            rotationX:{
                value: 0.04,
                min: -2,
                max: 2
            },
            rotationY:{
                value: -0.32,
                min: -2,
                max: 2
            },
            rotationZ:{
                value: 0.00,
                min: -2,
                max: 2
            },
            scale:{
                value:1.80,
                min: 0.1,
                max: 5
            }
        }
    );
    // border-2 border-blue-500
    return (
        <section className="min-h-screen  w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-28 mt-16 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Assalamualaikum, I&apos;m Ruhan <span className="waving-hand">Hi</span> </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>

            </div>

            <div className="w-full h-full absolute inset-0">
                <Leva/>
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader/>}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                            <HeroCamera isMobile={isMobile}>
                                <SciTable
                                    // scale={0.07}
                                    position={[x.positionX, x.positionY, x.positionZ]}
                                    rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                                    scale={[x.scale,x.scale,x.scale]}
                                />
                                {/*<HelloDesk*/}
                                {/*    position={sizes.deskPosition}*/}
                                {/*    rotation={[0, -Math.PI, 0]}*/}
                                {/*    scale={sizes.deskScale}*/}
                                {/*/>*/}
                            </HeroCamera>
                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>

                            <ambientLight intensity={1}/>
                        </Suspense>
                    </Canvas>
            </div>
            <div className="absolute bottom-7  left-0 right-0 flex justify-center z-10 c-space">
                <a href="#contact" className="w-fit ">
                   <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}
export default Hero
