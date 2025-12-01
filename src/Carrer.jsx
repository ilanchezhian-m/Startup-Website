

import { NavLink} from "react-router-dom";

import carrer from "../src/assets/carrer.png";
import frame from "../src/assets/Frame.svg";
import carrer1 from "../src/assets/carrer1.png";
import carrer2 from "../src/assets/carrer2.png";
import carrer3 from "../src/assets/carrer3.png";
import carrer4 from "../src/assets/carrer4.png";
import carrer5 from "../src/assets/carrer5.png";
import carrer6 from "../src/assets/carrer6.png";
import carrer7 from "../src/assets/carrer7.png";
import carrer8 from "../src/assets/carrer8.png";
import carrer9 from "../src/assets/carrer9.png";
import carrer10 from "../src/assets/carrer10.png";
import carrer11 from "../src/assets/carrer11.png";
import carrer12 from "../src/assets/carrer12.png";
import carrer13 from "../src/assets/carrer13.png";
import carrer14 from "../src/assets/carrer14.png";
import carrer15 from "../src/assets/carrer15.png";
import carrer16 from "../src/assets/carrer16.png";
import carrer17 from "../src/assets/carrer17.png";
import carrer18 from "../src/assets/carrer18.png";
import carrer19 from "../src/assets/carrer19.png";
import carrer20 from "../src/assets/carrer20.png";
import carrer21 from "../src/assets/carrer21.png";
import carrer22 from "../src/assets/carrer22.png";
import carrer23 from "../src/assets/carrer23.png";
import carrerapplybutton from "../src/assets/carrerapply.svg";
import carrer24 from "../src/assets/carrer24.png";
import insta from "../src/assets/instaimage.svg";
import x from "../src/assets/ximage.svg";
import youtube from "../src/assets/youtube.svg";
import img4 from "../src/assets/image4.png";
// import applysymbol from '../src/assets/applysymbol.svg'

