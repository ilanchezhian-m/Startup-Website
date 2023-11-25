import { useNavigate  } from 'react-router-dom';

export function IEEE(){

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
        <h1 className="text-center text-sm md:text-2xl p-10 ">IEEE Paper Specialist role</h1>
        <div className="job-styl text-sm text-left md:ml-20 md:text-xl leading-10">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">IEEE PAPER SPECIALIST</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH/{`MASTER'S`} OR ( PH.D. IN A RELEVANT FIELD , OFTEN WITH RESEARCH EXPERIENCE)</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">2.5-5 LPA</span> </p>   
        </div>
        <div className="job-jd text-sm text-left md:mx-20 md:text-xl ">
         <p className="font-bold mb-5">Job Description:</p>
         <p>As an IEEE Paper Specialist at TAS INNOVATION, you will play a vital role in crafting responsive, attractive, and technically sound IEEE research papers. We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in all fields.</p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5">
            <li>
            Author high-quality IEEE research papers on cutting-edge topics, ensuring accuracy, clarity, and adherence to IEEE standards.
            </li>
            <li>
            Stay updated with recent advancements and technologies in the field of specialization to produce relevant and impactful research papers.
            </li>
            <li>
            Conduct comprehensive literature reviews to identify gaps in existing research and contribute to the development of innovative ideas.
            </li>
            <li>
            Analyze and interpret research data, experimental results, and findings, presenting them effectively in research papers. 
            </li>
            <li>
            Create graphical representations, charts, and diagrams to enhance the presentation of research data.
            </li>
        </div>
        
        <p className="font-bold my-5">Qualifications:</p>
        <div className="md:ml-5">
            <li>
            {`Bachelor's`} degree from Engineering, Computer Sciences and Information Technology, Physical Sciences, Biological and Medical Sciences, Mathematics, Technical Communications, Education, Management, and Law and Policy. 
            </li>
            <li>
            Minimum of 5 IEEE research papers in your portfolio that demonstrate your ability to write responsive, attractive, and technically sound papers. 
            </li>
            <li>
            A strong background in the specific field of specialization. 
            </li>
            <li>
            Excellent written and verbal communication skills. 
            </li>
            <li>
            Proficiency in relevant research tools and software. 
            </li>
            <li>
            Strong time management and project management skills.  
            </li>
        </div>
        <p>If {`you're`} a passionate IEEE Paper Specialist looking to join a dynamic and innovative team, apply now and be part of TAS{`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3 job-button" onClick={handleClick}>
                Apply Now
              </button>
         </p>
        
        
        
        </>
    )
}