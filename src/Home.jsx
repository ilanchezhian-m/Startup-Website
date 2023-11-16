import { Header } from "./components/Header";
import image from "../src/assets/imagehand.png";
import frame from "../src/assets/Frame.svg";
import img1 from "../src/assets/image1.png";
// import img2 from "../src/assets/image2.png";
import img3 from "../src/assets/image3.png";
import img4 from "../src/assets/image4.png";
import { Bottom } from "./components/Bottom";
import { Footer } from "./components/Footer";

// import { Cookie } from './support/Cookie'
// import { Privatepolicy } from './support/Privatepolicy'
// import { Terms } from './support/Terms'


export function Home() {
  return (
    <>
      <Header />
      <div className=" text-center py-6 text-3xl">
        <h2 className="text-sm md:text-base">{`"Sustainable`} AI Ventures: Crafting Eco-Friendly Innovations through{` Technology"`}</h2>
      </div>
      <img src={image} alt="first image" className="w-full h-auto max-h-screen" />
      <h5 className="text-center pt-10">TO KNOW MORE ABOUT</h5>
      <img src={frame} alt="below-icon-image" className="mx-auto pt-2 pb-6" />

      <div className="wrapper">
  <div className="one">
    <img src={img1} alt="image1" className="" />
    </div>
  <div className="two text-center ">
    <p className="md:px-20 md:pt-20 para text-xs md:text-base shrink-1">EMBRACING AI&IOT,WE’RE CREATING SMART ECOLOGY SOLUTIONS FOR A PLANET THAT BREATHES CLEANER AND LIVE GREENER
  </p>
  <button className="text-xs mb-5  md:text-sm explore-btn px-10 text-white font-light py-4 rounded-sm mt-5 ">EXPLORE</button>
  </div>
</div>

      <br />
      <div className="text-center bg-black text-white py-10 mb-8">
        <h2 className="text-xl md:text-3xl py-5">OUR PURPOSE</h2>
        <p className="px-10 text-normal md:text-2xl para">
          “PIONEERING AI-DRIVEN INNOVATIONS FOR AN ECO-FRIENDLY WORLD,POWERING
          GLOBAL GROWTH,EDUCATION,AND BRANDING & EXCELLENCE”
        </p>

      </div>
      <div className="text-center bg-black text-white py-10 mb-8">
        <h2 className="text-xl md:text-3xl py-5">CARRERS</h2>
        <p className="px-10 text-normal md:text-2xl para">
          “JOIN US IN SHAPING A SUSTAINABLE FUTURE.BE PART OF OUR DIVERSE TEAM
          DRIVING AI INNOVATIONS,GLOBAL GROWTH,EDUCATION AND BRANDING
          EXCELLENCE”
        </p>
      </div>

      
      <div className="text-center bg-black text-white py-10 mb-5">
        <h2 className="text-xl md:text-3xl py-5">SERVICES </h2>
        <p className="text-normal px-10 md:text-2xl para">
          “SMART ECOLOGY SOLUTIONS,SUSTAINABLE AI VENTURES,POWER,IOT,TECH &
          INNOVATION,DIGITAL MARKETING & BRANDING,GLOBAL BUSINESS GROWTH”
        </p>
      </div>
      
      <div className="text-center bg-black text-white py-10 mb-5">
        <h2 className="text-normal md:text-3xl py-5">ABOUT US</h2>
        <p className="text-normal px-10 md:text-2xl para">
          “WE HARNESS AI’S POTENTIAL TO CREATE ECO-FRIENDLY SOLUTIONS,FOSTER
          INNOVATION AND ACCELERATE GLOBAL BUSINESS,EDUCATION AND BRANDING
          SUCCESS”
        </p>
      </div>
      
      <div className="text-center bg-black text-white py-10 mt-5">
        <h2 className=" text-sm md:text-3xl py-5">OUR TESTIMONIALS</h2>
        <div className="flex justify-evenly">
        <h3 className="text-sm md:text-2xl">10+ <br /> core Projects</h3>
        <h3 className="text-sm md:text-2xl">5+ <br />Partners</h3>
        <h3 className="text-sm md:text-2xl">20+ <br /> Customers</h3>
        </div>
      </div>

      <img src={img3} alt="telegramimage" className="flex w-screen " />
      <br />
      
      <div className="relative flex">
      <img src={img4} alt="lfe at TAS" className=" w-screen " />
              <h1 className="absolute top-0 left-5 right-0 bottom-0  md:text-3xl text-white flex items-center justify-start ">
              #LifeAtTAS
              </h1>
      </div>
      <br />
      <Bottom/>
      <Footer/>
      {/* <Cookie/>
      
<Privatepolicy/>
<Terms/>  */}
    </>
  );
}
