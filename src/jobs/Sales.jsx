import { useNavigate  } from 'react-router-dom';


export function Sales(){

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
        <h1 className="text-center text-sm md:text-2xl p-10 ">Sales & Marketting Specialist role.</h1>
        <div className="job-styl text-left text-sm md:ml-20 md:text-xl leading-10">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">SALES & MARKETING SPECIALIST </span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH(GRAPHIC DESIGN, FINE APPS OR A RELATED FIELD.)</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">3-5 LPA (BASED ON SALES)</span> </p>   
        </div>
        <div className="job-jd text-left text-sm md:mx-20 md:text-xl leading-10">
         <p className="font-bold mb-5">Job Description:</p>
         <p>As a Sales & Marketing Specialist at TAS INNOVATION, you will play a crucial role in sales & marketing and also customer management.We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in the Sales & marketing development field.</p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5">
            <li>Identify and pursue leads and prospects.</li>
            <li>
            Develop and maintain client relationships. 
            </li>
            <li>
            Close sales deals and meet targets
            </li>
            <li>
            Provide product/service information and solutions.
            </li>
            <li>
            Prepare and deliver sales presentations.
            </li>
            <li>
            Develop marketing strategies and campaigns. 
            </li>
            <li>
            Create and manage marketing materials and content.  
            </li>
             <li >
             Conduct market research and competitor analysis.
             </li>
             <li>
             Implement digital marketing initiatives.
             </li>
             <li>
             Monitor and analyze campaign performance.
             </li>
             <li>
             Generate and nurture leads for the sales team.
             </li>
        </div>
        <p className="font-bold my-5">Qualifications:</p>
        <div className="md:ml-5 ">
            <li>
            A {`Bachelor's`} degree in marketing, business or related field
            </li>
            <li>
            Minimum of 5 projects experience in marketing and sales 
            </li>
            <li>
            Proven track record of achieving sales targets
            </li>
            <li>
            Excellent communication and presentation skills
            </li>
            <li>
            Strong analytical and problem-solving skills
            </li>
            <li>
            Familiarity with various marketing elements
            </li>
            <li>
            Marketing data analytics and marketing tools experience 
            </li>
            <li>
            Marketing software knowledge
            </li>
            
        </div>
        <p>If {`you're`} Sales & Marketing Specialist looking to join a dynamic and innovative team, apply now and be part of TAS {`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3 job-button" onClick={handleClick}>
                Apply Now
              </button>
         </p>
        
        
        
        </>
    )
}