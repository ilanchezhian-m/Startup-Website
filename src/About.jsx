// 
import About1 from "../src/assets/About1.png"
import About2 from "../src/assets/About2.png"
import frame from "../src/assets/Frame.svg";
import { Bottom } from "./components/Bottom";
import { Footer } from "./components/Footer";

export function About(){
    return(
        <>
        
      
            <div className="text-center">
            <h1 className="text-xs sm:text-2xl mx-3 md:mx-20 pt-10 py-10 ">Empowering Businesses Through Innovation
            </h1>

            <img src={About1} alt="" className="w-full h-auto  "/>

             <h5 className="text-center pt-10">TO KNOW MORE ABOUT</h5>
             <img src={frame} alt="below-icon-image" className="mx-auto pt-2 pb-6" />

                <h1 className="text-xl sm:text-3xl mb-8">
                    ABOUT US
                </h1>

             <div className=" text-sm sm:text-base mx-3  md:mx-20 para-smallcase ">
             <p className="mb-6">
             WE ARE MORE THAN JUST A TECHNOLOGY SOLUTIONS PROVIDER {`– `} WE ARE YOUR PARTNERS IN PROGRESS.  
             </p>
             <p className="mb-6">
             OUR JOURNEY BEGAN WITH A VISION TO EMPOWER BUSINESSES WITH CUTTING-EDGE INNOVATION AND TECHNOLOGY.
             </p>
             <p className="mb-8">
             TODAY, WE ARE PROUD TO BE AT THE FOREFRONT OF THE DIGITAL REVOLUTION, OFFERING A WIDE SPECTRUM OF SERVICES THAT DRIVE SUCCESS FOR OUR CLIENTS.
             </p>
             </div>
             <h1 className=" text-xl sm:text-3xl mb-6">WHY CHOOSE US ?</h1>

                <p className=" para-smallcase text-2xl mb-6 font-bold">
                HOLISTIC SOLUTIONS
                </p>
             <p className=" text-sm sm:text-base   para-smallcase mb-6 mx-3  md:mx-20">
             TAS INNOVATION OFFERS A COMPREHENSIVE SUITE OF SERVICES SPANNING WEBSITE AND APP DEVELOPMENT, DIGITAL MARKETING, DESIGN, IOT, INNOVATIVE TECHNOLOGY, AND GAME DEVELOPMENT, ALL UNDER ONE ROOF. THIS HOLISTIC APPROACH ENSURES SYNERGY ACROSS ALL YOUR DIGITAL ENDEAVORS.
             </p>
                <p className="text-xl sm:text-2xl para-smallcase mb-6 font-bold">
                CUSTOMIZED INNOVATION
                </p>
             <p className="text-sm sm:text-base  para-smallcase mb-6 mx-3  md:mx-20">
             TAS INNOVATION IS DEDICATED TO CRAFTING CUSTOMIZED STRATEGIES AND SOLUTIONS TAILORED TO YOUR SPECIFIC REQUIREMENTS. OUR INNOVATIVE APPROACHES ARE BESPOKE, ADDRESSING YOUR DISTINCTIVE CHALLENGES AND GOALS.
             </p>
                <p className=" text-xl sm:text-2xl para-smallcase mb-6 font-bold">
                PROVEN EXPERTISE
                </p>
             <p className="text-sm sm:text-base  para-smallcase mb-6 mx-3  md:mx-20">
             
            OUR TEAM IS COMPRISED OF SEASONED PROFESSIONALS WITH A TRACK RECORD OF DELIVERING RESULTS. {`WE'VE`} SUCCESSFULLY SERVED A DIVERSE RANGE OF INDUSTRIES AND BUSINESSES, EQUIPPING US WITH THE KNOWLEDGE AND INSIGHT TO NAVIGATE THE COMPLEXITIES OF YOUR UNIQUE DOMAIN.
             </p>
                <p className="text-xl sm:text-2xl para-smallcase mb-6 font-bold">
                RELENTLESS INNOVATION
                </p>
             <p className="text-sm sm:text-base  para-smallcase mb-6 mx-3  md:mx-20">
           
            TAS INNOVATION IS YOUR GATEWAY TO THE LATEST TECHNOLOGICAL ADVANCEMENTS, INCLUDING AI, IOT, AND EMERGING TECHNOLOGIES, ENSURING YOU STAY AT THE FOREFRONT OF INNOVATION.
             </p>
                <p className="text-xl sm:text-2xl para-smallcase mb-6 font-bold">
               
                QUALITY ASSURANCE
                </p>
            <p className="text-sm sm:text-base  para-smallcase mb-10 mx-3  md:mx-20">
            TAS INNOVATION PRIDES ITSELF ON DELIVERING SOLUTIONS THAT ARE NOT JUST FUNCTIONAL BUT OF THE HIGHEST QUALITY. WE ADHERE TO RIGOROUS QUALITY CONTROL PROCESSES TO EXCEED YOUR EXPECTATIONS.
            </p>
                <h1 className="text-xl sm:text-3xl mb-8">
                    OUR MISSION
                </h1>
            <div className="text-sm sm:text-xl para-smallcase mx-3  md:mx-20 mb-8 font-bold">
                <p className="mb-5">EMPOWERING BUSINESSES THROUGH INNOVATION </p>
                <p className="mb-5">UNLEASHING THE FULL POTENTIAL OF DIGITAL POSSIBILITIES</p>
                <p className="mb-5">DEDICATED TO YOUR SUCCESS</p>
                <p className="mb-5">CLIENT-CENTRIC EXCELLENCE</p>
                <p className="mb-5">UNYIELDING COMMITMENT TO QUALITY</p>
                <p className="mb-5">PERFORMANCE-DRIVEN OUTCOMES</p>
            </div>

            <img src={About2} alt="image" className="w-full min-h-fit mb-8"/>

            <h1 className="text-xl sm:text-3xl mb-8">GET IN TOUCH</h1>
                
             </div>
             <Bottom/>
             <Footer/>




        </>
    )
}