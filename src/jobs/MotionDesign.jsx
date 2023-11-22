import { useNavigate  } from 'react-router-dom';

export function MotionDesign(){

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
        <h1 className="text-center text-sm md:text-2xl p-10 ">Motion Design role</h1>
        <div className="job-styl text-left text-sm md:ml-20 md:text-xl ">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">MOTION DESIGNER</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH(CSE/IT)</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">2.5-5 LPA</span> </p>   
        </div>
        <div className="job-jd text-sm  text-left md:mx-20 md:text-xl ">
         <p className="font-bold mb-5">Job Description:</p>
         <p>As a Motion Designer at TAS INNOVATION, you will play a crucial role in creating captivating and visually appealing motion graphics using the latest technologies.We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in the Motion Designing field.</p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5">
            <li>
            Develop visually stunning motion graphics and animations that align with project requirements and objectives. 
            </li>
            <li>
            Ensure that motion graphics are designed to be responsive and adaptable to various screen sizes and devices.
            </li>
            <li>
            Use motion design to effectively convey stories, messages, and concepts in a visually engaging manner. 
            </li>
            <li>
            Implement special effects and VFX elements to enhance the overall impact of motion graphics projects. 
            </li>
            <li>
            Utilize industry-standard software such as Adobe After Effects, Cinema 4D, or other relevant tools for motion graphics creation. 
            </li>
            <li>
            Incorporate typography and kinetic text animations into projects, enhancing readability and engagement.
            </li>
            <li>
            Sync motion graphics with audio, including sound effects and music, to create a seamless and immersive experience. 
            </li>
        </div>
        
        <p className="font-bold my-5">Qualifications:</p>
        <div className="md:ml-5">
            <li>
            {`Bachelor's`} Degree in Computer Graphics, Graphic Design, Communication Design, Illustration, Fine Arts, Art and Design, or a related fields.
            </li>
            <li>
            5+ projects experience as a Motion Designer, Visual Designer
            </li>
            <li>
            Advanced command of motion graphic application
            </li>
            <li>
            Experience with audio production. 
            </li>
            <li>
            Skills to create powerful stories that capture audiences and pique their interest. 
            </li>
            <li>
            Strong technical skills and proven ability to use software including Photoshop and 2D or 3D animation. 
            </li>
            <li>
            Time management and prioritisation skills 
            </li>
        </div>
        <p>If {`you're`} Motion Designer looking to join a dynamic and innovative team, apply now and be part of TAS  {`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3" onClick={handleClick}>
                Apply Now
              </button>
         </p>
        
        
        
        </>
    )
}