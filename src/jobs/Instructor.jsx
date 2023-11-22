import { useNavigate  } from 'react-router-dom';


export function Instructor(){

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
        <h1 className="text-center md:text-2xl text-sm p-10 ">Instructor/Teaching Specialist role</h1>
        <div className="job-styl text-left text-sm  md:ml-20 md:text-xl ">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">INSTRUCTOR/TEACHING SPECAILIST</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH(CSE/IT/SUBJECT AREA BEING TAUGHT; ADDITIONAL TEAACHING CERTIFICATION MAY BE REQUIRED).</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">2.5-5 LPA</span> </p>   
        </div>
        <div className="job-jd text-left text-sm  md:mx-20 md:text-xl ">
         <p className="font-bold mb-5">Job Description:</p>
         <p>As a Instructor/Teaching specialist at TAS INNOVATION,you will be responsible for delivering high-quality, responsive, and engaging educational content to learners We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in the Instructor/Teaching field. </p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5">
            <li>
            Create and update course materials, lesson plans, and learning objectives aligned with industry trends. 
            </li>
            <li>
            Design instructional strategies, content delivery methods, and assessment tools. Facilitate engaging online or in-person instruction with clear presentations. 
            </li>
            <li>
            Tailor teaching methods to diverse learning styles and abilities. 
            </li>
            <li>
            Utilize educational technologies and multimedia tools for enhanced learning. 
            </li>
            <li>
            Develop assessments, administer quizzes, and provide timely feedback. 
            </li>
            <li>
            Offer guidance, mentoring, and support to students. 
            </li>
            <li>
            Collaborate remotely with colleagues to improve course content. 
            </li>
            <li>
            Ensure educational content quality and relevance.
            </li>
            <li>
            Maintain organized records of course materials and student progress. 
            </li>
            <li>
            Maintain clear and effective communication with learners and colleagues.
            </li>

        </div>
        
        <p className="font-bold my-5">Qualifications:</p>
        <div className="ml-5">
            <li>
            {`Bachelor's`} Degree in Computer Graphics, Graphic Design, Communication Design, Illustration, Fine Arts, Art and Design, or a related fields.
            </li>
            <li>
            Minimum of 5 projects or courses in your portfolio that demonstrate your ability to deliver responsive and engaging educational content. 
            </li>
            <li>
            {`Bachelor's`} degree in Education, Instructional Design, or a related field ({`Master's`} degree is a plus). 
            </li>
            <li>
            Strong knowledge of educational technologies and e-learning platforms. 
            </li>
            <li>
            Excellent communication and presentation skills. 
            </li>
            <li>
            Teaching certifications or credentials are advantageous.
            </li>

            
        </div>
        <p>If {`you're`} a passionate Instructor/Teaching looking to join a dynamic and innovative team, apply now and be part of TAS{`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3" onClick={handleClick}>
                Apply Now
              </button>
         </p>
        
        
        
        
        
        </>
    )
}