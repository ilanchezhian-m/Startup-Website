import { useNavigate  } from 'react-router-dom';


export function Iot(){

    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate('/carrer');
      setTimeout(() => {
      const graphicSectionRef = document.getElementById("graphicScroll");
      if (graphicSectionRef) {
        graphicSectionRef.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); 
  };
    return(
        <>
         <h1 className="text-center text-sm md:text-2xl p-10 ">IOT Project Developer role</h1>
        <div className="job-styl text-left  text-sm md:ml-20 md:text-xl leading-10">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">IOT ENGINEER</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">2.5-4 LPA</span> </p>   
        </div>
        <div className="job-jd text-left  text-sm md:mx-20 md:text-xl leading-10">
         <p className="font-bold mb-5">Job Description:</p>
         <p>As a IoT Engineer at TAS INNOVATION, you will play a crucial role in developing IoT products for Industries.We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in the IoT field.</p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5">
            <li>
            Able to think creatively as it allows them to develop innovative product ideas that no one else has thought of.
            </li>
            <li>
            Should have excellent problem-solving skills in order to develop products in response to an issue that they recognize in their industry. 
            </li>
            <li>
            Interpersonal communication is the process by which individuals change the language or communication channels 
            </li>
            <li>
            Market research is a research method where professionals research industry trends, competitor products, target audiences, consumer needs and customer reviews
            </li>
        </div>
        <p className="font-bold my-5">Qualifications:</p>
        <div className="md:ml-5">
            <li>
            {`Bachelor's`} or Associates degree in Electrical & Electronics,Electronics & Communication or related fields.
            </li>
            <li>
            Real-Time Operating System (RTOS) experience: FreeRTOS, Contiki, Zephyr 
            </li>
            <li>
            Embedded Linux 
            </li>
            <li>
            Physical and information security 
            </li>
            <li>
            Platforms: Texas Instruments, ARM Cortex, AVR, Microchip, Arduino, Raspberry Pi
            </li>
            <li>
            In-depth understanding of computer programming and network security Knowledge of sensors, machine learning and AI 
            </li>
        </div>
        <p>If {`you're`}  passionate IoT Project Developer looking to join a dynamic and innovative team, apply now and be part of TAS {`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3 job-button" onClick={handleClick}>
                Apply Now
              </button>
         </p>
        
        
        </>
    )
}