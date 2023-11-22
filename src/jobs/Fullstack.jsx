import { useNavigate  } from 'react-router-dom';

export function Fullstack(){

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
        
        <h1 className="text-center text-sm md:text-2xl p-10 ">Full Stack Developer role</h1>
        <div className="job-styl text-sm text-left md:ml-20 md:text-xl ">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">FULL STACK DEVELOPER</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">3-6 LPA</span> </p>   
        </div>
        <div className="job-jd  text-left mx-20 md:text-xl text-sm ">
         <p className="font-bold mb-5">Job Description:</p>
         <p>As a Full Stack Developer at TAS INNOVATION, you will play a crucial role in designing, developing, and maintaining web applications that are not only highly functional but also visually appealing and responsive. We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in the full stack development field.
         </p>

        <p className="font-bold my-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5">
            <li>Collaborate with cross-functional teams to design, develop, and maintain web applications.</li>
            <li>
            Create responsive and attractive user interfaces that enhance user experience.
            </li>
            <li>
            Develop and maintain both front-end and back-end components of web applications.
            </li>
            <li>
            Stay up-to-date with recent technologies and trends in full stack development.
            </li>
            <li>
            Troubleshoot and resolve technical issues as they arise.
            </li>
            <li>
            Ensure the security, scalability, and performance of web applications.
            </li>
        </div>
        <p className="font-bold mb-5">Qualifications:</p>
        <div className="ml-5">
            <li>
            Minimum of 5 completed projects as a Full Stack Developer.
            </li>
            <li>
            Proficiency in front-end technologies such as HTML, CSS, JavaScript, and modern JavaScript frameworks
            </li>
            <li>
            (e.g., React, Angular, or Vue.js).
            Strong knowledge of back-end technologies and frameworks
            </li>
            <li>
            (e.g., Node.js, Python, Ruby on Rails, or Django).
            </li>
            <li>
            Experience with database systems such as MySQL, PostgreSQL, or MongoDB.
            </li>
            <li>
            Familiarity with version control systems (e.g., Git).
            </li>
            <li>
            Excellent problem-solving and communication skills.
            </li>
            <li>
            Ability to work independently and remotely.
            </li>
        </div>
        <p>If {`you're`} a passionate Full Stack Developer looking to join a dynamic and innovative team, apply now and be part of TAS {`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3" onClick={handleClick}>
                Apply Now
              </button>
         </p>
        </>
    )
}