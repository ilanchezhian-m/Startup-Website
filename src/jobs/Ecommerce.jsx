import { useNavigate  } from 'react-router-dom';


export function Ecommerce(){

  
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
        <h1 className="text-center text-sm md:text-2xl p-10 ">Ecommerce Manager role</h1>
        <div className="job-styl text-left md:ml-20 md:text-xl leading">
            <p className="mb-4">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-4">JOB TITLE: <span className="font-bold">E-COMMERCE MANAGER </span> </p>
            <p className="mb-4">EDUCATION:<span className="font-bold">B.E/B.TECH(BUSINESS,MARKETING,OR E-COMMERCE.)</span> </p>
            <p className="mb-4">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span> </p>
            <p className="mb-4">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-4">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-4">SALARY: <span className="font-bold">3-5 LPA (BASED ON SALES)</span> </p>   
        </div>
        <div className="job-jd text-left md:mx-20 md:text-xl ">
         <p className="font-bold">Job Description:</p>
         <p> As a E-commerce manager at TAS INNOVATION, you will play a crucial role in E-commerce building.We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in the E-commerce field.</p>
        <p className="font-bold">Roles & Qualification:</p>
        <p className="font-bold">Responsibilities:</p>
        <div className="ml-5 mb-5">
            <li> E-commerce strategy</li>
            <li> Website Management </li>
            <li> Product Management</li>
            <li> Inventory Management </li>
            <li> Online Marketing </li>
            <li> Customer Experience</li>
            <li> Conversion Rate Optimization (CRO)</li>
            <li> Analytics and Reporting</li>
            <li> Payment Processing</li>
            <li> Shipping and Fulfillment </li>
            <li> Customer Service</li>
            <li> Security</li>
            <li> Competitor Analysis</li>
            <li> Vendor Management</li>
            <li>Budget Management</li>
            <li>Marketplace Expansion</li>

        </div>
        <p className="font-bold">Qualifications:</p>
        <div className="ml-5">
          <li>A {`bachelor's`} degree in business, marketing, information technology, communications, interactive marketing, or a related field.  </li>
          <li>Completion of a pertinent sales qualification is preferred. </li>
          <li> Extensive experience as an e-commerce manager. </li>
          <li> Strong experience working with high volume business-to-consumer e-Commerce sites.</li>
          <li> Strong analytical / quantitative skills with excellent knowledge of excel.</li>
          <li> Dynamic, entrepreneurial personality with the ability to manage multiple tasks with good organization and prioritization skills</li>
            
        </div>
        <p>If {`you're`} a passionate E-commerce manager looking to join a dynamic and innovative team, apply now and be part of TAS {`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
                     <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3" onClick={handleClick}>
                    Apply Now
                    </button>
         </p>
        
        </>
    )
}