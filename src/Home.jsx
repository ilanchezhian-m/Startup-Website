import { NavLink } from "react-router-dom";


import image from "../src/assets/imagehand.png";
import frame from "../src/assets/Frame.svg";
import img1 from "../src/assets/image1.png";
import img3 from "../src/assets/image3.png";
import img4 from "../src/assets/image4.png";
import img6 from "../src/assets/image6.png";
import img7 from "../src/assets/image7.png";
import img8 from "../src/assets/image8.png";
import img9 from "../src/assets/image9.png";
import insta from "../src/assets/instaimage.svg";
import x from "../src/assets/ximage.svg";
import youtube from "../src/assets/youtube.svg";
import { Bottom } from "./components/Bottom";
import { Footer } from "./components/Footer";


export function Home() {
  
  return (
    <>
    <div>
      <main>
      <div className=" text-center py-6 text-3xl">
        <h2 className="text-sm mt-10 md:text-2xl">{`"Sustainable`} AI Ventures: Crafting <br />Eco-Friendly Innovations through{` Technology"`}</h2>
      </div>
      <img src={image} alt="first image" className="w-full h-auto max-h-screen" />
      <h5 className="text-center pt-10">TO KNOW MORE ABOUT</h5>
      <img src={frame} alt="below-icon-image" className="mx-auto pt-2 pb-6" />

{/* images section */}

        <div className=" relative mb-10 flex md:mx-20">
                <div className="">
                      <img src={img1} alt="image1" className="h-[350px] md:h-fit w-[250px] md:w-fit" />
                </div>
               <div className="one text-center absolute left-1/3 bottom-1/4">
                      <p className="md:px-20 md:pt-20 para-smallcase text-xs md:text-base shrink-1 py-5">
                        EMBRACING AI&IOT,{`WE’RE`} CREATING SMART ECOLOGY SOLUTIONS FOR A PLANET THAT BREATHES CLEANER AND LIVE GREENER
                    </p>
                    <NavLink  to="explore1"  onClick={() => {window.scrollTo(0, 0); }} >
                    <button className="text-xs mb-5  md:text-sm explore-btn px-4 md:px-10 text-white  py-2 md:py-4 rounded-sm mt-5 ">
                      EXPLORE
                      </button>
                    </NavLink>
              </div>
        </div>

        <div className="relative mb-10 md:mx-20 flex justify-end">
            <div className="two text-center absolute right-1/4 bottom-1/3 ">
                  <p className="md:px-20 md:pt-20 para-smallcase text-xs md:text-base shrink-1 py-5">
                    SMART TECHNOLOGIES UNLEASHED SHAPING A SUSTAINABLE FUTURE THROUGH POWER & IOT
                  </p>
                  <NavLink  to="explore2"  onClick={() => {window.scrollTo(0, 0); }} >
                    <button className="text-xs mb-5  md:text-sm explore-btn px-4 md:px-10 text-white  py-2 md:py-4 rounded-sm mt-5 ">
                      EXPLORE
                      </button>
                    </NavLink>
            </div>
            <div className="">
                  <img src={img6} alt="image1" className=" h-[350px] md:h-fit "  />
            </div>
        </div>

        <div className=" relative mb-10 flex md:mx-20">
                <div className="">
                      <img src={img7} alt="image1" className="h-[350px] md:h-fit" />
                </div>
               <div className="one text-center absolute left-1/4 bottom-1/3">
                      <p className="md:px-20 md:pt-20 para-smallcase text-xs md:text-base shrink-1 py-5">BUSINESS EVOLUTION NEXUS: 
                       LEADING GLOBAL GROWTH THROUGH TRANSFORMATIVE IDEAS
                    </p>
                    <NavLink  to="explore3"  onClick={() => {window.scrollTo(0, 0); }} >
                    <button className="text-xs mb-5  md:text-sm explore-btn px-4 md:px-10 text-white  py-2 md:py-4 rounded-sm mt-5 ">
                      EXPLORE
                      </button>
                    </NavLink>
              </div>
        </div>

        <div className="relative mb-10 md:mx-20 flex justify-end">
            <div className="two text-center absolute right-1/3 bottom-1/3">
                  <p className="md:px-20 md:pt-20 para-smallcase text-xs md:text-base shrink-1 py-5 ">
                    SMART TECHNOLOGIES UNLEASHED; SHAPING A SUSTAINABLE FUTURE THROUGH POWER & IOT
                  </p>
                  <button className="text-xs mb-5 md:text-sm explore-btn px-4 md:px-10 text-white   py-2 md:py-4 rounded-sm mt-5 "> 
                  <NavLink  to="explore4" onClick={() => {window.scrollTo(0, 0); }} >EXPLORE</NavLink>
                  </button>
            </div>
            <div className="">
                  <img src={img8} alt="image1" className=" h-[350px] md:h-fit w-[250px] md:w-fit" />
            </div>
        </div>

        <div className=" relative mb-10 flex md:mx-20">
                <div className="">
                      <img src={img9} alt="image1" className="h-[350px] md:h-fit" />
                </div>
               <div className="one text-center absolute left-1/4 bottom-1/4">
                      <p className="md:px-20 md:pt-20 para-smallcase text-xs md:text-base shrink-1 py-5">BRAND MAGNET ACCELERATE: EMPOWERING MARKETERS,MAGNETIZING BRANDS PROPELLING GROWTH
                    </p>
                    <NavLink  to="explore5"  onClick={() => {window.scrollTo(0, 0); }} >
                    <button className="text-xs mb-5  md:text-sm explore-btn px-4 md:px-10 text-white  py-2 md:py-4 rounded-sm mt-5 ">
                      EXPLORE
                      </button>
                    </NavLink>
              </div>
        </div>

<div className="lg:flex">
      <div className="text-center bg-black text-white py-10 mb-3 lg:mx-1 card">
        <h2 className="text-xl md:text-3xl py-5">OUR PURPOSE</h2>
        <p className="px-10 text-normal md:text-xl para-smallcase">
          “PIONEERING AI-DRIVEN INNOVATIONS FOR AN ECO-FRIENDLY WORLD,POWERING
          GLOBAL GROWTH,EDUCATION,AND BRANDING & EXCELLENCE”
        </p>
      </div>

      <div className="text-center bg-black text-white py-10 mb-3 lg:mx-1 card">
        <h2 className="text-xl md:text-3xl py-5">CARRERS</h2>
        <p className="px-10 text-normal md:text-xl para-smallcase">
          “JOIN US IN SHAPING A SUSTAINABLE FUTURE.BE PART OF OUR DIVERSE TEAM
          DRIVING AI INNOVATIONS,GLOBAL GROWTH,EDUCATION AND BRANDING
          EXCELLENCE”
        </p>
      </div>

      
      <div className="text-center bg-black text-white py-10 mb-3 lg:mx-1 card">
        <h2 className="text-xl md:text-3xl py-5">SERVICES </h2>
        <p className="text-normal px-10 md:text-xl para-smallcase">
          “SMART ECOLOGY SOLUTIONS,SUSTAINABLE AI VENTURES,POWER,IOT,TECH &
          INNOVATION,DIGITAL MARKETING & BRANDING,GLOBAL BUSINESS GROWTH”
        </p>
      </div>
</div>
      
      <div className="text-center bg-black text-white py-10 mb-5 cards">
        <h2 className="text-normal md:text-3xl py-5">ABOUT US</h2>
        <p className="text-normal px-10 md:text-2xl para-smallcase">
          “WE HARNESS AI’S POTENTIAL TO CREATE ECO-FRIENDLY SOLUTIONS,FOSTER
          INNOVATION AND ACCELERATE GLOBAL BUSINESS,EDUCATION AND BRANDING
          SUCCESS”
        </p>
      </div>
      
      <div className="text-center bg-black text-white py-10 mb-5 cards">
        <h2 className=" text-sm md:text-3xl py-5">OUR TESTIMONIALS</h2>
        <div className="flex justify-evenly">
        <h3 className="text-sm md:text-2xl">10+ <br /> core Projects</h3>
        <h3 className="text-sm md:text-2xl">5+ <br />Partners</h3>
        <h3 className="text-sm md:text-2xl">20+ <br /> Customers</h3>
        </div>
      </div>

      {/* telegram link need to be added */}
      <div>
     <a href="https://t.me/tasinnovations" rel="noreferrer"  >
     <img src={img3} alt="telegramimage" className="flex w-screen mb-10 " /></a>
     </div>
     
      
      <div className="relative flex mb-10">
             <img src={img4} alt="lfe at TAS" className=" w-screen " />
              <h1 className="absolute text-sm  top-1/2 left-2 md:left-10  md:text-3xl text-white flex items-center justify-start ">
              #LifeAtTAS
              </h1>
              <div className="flex absolute right-10 top-1/2 ">
                  <a href="https://instagram.com/tas.innovation?igshid=OGQ5ZDc2ODk2ZA==" rel="noreferrer" >
                      <img src={insta} alt="" className=" md:mx-10 h-[20px] md:h-fit" />
                  </a>
                  <a href="https://twitter.com/TasInnovations?t=REgrY43arLI1-Z0bYRlQGw&s=09" rel="noreferrer" >
                      <img src={x} alt="" className="ml-5 md:mx-10 h-[20px] md:h-fit" />
                    </a>
                  <a href="https://youtube.com/@tasinnovation6973" rel="noreferrer" >
                      <img src={youtube} alt="" className=" ml-5 md:ml-10 h-[20px] md:h-fit" />
                  </a>
               </div>
       </div>
      </main>
      <Bottom/>
      <Footer/>
   
      </div>

  


    </>
  );
}
