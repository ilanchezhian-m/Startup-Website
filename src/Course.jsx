
import Course1 from "../src/assets/Course1.png";
import Course2 from "../src/assets/Course2.png";
import Course3 from "../src/assets/Course3.png";
// import carrerapplybutton from "../src/assets/carrerapply.svg"; apply now image
import Course4 from "../src/assets/Course4.png";
import microsoft from "../src/assets/microsoft.svg";
import google from "../src/assets/google.svg";
import apple from "../src/assets/apple.svg";
import adobe from "../src/assets/adobe.svg";
import ibm from "../src/assets/ibm.svg";
import asus from "../src/assets/asus.svg";
import uber from "../src/assets/uber.svg";
import samsung from "../src/assets/samsung.svg";
import Course5 from "../src/assets/Course5.png";
import Course6 from "../src/assets/Course6.png";
import Course7 from "../src/assets/Course7.svg";
import Course8 from "../src/assets/Course8.svg";
import Course9 from "../src/assets/Course9.svg";
import Course10 from "../src/assets/Course10.svg";
import applysymbol from '../src/assets/applysymbol.svg'
import { Bottom } from "./components/Bottom";
import { Footer } from "./components/Footer";
import Explore from "../src/assets/Explore.svg";



export function Course(){
    const handleClick = () => {
        // Navigate to the section without smooth scrolling
        const graphicSectionRef = document.getElementById("sendmessage");
        if (graphicSectionRef) {
          graphicSectionRef.scrollIntoView({ behavior: 'smooth' });
        }
      }


    return(
        <>
            <div className=" text-center py-8">
                            <h2 className="text-sm md:text-xl md:mx-20">
                                {`"Innovation`} X Learning: <br /> Shaping Future Leaders through Education, Driving {`Innovations"`}
                            </h2>
            </div>

            <img src={Course1} alt="" className="w-full h-auto mb-10" />

                    <h1 className="text-center text-base md:text-3xl mb-10">
                        Broad Selection Of Free Courses
                    </h1>

            <p className="text-center para-smallcase mx-5 md:mx-20 text-base md:text-xl mb-10">
            {`"Get`} Unlimited Access To Over 90% Of Courses, Projects, Specializations, And Professional Certificates
            On Courses, Taught By Top Instructors From Leading Universities And Companies.
            </p>
            
            <div className=" flex justify-center">
                    <p className="bg-black text-white para-smallcase text-base px-4 py-2 md:text-2xl mb-10 md:py-5 md:px-14 inline-flex ">
                    Explore Courses
                    </p>
             </div>



             <div className="relative flex flex-col items-center justify-center h-full mb-10">
  <img src={Course2} alt="" className="h-[300px] md:h-[500px] w-full" />

    <div className="flex absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 md:flex-row  ">
            <div className='mx-2 md:mx-10'>
                <img src={Course7} alt="" className="h-[30px] md:h-[80px] md:mb-5" />
                <p className="para-smallcase xl:whitespace-nowrap text-xs md:text-xl">Learn Anything</p>
            </div>
            <div className='mx-2 md:mx-10'>
                <img src={Course8} alt="" className="h-[30px] md:h-[80px] md:mb-5 " />
                <p className="para-smallcase xl:whitespace-nowrap text-xs md:text-xl">Save money & Get Courses</p>
            </div>
            <div className='mx-2 md:mx-10'>
                <img src={Course9} alt="" className="h-[30px] md:h-[80px] md:mb-5 " />
                <p className="para-smallcase xl:whitespace-nowrap text-xs md:text-xl">Unlimited Certificates</p>
            </div>
            <div className='mx-2 md:mx-10'>
                <img src={Course10} alt="" className="h-[30px] md:h-[80px] md:mb-5" />
                <p className="para-smallcase xl:whitespace-nowrap text-xs md:text-xl">Flexible learning</p>
            </div>
    </div>

    <div className="flex absolute bottom-3 md:bottom-10 left-5 xl:left-1/4 md:flex-row">
        <p className="text-xs md:text-xl para-smallcase font-bold">
        Trusted By Over 14,400 Companies And Millions Of Learners Around The World
        </p>
  </div>
            </div>

             <h1 className="text-center text-base md:text-3xl mb-10">
             Top Categories
            </h1>
        

            <div className="flex flex-col items-center md:flex-row md:justify-evenly  md:mb-10">
                        <div className="relative">
                            <img src={Course3} alt="" className="mb-10 md:pr-2 " />
                                <p className="absolute course-align left-1/4 text-black font-bold ">
                                DEVELOPMENT
                                </p>
                                <button>
                                <img src={Explore} alt="" className="absolute left-20 bottom-20 carrer-hover" />
                                </button>
                        </div>


                        <div className="relative">
                        <img src={Course3} alt="" className="mb-10 md:pr-2" />
                            <p className="absolute course-align mx-2 left-20 text-black font-bold  p-2">
                            DESIGN
                            </p>
                            <button>
                                <img src={Explore} alt="" className="absolute left-20 bottom-20 course-hover" />
                            </button>
                        </div>

                        <div className="relative">
                        <img src={Course3} alt="" className="mb-10 md:pr-2" />
                            <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                            IT/SOFTWARE
                            </p>
                            <button>
                                <img src={Explore} alt="" className="absolute left-20 bottom-20 course-hover" />
                            </button>
                        </div>

            </div>

             <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">
                        <div className="relative">
                            <img src={Course3} alt="" className="mb-10 md:pr-2" />
                                <p className="absolute course-align ml-2 left-6  text-black font-bold  p-2">
                                PERSONAL DEVELOPMENT
                                </p>
                                <button>
                                <img src={Explore} alt="" className="absolute left-20 bottom-20 course-hover" />
                                </button>
                        </div>


                        <div className="relative">
                        <img src={Course3} alt="" className="mb-10 md:pr-2" />
                            <p className="absolute course-align mx-2 left-20 text-black font-bold  p-2">
                            BUSINESS
                            </p>
                            <button>
                                <img src={Explore} alt="" className="absolute left-20 bottom-20 course-hover" />
                            </button>
                        </div>
              </div>

              <div className='flex flex-row mb-10 justify-end '>
                            <div className='course-teaching w-[400px] relative h-[250px]  md:h-[400px] md:w-screen'>
                               
                                <h6 className='absolute text-sm md:left-10 md:text-2xl md:mt-10'>Become An Instructor</h6>
                              
                                  <p className='absolute text-sm top-6 md:left-10 md:top-10 md:text-2xl md:mt-10 para-smallcase font-bold'>
                                Instructors From Around The World Teach Millions Of Students On Udemy. We Provide The Tools And Skills To Teach What You Love.
                                </p>

                                <div className='absolute text-sm bottom-2 md:left-10 md:bottom-10 
                                 md:text-2xl md:mt-10 para-smallcase bg-black text-white px-2 py-1 md:px-4 md:py-4 course-hover-talk'>
                                    <button onClick={handleClick}>                                  
                                          <p>Start Teaching Today</p>
                                    </button>
                                </div>
                            </div>
                                <img src={Course4} alt="" className="h-[250px] w-[150px] md:h-[400px] md:w-[500px]" />
            </div>

              
              <h1 className="text-center text-base md:text-3xl mb-10">
              Internships Of Top Companies
             </h1>

            <p className="text-center para-smallcase mx-5 md:mx-20 text-base md:text-xl mb-10">
            Get All Internships Provided By Top Mnc Companies & Other Companies <br />Over 10000+ Opportunities Are Over There & Get Your Suitable One.
            </p>
        
        <div className="flex justify-evenly mb-10">
            <img src={microsoft} alt="" className="h-[20px] md:h-auto" />
            <img src={google} alt=""className="h-[20px] md:h-auto"/>
            <img src={apple} alt="" className="h-[20px] md:h-auto"/>
            <img src={adobe} alt="" className="h-[20px] md:h-auto" />
            <img src={ibm} alt="" className="h-[20px] md:h-auto"/>
            <img src={asus} alt="" className="h-[20px] md:h-auto"/>
            <img src={uber} alt="" className="h-[20px] md:h-auto"/>
            <img src={samsung} alt="" className="h-[20px] md:h-auto"/>
        </div>


        <div className=" flex justify-center">
                    <p className="bg-black text-white para-smallcase text-base px-4 py-2 md:text-2xl mb-20 md:py-5 md:px-14 inline-flex ">
                    Explore Opportunities
                    </p>
        </div>

                <h1 className="text-center text-base md:text-3xl mb-10">
                      Explore TAS Opportunities
                </h1>

                <p className="text-center para-smallcase mx-5 md:mx-20 text-base md:text-xl mb-10" id="internship-port">
                We Are Providing Internships For Students & Those Who Are Searching For Job Opportunities To Make Them Physically Fit With Industry Experience And Also To Know About Their Interested Domain.
                </p>
                    {/* intenships opportunities */}
    <div id="graphicSectionRef" className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">
        <div className="relative">
                <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align left-20 text-black font-bold  p-2">
                             Data Science
                    </p>
                <div className="carrer-hover">
                     <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                     Apply Now 
                     </button>
                    <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                </div>
        </div>


        <div className="relative">
                     <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                    Machine Learning
                    </p>              
            <div className="carrer-hover">
                    <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                    Apply Now 
                    </button>
                    <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
            </div>
        </div>

        <div className="relative">
                    <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align mx-2 left-12 text-black font-bold  p-2">
                    Artificial Intelligence 
                    </p>
                    <div className="carrer-hover">
                        <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                        Apply Now 
                        </button>
                        <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                    </div>
        </div>

    </div>
            <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">
                    <div className="relative">
                    <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align left-16 text-black font-bold  p-2">
                    Ui/Ux Designing
                    </p>
                        
                 <div className="carrer-hover">
                    <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                    Apply Now 
                    </button>
                    <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                </div>
            </div>


        <div className="relative">
                <img src={Course3} alt="" className="mb-10 md:pr-2" />
                <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                Graphic Designing
                </p>
                    
                    <div className="carrer-hover">
                        <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                        Apply Now 
                        </button>
                        <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                        </div>
        </div>

        <div className="relative">
                        <img src={Course3} alt="" className="mb-10 md:pr-2" />
                        <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                                Web Development
                        </p>
                        
                    <div className="carrer-hover">
                        <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                        Apply Now 
                        </button>
                        <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                    </div>
            </div>

    </div>
        <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">
            <div className="relative">
                    <img src={Course3} alt="" className="mb-10 md:pr-2" />
                        <p className="absolute course-align left-16 text-black font-bold  p-2">
                        Python Development
                        </p>
                            
                    <div className="carrer-hover">
                            <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                            Apply Now 
                            </button>
                            <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                    </div>
        </div>


        <div className="relative">
                <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                    Java Development
                    </p>
                        
                    <div className="carrer-hover">
                            <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                            Apply Now 
                            </button>
                            <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                        </div>
        </div>

        <div className="relative">
            <img src={Course3} alt="" className="mb-10 md:pr-2" />
                <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                C Development
                </p>
                    <div className="carrer-hover">
                        <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                         Apply Now 
                        </button>
                        <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                    </div>
            </div>

     </div>
    <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">
             <div className="relative">
                    <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align left-16 text-black font-bold  p-2">
                    C++ Development
                    </p>            
                    <div className="carrer-hover">
                        <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                        Apply Now 
                        </button>
                        <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                    </div>
            </div>


        <div className="relative">
            <img src={Course3} alt="" className="mb-10 md:pr-2" />
                <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                IoT Development
                </p>
                    
                <div className="carrer-hover">
                    <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                    Apply Now 
                    </button>
                    <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                </div>
        </div>

        <div className="relative">
                    <img src={Course3} alt="" className="mb-10 md:pr-2" />
                        <p className="absolute course-align  text-black font-bold  p-2">
                        Sales and Marketing Development
                        </p>
                            
                <div className="carrer-hover">
                        <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                        Apply Now 
                        </button>
                        <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                </div>
        </div>
    </div>

    <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">
        <div className="relative">
            <img src={Course3} alt="" className="mb-10 md:pr-2" />
                <p className="absolute course-align left-12 text-black font-bold  p-2">
                E-commerce Developer
                </p>
                    
                <div className="carrer-hover">
                    <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                    Apply Now 
                    </button>
                    <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                </div>
    </div>


        <div className="relative">
                <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                    AWS Developer
                    </p>
                              
                 <div className="carrer-hover">
                    <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                    Apply Now 
                    </button>
                    <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                </div>
        </div>

        <div className="relative">
                <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                    Fashion Designer
                    </p>
                              
                <div className="carrer-hover">
                    <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                    Apply Now 
                    </button>
                    <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                </div>
        </div>

    </div>

    <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">
        <div className="relative">
            <img src={Course3} alt="" className="mb-10 md:pr-2" />
                <p className="absolute course-align left-16 text-black font-bold  p-2">
                Product Developer (Electronics)
                </p>
                                  
            <div className="carrer-hover">
                <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                Apply Now 
                </button>
                <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
            </div>
        </div>


        <div className="relative">
                <img src={Course3} alt="" className="mb-10 md:pr-2" />
                <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                Motion Designer
                </p>
                    
                <div className="carrer-hover">
                    <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                    Apply Now 
                    </button>
                    <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                </div>
        </div>

        <div className="relative">
                <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align mx-2 left-12 text-black font-bold  p-2">
                    IEEE Paper Specialist
                    </p>
                        
                <div className="carrer-hover">
                    <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                    Apply Now 
                    </button>
                    <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                </div>
        </div>

    </div>

    <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mb-10">
            <div className="relative">
                <img src={Course3} alt="" className="mb-10 md:pr-2" />
                    <p className="absolute course-align mx-2 left-16 text-black font-bold  p-2">
                    Content Creator
                    </p>
                              
                    <div className="carrer-hover">
                        <button onClick={handleClick} className="absolute left-20 bottom-20  bg-white  button-applynow para-smallcase">
                        Apply Now 
                        </button>
                        <img src={applysymbol} alt="" className="absolute applysymbol-icon "/>
                    </div>
            </div>
    </div>
            
            <h1 className="text-center mx-2 text-base md:text-3xl mb-10">
            Innovation X Business With Tas
            </h1>

            <p className="text-center para-smallcase mx-5 md:mx-20 text-base md:text-xl mb-10">
            {`"Are `}You Passionate About Innovation? We Warmly Invite You To Join The Tas Innovation Family <br /> And Be Part Of Our Exciting {`Journey."`} 
            </p>

            <div className="flex mb-10">
            <img src={Course5} alt="" className="h-[330px] md:h-[550px] w-[200px] md:w-fit " />

            <div className="relative">
            <img src={Course6} alt="" className="h-[330px] md:h-[500px] md:w-screen"/>

                
                <h1 className="absolute text-xs lg:text-3xl left-1 top-1 lg:left-10 md:text-xl md:top-[40px] lg:top-10">
                Become An Entrepreneur
                </h1>
                

                <p className="text-left para-smallcase text-xs absolute left-1 top-12 md:top-1/4 md:text-base lg:left-10 ">
                {`"We`} Warmly Welcome Those With A Passion For Innovation And Entrepreneurship To Join Our Dynamic Team At Tas Innovation, Where Your Ideas Will Be Nurtured And Your Entrepreneurial Spirit Will {`Thrive."`}
                </p>

                <p className="text-center para-smallcase  text-xs mb-10 absolute bottom-1 left-2 lg:left-10 sm:text-xl md:bottom-[20px]  lg:bottom-[180px]">
                <button onClick={handleClick} className="text-white bg-black px-2  py-1 sm:px-14 :py-4 text-xs lg:text-2xl course-hover-talk ">
                    TALK WITH US
                </button>
                </p>
            </div>
            </div>

            <div id='sendmessage'>
            <Bottom/>
            </div>
            <Footer/>



        </>
    )
}