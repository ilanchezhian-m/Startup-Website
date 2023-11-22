import { useNavigate  } from 'react-router-dom';


export function Fashion(){


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
         <h1 className="text-center text-sm md:text-2xl p-10 ">Fashion Designer role</h1>
        <div className="job-styl text-sm text-left md:ml-20 md:text-xl ">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">FASHION DESIGNER</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH(FASHION DESIGNER OR A RELATED FIELD.)</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">3-5 LPA</span> </p>   
        </div>
        <div className="job-jd text-left md:mx-20 md:text-xl mb-5">
         <p className="font-bold mb-5">Job Description:</p>
         <p>As a Fashion Designer at TAS INNOVATION, you will play a crucial role in designing & developing styles which is current market treand.We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in the Fashion Designing field. </p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="md:ml-5 mb-5">
            <li> Trend Analysis and Research</li>
            <li> Sketching and Design Development </li>
            <li> Fabric and Material Selection</li>
            <li> Pattern Making and Prototyping </li>
            <li> Garment Construction and Sewing</li>
            <li> Color and Textile Coordination</li>
            <li> Fitting and Alterations</li>
            <li> Collection Planning and Presentation</li>
            <li> Fashion Show Preparation</li>
            <li> Collaboration with Suppliers and Manufacturers</li>
            <li> Quality Control and Inspection</li>
            <li> Cost Estimation and Budgeting</li>
            <li> Marketing and Promotion of Collections</li>
            <li> Keeping Up with Fashion Trends</li>
        </div>
        <p className="font-bold mb-5">Qualifications:</p>
        <div className="ml-5">
            <li>
            {`Bachelor's or Associate's`} degree in fashion design, fashion technology, textiles and fabric design or related fields.
            </li>
            <li>
            Ability to create eye-catching designs.
            </li>
            <li>
            A good eye for fashion.
            </li>
            <li>
            Deep knowledge of the fashion industry. 
            </li>
            <li>
            Incredible attention to detail.
            </li>
            <li>
            The willingness to go the extra mile.
            </li>
            <li>
            Incredible creative ability.
            </li>
            <li>
            Ability to work alone.
            </li>
            <li>
            Sustainability and Ethical Considerations 
            </li>
            <li>
            Communication with Retailers and Buyers
            </li>
            <li>
            Managing a Design Team (for senior roles)
            </li>
        </div>
        <p>If {`you're`} Fashion Designer looking to join a dynamic and innovative team, apply now and be part of TAS{`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
                    <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3" onClick={handleClick}>
                    Apply Now
                    </button>
         </p>
        
        
        </>
    )
}