


import frame from "../src/assets/Frame.svg";
import contact from "../src/assets/contact.svg";
import service1 from "../src/assets/service1.png";
import service2 from "../src/assets/service2.png";
import service3 from "../src/assets/service3.png";
import service4 from "../src/assets/service4.png";
import service5 from "../src/assets/service5.png";
import service6 from "../src/assets/service6.png";
import service7 from "../src/assets/service7.png";
import service8 from "../src/assets/service8.png";
import service9 from "../src/assets/service9.png";
import service10 from "../src/assets/service10.png";
import service11 from "../src/assets/service11.svg";
import service12 from "../src/assets/service12.svg";
import service13 from "../src/assets/service13.svg";
import service14 from "../src/assets/service14.svg";
import service15 from "../src/assets/service15.svg";
import { Bottom } from "./components/Bottom";
import { Footer } from "./components/Footer";






export function Service(){
  
    const handleClick = () => {
      
        // Navigate to the section with smooth scrolling
        const graphicSectionRef = document.getElementById("sendmessage");
        if (graphicSectionRef) {
          graphicSectionRef.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return(
        <>
        {/* <Header/> */}
            <div className=" text-center py-8">
        <h2 className="text-sm mt-28 md:text-xl md:mx-20">Brand Magnet Accelerate: Empowering Marketers,Magnetizing Brands,Propelling Growth</h2>
          </div>
          <img src={service1} alt="image" className="w-full " />
          <h5 className="text-center pt-10">TO KNOW MORE ABOUT</h5>
        <img src={frame} alt="below-icon-image" className="mx-auto pt-2 pb-6" />

        <h1 className="mb-10 text-center md:text-2xl">Your Partner in Digital Excellence</h1>

        <p className="text-center para-smallcase mx-5 md:mx-20 text-base mb-10">
        We Specialize In Delivering Cutting-edge Digital Solutions To Help Your Business Thrive In The Online World. Our Team Of Skilled Professionals Is Dedicated To Providing A Wide Range Of Services That Cater To Your Every Digital Need.
        </p>

        <div className=" flex justify-center">
            <button className="our-services bg-black font-bold text-white para-smallcase text-base px-4 py-2 md:text-2xl mb-10 md:py-7 md:px-16 inline-flex">   
                OUR SERVICES    
            </button>
        </div>
        <div className="relative flex justify-center mb-10">
            <img src={service2} alt="" className="relative" />
            <button onClick={handleClick}> 
            <img src={contact} alt="" className="absolute  h-[30px] md:h-[70px] image--contact " />
            </button>
            
        </div>
        <div className="relative flex justify-center mb-10">
            <img src={service3} alt="" className="relative" />
            <button onClick={handleClick}>
            <img src={contact} alt="" className="absolute  h-[30px] md:h-[70px] image--contact2  " />
            </button>
        </div>
        <div className="relative flex justify-center mb-10">
            <img src={service4} alt="" className="relative" />
            <button onClick={handleClick}>
            <img src={contact} alt="" className="absolute     h-[30px] md:h-[70px] image--contact2" />
            </button>
        </div>
        <div className="relative flex justify-center mb-10">
            <img src={service5} alt="" className="relative" />
            <button onClick={handleClick}>
            <img src={contact} alt="" className="absolute    h-[30px] md:h-[70px]  image--contact2" />
            </button>
        </div>
        <div className="relative flex justify-center mb-10">
            <img src={service6} alt="" className="relative" />
            <button onClick={handleClick}>
            <img src={contact} alt="" className="absolute   h-[30px] md:h-[70px] image--contact "  />
            </button>
        </div>
        <div className="relative flex justify-center mb-10">
            <img src={service7} alt="" className="relative" />
            <button onClick={handleClick}>
            <img src={contact} alt="" className="absolute   h-[30px] md:h-[70px] image--contact2 " />
            </button>
        </div>
        <div className="relative flex justify-center mb-10">
            <img src={service8} alt="" className="relative" />
            <button onClick={handleClick}>
            <img src={contact} alt="" className="absolute    h-[30px] md:h-[70px] image--contact1 " />  </button>
        </div>
        <div className="relative flex justify-center mb-10">
            <img src={service9} alt="" className="relative" />
            <button onClick={handleClick}>
            <img src={contact} alt="" className="absolute     h-[30px] md:h-[70px] image--contact2 " />
            </button>
        </div>

        <img  src={service10} alt="" className="mb-10 h-auto w-screen"/>

        <p className="text-center para-smallcase mx-5 md:mx-20 text-base mb-10">
        We Are Committed To Pushing The Boundaries Of Innovation And Technology To Help Businesses Thrive In The Digital Age. Our Comprehensive Range Of Services Covers Everything You Need To Succeed In {`Today's`} Competitive Landscape.
        </p>
        
        <div className="flex-row justify-center text-center">
            < h1 className="mb-10 text-center md:text-2xl">
            WHY TAS INNOVATION ?
            </h1>
                <div className="flex justify-center">
                <img  src={service11} alt="image" className="mb-5"/>
                </div>
            <h2 className="mb-5">EXPERTIZE</h2>
            <p className="para-smallcase mb-5">
                Our Team Of Experienced Professionals Is Dedicated To Delivering Top-notch Solution 
            </p>

                <div className="flex justify-center">
                <img  src={service12} alt="image" className="mb-5"/>
                </div>
            <h2 className="mb-5">QUALITY</h2>
            <p className="para-smallcase mb-5">
                Ensuring Your Business Stays Ahead In The Digital World.
             </p>

                <div className="flex justify-center">
                <img  src={service13} alt="image" className="mb-5"/>
                </div>
            <h2 className="mb-5">CLIENT-CENTRIC</h2>
            <p className="para-smallcase mb-5">
            Your Success Is Our Priority, And We Work Closely With You To Achieve Your Goals.
            </p>

                <div className="flex justify-center">
                <img  src={service14} alt="image" className="mb-5"/>
                </div>
            <h2 className="mb-5">INNOVATION</h2>
            <p className="para-smallcase mb-5">
            We Take Pride In Our Commitment To Delivering High-quality Solutions.
            </p>

                <div className="flex justify-center">
                <img  src={service15} alt="image" className="mb-5"/>
                </div>
                <h2 className="mb-5">RESULTS DRIVEN</h2>
            <p className="para-smallcase mb-10">
            Our Services Are Designed To Deliver Tangible Results And Roi For Your Business.
            </p>

            <div id='sendmessage'>
                    <Bottom/>
            </div>
                    <Footer/>

        </div>
        </>
    )
}