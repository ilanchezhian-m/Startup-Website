import { useNavigate  } from 'react-router-dom';

export function Ui(){

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
        <h1 className="text-center md:text-2xl p-10 text-sm ">Ui/Ux Designer role.</h1>
        <div className="job-styl text-left md:ml-20 md:text-xl text-sm">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">UI/UX DESIGNER</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH(GRAPHIC DESIGN,INTERACTION DESIGN, OR A RELATED FIELD.)</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">3-5 LPA</span> </p>   
        </div>
        <div className="job-jd text-left md:mx-20 md:text-xl text-sm">
         <p className="font-bold mb-5">Job Description:</p>
         <p>As a Ui/Ux Designer at TAS INNOVATION, you will play a crucial role in designing, developing, and maintaining web applications that are not only highly functional but also visually appealing and responsive. We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in the Ui/Ux field. </p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5">
            <li>Proven working experience in web programming </li>
            <li>
            Top-notch programming skills and in-depth knowledge of modern HTML/CSS 
            </li>
            <li>
            Familiarity with at least one of the following programming languages: JavaScript, PHP, or Ruby on Rails 
            </li>
            <li>
            Stay updated on the latest web development trends and technologies. 
            </li>
            <li>
            Good understanding of asynchronous request handling, partial page updates, and AJAX 
            </li>
            <li>
            Basic knowledge of image authoring tools (Photoshop/Gimp) 
            </li>
        </div>
        <p className="font-bold my-5">Qualifications:</p>
        <div className="md:ml-5">
            <li>
            Minimum of 5 Ui/Ux projects in your portfolio that demonstrate your ability to create responsive and attractive websites.
            </li>
            <li>
            Design and Prototyping Tools: 
            </li>
            <p className="ml-5">
            <li>sketch</li>
            <li>Abode XD</li>
            <li>Figma</li>
            <li>InVision</li>
            </p>
            
            <li>
            Design Collaboration Tools: 
            </li>
            <div className="ml-5">
                <li>Zeplin  </li>
                <li>Avocode  </li>
                <li>Abstract</li>
            </div>
            <li>
            User Research and Testing Tools. 
            </li>
            <div className="ml-5">
                <li>UserTesting</li>
                <li>Optimal Workshop</li>
                <li>Hotjar</li>
            </div>
            <li>
            Prototyping and Interaction Design Tools:  
            </li>
            <div className="ml-5">
                <li>Principle</li>
                <li>Adobe After Effects </li>
                <li>Flinto</li>
            </div>
            
        </div>
        <p>If {`you're`} a passionate Ui/Ux Designer looking to join a dynamic and innovative team, apply now and be part of TAS {`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3 job-button" onClick={handleClick}>
                Apply Now
              </button>
         </p>
        </>
    )
}