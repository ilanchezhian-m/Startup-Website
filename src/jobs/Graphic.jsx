import { useNavigate  } from 'react-router-dom';

export function Graphic(){

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
        <h1 className="text-center text-sm md:text-2xl p-10 ">Graphic Designer Role</h1>
        <div className="job-styl text-sm text-left md:ml-20 md:text-xl leading-10">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">GRAPHIC DESIGNER</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH(GRAPHIC DESIGN, FINE APPS OR A RELATED FIELD.)</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">3-5 LPA</span> </p>   
        </div>
        <div className="job-jd text-left text-sm md:mx-20 md:text-xl ">
         <p className="font-bold mb-5">Job Description:</p>
         <p className="mb-5">As a Graphic Designer at TAS INNOVATION, you will play a crucial role in designing, developing, and maintaining the top not that are notch & highly functional but also visually appealing and responsive. </p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5">
            <li>Create visually appealing and user-friendly interfaces for websites, web applications, and mobile apps..</li>
            <li>
            Apply principles of user-centered design to enhance the overall user experience.
            </li>
            <li>
            Collaborate with cross-functional teams to understand project goals and user requirements.
            </li>
            <li>
            Create wireframes, mockups, and interactive prototypes to visualize design concepts. 
            </li>
            <li>
            Iterate on designs based on user feedback and usability testing results.
            </li>
            <li>
            Ensure consistency in design elements and user interface patterns. 
            </li>
            <li>
            Information Architecture:  
            </li>
            <div className="Md:ml-3">
                <li >
                Organize and structure content to improve navigation and findability. 
                </li>
                <li>
                Define the information hierarchy and site/app structure.
                </li>
                <li>
                Create sitemaps and navigation flows.
                </li>
            </div>
        </div>
        <p className="font-bold my-5">Qualifications:</p>
        <div className="ml-5">
            <li>
            A {`Bachelor's`} degree in graphic design or a related field, such as art, graphic arts, design, communications, or multimedia design. 
            </li>
            <li>
            Knowledge of the {`industry's`} standard software, such as Adobe PhotoShop, Illustrator, Sketch, InDesign, and other graphic design software.
            </li>
            <li>
            Creativity and knowledge of layouts, graphic fundamentals, typography, print, and the web.
            </li>
            <li>
            A compelling portfolio of work over a wide range of creative projects.
            </li>
            <li>
            Minimum 5 projects in Graphic Design is preferred.
            </li>
            <li>
            Familiarity with HTML & CSS is preferred.
            </li>
            
        </div>
        <p>If {`you're`} passionate Graphic Designer looking to join a dynamic and innovative team, apply now and be part of TAS{`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3 job-button" onClick={handleClick}>
                Apply Now
              </button>
         </p>
        
        
        </>
    )
}