export function Carrer() {
  
  return (
    <>
    
      <div className=" text-center py-1 md:py-8">
        <h2 className="text-sm mt-10  md:text-xl md:mx-20">
          Join Our Team and Drive Your Career Forward!
        </h2>
      </div>
      <img src={carrer} alt="" className="w-full h-auto max-h-screen" />
      <h5 className="text-center pt-10">TO KNOW MORE ABOUT</h5>
      <img src={frame} alt="below-icon-image" className="mx-auto pt-2 pb-6" />

      {/* added linear gradient */}
  
        <div className=" relative mb-10 flex lg:mx-10 ">
                <div className="">
                      <img src={carrer1} alt="image1" className="h-[350px] md:h-fit w-[250px] md:w-fit relative lg:ml-20" />
                </div>
               <div className="one text-center absolute left-1/3 bottom-1/4">
                      <p className="md:px-20 md:py-10 para text-xs  md:text-base shrink-1 py-5">
                      {`WE’RE`} A TEAM OF PASSIONATE INDIVIDUALS WORKING TOGETHER TO REVOLUTIONIZE THE TAS INNOVATION THROUGH INNVATION,DEDICATION AND SHARED COMMITMENT TO EXCELLENCE
                    </p>
                   
              </div>
        </div>

      <h1 className="mb-10 text-center md:text-2xl">WHY TAS INNOVATION ?</h1>

      <div className="md:flex justify-evenly md:mx-20 md:mb-10">
        <img src={carrer2} alt="" className="mb-10 " />
        <img src={carrer3} alt="" className="mb-10 w-full md:w-[497px]" />
      </div>
      <div className="md:flex justify-center md:mb-10">
        <img src={carrer4} alt="" className="mb-10 " />
      </div>
      <div className="md:flex justify-evenly md:mx-20 md:mb-10">
        <img src={carrer5} alt="" className="mb-10" />
        <img src={carrer6} alt="" className="mb-10" />
      </div>

      <div className=" text-center py-1 md:py-8">
        <h2 className="text-sm md:text-3xl md:mx-20">
          What our company values ?
        </h2>
      </div>

      <div className=" items-center mx-1 flex-1 ">

      <div className="relative flex justify-center">
        <img src={carrer7} alt="" className="mb-10" />
              <h1 className="absolute top-0 left-0 right-0 bottom-0  md:text-3xl text-white flex items-center justify-center ">
                P A S  S I O N
              </h1>
      </div>


      <div className="relative flex justify-center">
        <img src={carrer8} alt="" className="mb-10" />
        <h1 className="absolute top-0 left-0 right-0 bottom-0  md:text-3xl text-white flex items-center justify-center ">
               E X C E L L E N C E
              </h1>
        </div>

        <div className="relative flex justify-center">
        <img src={carrer9} alt="" className="mb-10" />
        <h1 className="absolute top-0 left-0 right-0 bottom-0  md:text-3xl text-white flex items-center justify-center ">
        I N C L U S I V I T Y
              </h1>
      </div>

        <div className="relative flex justify-center">
        <img src={carrer10} alt="" className="mb-10" />
        <h1 className="absolute top-0 left-0 right-0 bottom-0  md:text-3xl text-white flex items-center justify-center ">
        I N T E G R I T Y
              </h1>
        </div>
      </div>

      <div className=" text-center py-1 md:py-8">
        <h2 className="text-sm md:text-3xl md:mx-20">
          {`We’re`} not more than a workplace. <br />{`We’re`} a family.
        </h2>
      </div>
      <p className="px-10 text-sm md:mx-20 text-normal md:text-base para-smallcase mb-10">
        {`"We`} Understand That Discovering A Fulfilling And Satisfying Career
        Can Be A Lengthy Voyage. Our Aim Is To Simplify This Journey For You And
        To Establish A Work Environment {`That's`} Truly Enriching, A Place{" "}
        {`You'll`} Eagerly Anticipate Being Part Of Every {`Day."`}
      </p>

      <div className=" flex justify-center">
        <button className="explore-opportunities bg-black text-white para-smallcase text-base px-4 py-2 md:text-2xl mb-10 md:py-5 md:px-14 inline-flex ">
          Explore Opportunities
        </button>
      </div>

      <img 
        src={carrer11}
        alt="below-icon-image"
        className="w-full h-auto max-h-screen mb-10"
      />
    {/* navigate the job opportunities */}
      <div  className="flex flex-col items-center md:flex-row md:justify-evenly">
      <div id="graphicSectionRef" className="relative">
          <img src={carrer12} alt="" className="mb-10 p-2 carrer-images " />
          <p className="absolute carrer-align ">
            Graphic Designer & Motion Designer
          </p>
          <NavLink  to='/graphic' onClick={() => {  window.scrollTo(0, 0); } } >
            <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
          </NavLink>
      </div>

        <div className="relative">
          <img src={carrer13} alt="" className="mb-10 p-2 carrer-images" />
              <p className="absolute carrer-align ">
              AWS Developer
              </p>
              
               
              <NavLink  to='/aws' onClick={() => { window.scrollTo(0, 0); }}>
              <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                </NavLink>
            
        </div>

        <div className="relative">
         <img src={carrer14} alt="" className="mb-10 p-2 carrer-images" />
              <p className="absolute carrer-align ">
              Sales and Marketing Specialist
              </p>
              <NavLink  to='/sales' onClick={() => { window.scrollTo(0, 0); }}>
              <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                </NavLink>
        </div>

      </div>



      <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">
        <div className="relative">
        <img src={carrer15} alt="" className="mb-10 p-2 carrer-images" />
                <p className="absolute carrer-align  ">
                E-commerce Manager
                </p>
                <NavLink   to='/ecommerce' onClick={() => { window.scrollTo(0, 0); }}>
                <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                  </NavLink>
        </div>



        <div className="relative">
        <img src={carrer16} alt="" className="mb-10 p-2 carrer-images" />
                  <p className="absolute carrer-align ">
                  Fashion Designer
                  </p>
                  <NavLink  to='/fashion' onClick={() => { window.scrollTo(0, 0); }}>
                  <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                    </NavLink>
        </div>

        <div className="relative">
        <img src={carrer17} alt="" className="mb-10 p-2 carrer-images" />
                <p className="absolute carrer-align ">
                IoT Project Manager
                </p>
                <NavLink  to='/iot' onClick={() => { window.scrollTo(0, 0); }}>
                <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                 </NavLink>
        </div>



      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">

      <div className="relative">
        <img src={carrer18} alt="" className="mb-10 p-2 carrer-images" />
                <p className="absolute carrer-align    ">
                Product Developer (Electronics)
                </p>
                <NavLink   to='/product' onClick={() => { window.scrollTo(0, 0); }}>
                <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                 </NavLink>
     
        </div>

        <div className="relative">
        <img src={carrer19} alt="" className="mb-10 p-2 carrer-images" />
                <p className="absolute carrer-align ">
                Motion Designer
                </p>
                <NavLink  to='/motiondesign' onClick={() => { window.scrollTo(0, 0); }}>
                <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                 </NavLink>
        </div>

        <div className="relative">
        <img src={carrer20} alt="" className="mb-10 p-2 carrer-images" />
                <p className="absolute carrer-align  ">
                IEEE Paper Specialist
                </p>
                <NavLink  to='/ieee' onClick={() => { window.scrollTo(0, 0); }}>
                <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                 </NavLink>
        
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-evenly ">

        <div className="relative">
        <img src={carrer21} alt="" className="mb-10 p-2 carrer-images" />
                  <p className="absolute carrer-align   ">
                  Instructor/ <br />Teaching Specialist
                  </p>
                  <NavLink  to='/instructor' onClick={() => { window.scrollTo(0, 0); }}>
                  <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                 </NavLink>
        </div>

        <div className="relative">
        <img src={carrer22} alt="" className="mb-10 p-2 carrer-images" />
                  <p className="absolute carrer-align ">
                  Food Product Developer
                  </p>
                  <NavLink   to='/food' onClick={() => { window.scrollTo(0, 0); }}>
                  <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                 </NavLink>
        </div>

        <div className="relative">
        <img src={carrer23} alt="" className="mb-10 p-2 carrer-images" />
                  <p className="absolute carrer-align  ">
                  Content Creator
                  </p>
                  <NavLink   to='/content' onClick={() => { window.scrollTo(0, 0); }}>
                  <div className="carrer-hover">
            <img src={carrerapplybutton} alt="" className="absolute left-20 bottom-20  "/>
            </div>
                 </NavLink>
        </div>

      </div>

        <div className=" relative mb-10 flex md:mx-20">
                <div className="">
                      <img src={carrer24} alt="image1" className="h-[350px] md:h-fit w-[250px] md:w-fit" />
                </div>
               <div className="one text-center absolute left-1/3 bottom-1/4">
                      <p className="md:px-20 md:py-10 para text-xs md:text-base shrink-1 py-5">
                      “GREATER FUTURES THROUGH INNOVATION WATCHING THE WORLD OF NEXT-TECH UNFOLD.{`IT’S`} TIME TO BE PART OF IT.EXPLORE CHALLENGING AND EXCITING OPPORTUNITIES ACROSS THE GLOBE”
                    </p>
                   
              </div>
        </div>

        <div className="relative mb-10  flex">
             <img src={img4} alt="lfe at TAS" className=" w-screen " />
              <h1 className="absolute text-sm  top-1/2 left-2 md:left-10  md:text-3xl text-white flex items-center justify-start ">
              #LifeAtTAS
              </h1>
              <div className="flex absolute right-10 top-1/2 ">
                  <a href="https://instagram.com/tas.innovation?igshid=OGQ5ZDc2ODk2ZA==" rel="noreferrer" >
                      <img src={insta} alt="" className=" md:mx-10 h-[20px] md:h-fit" />
                  </a>
                  <a href="https://twitter.com/TasInnovations?t=REgrY43arLI1-Z0bYRlQGw&s=09" rel="noreferrer">
                      <img src={x} alt="" className="ml-5 md:mx-10 h-[20px] md:h-fit" />
                    </a>
                  <a href="https://youtube.com/@tasinnovation6973" rel="noreferrer" >
                      <img src={youtube} alt="" className=" ml-5 md:ml-10 h-[20px] md:h-fit" />
                  </a>
               </div>
      </div>
      

    </>
    
  );
}
