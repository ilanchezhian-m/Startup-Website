import { useNavigate  } from 'react-router-dom';

export function Webdev(){

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
      <h1 className="text-center text-sm md:text-2xl p-10 ">Web Developer role</h1>
        <div className="job-styl text-left text-sm md:ml-20 md:text-xl ">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">WEB DEVELOPER</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">3-5 LPA</span> </p>   
        </div>
        <div className="job-jd text-left md:mx-20 text-sm md:text-xl ">
         <p className="font-bold mb-5">Job Description:</p>
         <p>TAS INNOVATION is a forward-thinking company specializing in cutting-edge web development. We are seeking a skilled Web Developer to join our team. </p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5">
            <li>Write clean, efficient, and maintainable front-end code (HTML, CSS, JavaScript) for websites.</li>
            <li>
            Ensure websites are responsive and optimized for various devices (desktops, tablets, mobiles). 
            </li>
            <li>
            Collaborate with UI designers to create visually appealing and user-friendly interfaces.
            </li>
            <li>
            Stay updated on the latest web development trends and technologies. 
            </li>
            <li>
            Integrate third-party services, API, and tools to enhance website functionality.
            </li>
            <li>
            Use version control systems (e.g., Git) to manage code and collaborate with the team. 
            </li>
            <li>
            Implement security measures to protect websites from vulnerabilities and ensure data privacy.  
            </li>
            <li>
            Continuously learn and improve skills by staying informed about industry best practices and emerging technologies. 
            </li>
        </div>
        <p className="font-bold my-5">Qualifications:</p>
        <div className="md:ml-5">
            <li>
            Minimum of 5 web development projects in your portfolio that demonstrate your ability to create responsive and attractive websites. Proficiency in HTML, CSS, JavaScript, and relevant front-end libraries or frameworks. 
            </li>
            <li>
            Proficiency in front-end technologies such as HTML, CSS, JavaScript, and modern JavaScript frameworks
            </li>
            <li>
            Strong problem-solving skills and attention to detail.
            </li>
            <li>
            Familiarity with version control systems (e.g., Git). 
            </li>
            <li>
            Ability to work independently and remotely. 
            </li>
            <li>
            Excellent communication and teamwork skills.
            </li>
            <li>
            Experience with back-end development, databases, or server-side scripting is a plus. 
            </li>
            <li>
            Knowledge of SEO best practices is a plus.
            </li>
        </div>
        <p>If {`you're`} a passionate Web Developer looking to join a dynamic and innovative team, apply now and be part of TAS {`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3" onClick={handleClick}>
                Apply Now
              </button>
         </p>
        </>
    )
}