import { useNavigate  } from 'react-router-dom';


export function Food(){


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
        <h1 className="text-center text-sm md:text-2xl p-10 ">Food Product Developer role</h1>
        <div className="job-styl text-sm text-left md:ml-20 md:text-xl ">
            <p className="mb-5">COMPANY: <span className="font-bold">TAS INNOVATION</span> </p>
            <p className="mb-5">JOB TITLE: <span className="font-bold">FOOD PRODUCT DEVELOPER</span> </p>
            <p className="mb-5">EDUCATION:<span className="font-bold">B.E/B.TECH(FOODSCIENCE,CULINARY ARTS,OR A RELATED FIELD).</span> </p>
            <p className="mb-5">EXPERIENCE: <span className="font-bold">MIN 2-3 YEARS OF EXPERIENCE </span> </p>
            <p className="mb-5">LOCATION: <span className="font-bold">REMOTE</span> </p>
            <p className="mb-5">JOB TYPE: <span className="font-bold">FULL TIME </span> </p>
            <p className="mb-5">SALARY: <span className="font-bold">3-5 LPA</span> </p>   
        </div>
        <div className="job-jd text-left text-sm md:mx-20 md:text-xl ">
         <p className="font-bold mb-5">Job Description:</p>
         <p> As a Food Product Developer at TAS INNOVATION, you will play a crucial role in design and development of consumer products. Duties of this position include improving existing product designs and analyzing working concepts launched by competitors of similar products to match quality and performance. Depending on the industry and company, product designers may progress to a senior, executive or managerial role. technologies in the Instructor/Teaching field. </p>
        <p className="font-bold mb-5">Roles & Qualification:</p>
        <p className="font-bold mb-5">Responsibilities:</p>
        <div className="ml-5">

                <li>
                Create design concepts and drawings to determine the best product
                </li>
                <li>
                Present product ideas to relevant team members for brainstorming
                </li>
                <li>
                Suggest improvements to design and performance to product engineers
                </li>
                <li>
                Employ design concepts into functional prototypes 
                </li>
                <li>
                Perform research on product technologies and structures to implement into design concepts
                </li>
                <li>
                Maintain up to date on current industry trends and market conditions 
                </li>
                

        </div>
        
        <p className="font-bold">Qualifications:</p>
        <div className="ml-5">
            <li>
            {`Bachelor's`} degree in Food Department and other relevant Department. 
            </li>
            <li>
            At least 2-3 years of industry experience in product development with relevant experience with snacks (fruit snacks, bars, roasted snacks), highly desirable.
            </li>
            <li>
            Relevant work experience as a product designer is preferred 
            </li>
            <li>
            Exceptional verbal and written communication skills 
            </li>
            <li>
            Excellent eye for aesthetic design and customer appeal 
            </li>
            <li>
            Good understanding of color science and combinations 
            </li>
            <li>
            Artistic and innovative flair 
            </li>
            <li>
            Excellent attention to detail 
            </li>
            <li>
            Meticulous and diligent 
            </li>
            <li>
            Strong knowledge of the industry and market trends 
            </li>
            
        </div>
        <p>If {`you're`}a Passionate Food Product Developer looking to join a dynamic and innovative team, apply now and be part of TAS{`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
            <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3" onClick={handleClick}>
                Apply Now
            </button>
         </p>
        
        
        
        
        
        </>
    )
}