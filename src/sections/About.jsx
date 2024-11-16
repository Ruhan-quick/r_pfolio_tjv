import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = ()=>{
        navigator.clipboard.writeText("ruhanquick@gmail.com");
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        }, 2000)
    }
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I&apos;m Ruhan</p>
                            <p className="grid-subtext">With 2 years of experience I have honed my skills in both
                                frontend and backend web applicatons development.</p>
                        </div>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I am specialized in JavaScript/TypeScript wit a focus on React
                                and Next.js ecosystems.</p>

                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe height={326}
                                   width={326}
                                   backgroundColor="rgba(0,0,0,0)"
                                   showAtmosphere
                                   showGraticules
                                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                   labelsData={[{
                                       lat: 40, lng: -100,
                                       text: "I'm here",
                                       color: 'white',
                                       size: 20
                                   }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I do work remotely as well as live</p>
                            <p className="grid-subtext">I&apos;m from Bangladesh, available for remote work
                                opportunities.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>

                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                            My Pashion for coding
                            </p>
                            <p className="grid-subtext">
                                I love problem solving and building things through code. Coding isn&apos;t just my profession it is my passion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2 ">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied? "/assets/tick.svg": "assets/copy.svg"} alt="copy icon"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ruhanquick@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
