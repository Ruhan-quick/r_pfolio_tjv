import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth:440})
    const isMobile = useMediaQuery({minWidth:440,maxWidth: 768})
    const isTablet = useMediaQuery({maxWidth: 1024, minWidth:768})
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    // const x = useControls(
    //     'Hacker Room', {
    //         positionX:{
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         positionY:{
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         positionZ:{
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationX:{
    //             value: 1,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationY:{
    //             value: 1,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationZ:{
    //             value: 1,
    //             min: -10,
    //             max: 10
    //         },
    //         scale:{
    //             value:1,
    //             min: 0.1,
    //             max: 10
    //         }
    //     }
    // );

    return (
        <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Assalamualaikum, I'm Ruhan <span className="waving-hand">Hi</span> </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>

            </div>

            <div className="w-full h-full absolute inset-0">
                {/*<Leva/>*/}
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader/>}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                            <HackerRoom
                                // scale={0.07}
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                            </group>

                            <ambientLight intensity={1}/>
                        </Suspense>
                    </Canvas>
            </div>
        </section>
    )
}
export default Hero