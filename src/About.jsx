// import { Header } from "./components/Header";
import About1 from "../src/assets/About1.png"
import About2 from "../src/assets/About2.png"
import frame from "../src/assets/Frame.svg";
import { Bottom } from "./components/Bottom";
import { Footer } from "./components/Footer";

export function About(){
    return(
        <>
        
        {/* <Header/> */}
            <div className="text-center">
            <h1 className="text-xs  sm:text-2xl my-10 mx-3 md:mx-20 ">Empowering Businesses Through Innovation
            </h1>

            <img src={About1} alt="" className="w-full h-auto "/>

             <h5 className="text-center pt-10">TO KNOW MORE ABOUT</h5>
             <img src={frame} alt="below-icon-image" className="mx-auto pt-2 pb-6" />

                <h1 className="text-xl sm:text-3xl mb-8">
                    ABOUT US
                </h1>

             <div className=" text-sm sm:text-xl mx-3 md:text-left md:mx-20 para">
             <p className="mb-6">
             we are more than just a technology solutions provider {`– `} we are your partners in progress.  
             </p>
             <p className="mb-6">
             Our journey began with a vision to empower businesses with cutting-edge innovation and technology.
             </p>
             <p className="mb-8">
             Today, we are proud to be at the forefront of the digital revolution, offering a wide spectrum of services that drive success for our clients.
             </p>
             </div>
             <h1 className=" text-xl sm:text-3xl mb-6">WHY CHOOSE US ?</h1>

                <p className=" para text-2xl mb-6 font-bold">
                    Holistic Solutions
                </p>
             <p className=" text-sm sm:text-xl   para mb-6 mx-3 md:text-left md:mx-20">
             TAS INNOVATION offers a comprehensive suite of services spanning website and app development, digital marketing, design, IoT, innovative technology, and game development, all under one roof. This holistic approach ensures synergy across all your digital endeavors.
             </p>
                <p className="text-xl sm:text-2xl para mb-6 font-bold">
                Customized Innovation
                </p>
             <p className="text-sm sm:text-xl  para mb-6 mx-3 md:text-left md:mx-20">
             TAS INNOVATION is dedicated to crafting customized strategies and solutions tailored to your specific requirements. Our innovative approaches are bespoke, addressing your distinctive challenges and goals.
             </p>
                <p className=" text-xl sm:text-2xl para mb-6 font-bold">
                Proven Expertise
                </p>
             <p className="text-sm sm:text-xl  para mb-6 mx-3 md:text-left md:mx-20">
             Our team is comprised of seasoned professionals with a track record of delivering results. {`We've`} successfully served a diverse range of industries and businesses, equipping us with the knowledge and insight to navigate the complexities of your unique domain.
             </p>
                <p className="text-xl sm:text-2xl para mb-6 font-bold">
                Relentless Innovation
                </p>
             <p className="text-sm sm:text-xl  para mb-6 mx-3 md:text-left md:mx-20">
             TAS INNOVATION is your gateway to the latest technological advancements, including AI, IoT, and emerging technologies, ensuring you stay at the forefront of innovation.
             </p>
                <p className="text-xl sm:text-2xl para mb-6 font-bold">
                Quality Assurance
                </p>
            <p className="text-sm sm:text-xl  para mb-10 mx-3 md:text-left md:mx-20">
            TAS INNOVATION prides itself on delivering solutions that are not just functional but of the highest quality. We adhere to rigorous quality control processes to exceed your expectations.
            </p>
                <h1 className="text-xl sm:text-3xl mb-8">
                    OUR MISSION
                </h1>
            <div className="text-sm sm:text-xl para mx-3  md:mx-20 mb-8 font-bold">
                <p className="mb-5">Empowering Businesses Through Innovation </p>
                <p className="mb-5">Unleashing the Full Potential of Digital Possibilities</p>
                <p className="mb-5">Dedicated to Your Success</p>
                <p className="mb-5">Client-Centric Excellence</p>
                <p className="mb-5">Unyielding Commitment to Quality</p>
                <p className="mb-5">Performance-Driven Outcomes</p>
            </div>

            <img src={About2} alt="image" className="w-full min-h-fit mb-8"/>

            <h1 className="text-xl sm:text-3xl mb-8">GET IN TOUCH</h1>
                
             </div>
             <Bottom/>
             <Footer/>




        </>
    )
}