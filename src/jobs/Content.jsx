
import { useNavigate  } from 'react-router-dom';

export function Content(){

 
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
         <h1 className="text-center text-sm md:text-2xl py-10">Content Creator role</h1>
         <div className="job-styl text-left text-sm md:ml-20 md:text-xl leading-loose">
  <p className="mb-4">COMPANY: <span className="font-bold">TAS INNOVATION</span></p>
  <p className="mb-4">JOB TITLE: <span className="font-bold">CONTENT CREATOR</span></p>
  <p className="mb-4">EDUCATION:<span className="font-bold">B.E/B.TECH
    <br />(JOURNALISM, COMMUNICATIONS, ENGLISH, OR A RELATED FIELD)</span></p>
  <p className="mb-4">EXPERIENCE: <span className="font-bold">MIN 5+ PROJECTS(FRESHER) </span></p>
  <p className="mb-4">LOCATION: <span className="font-bold">REMOTE</span></p>
  <p className="mb-4">JOB TYPE: <span className="font-bold">FULL TIME </span></p>
  <p className="mb-4">SALARY: <span className="font-bold">2.5-5 LPA</span></p>
</div>

        <div className="job-jd text-left text-sm md:mx-20 md:text-xl leading-10">
         <p className="font-bold my-3">Job Description:</p>
         <p>  As a Content creator at TAS INNOVATION, you will play a crucial role in producing responsive, attractive, and engaging content using the latest technologies and trends.We are looking for candidates with a minimum of 5 projects under their belt who can work remotely and stay up-to-date with the latest technologies in the Content creating field. </p>
        <p className="font-bold my-5">Roles & Qualification:</p>
        <p className="font-bold">Responsibilities:</p>
        <div className="md:ml-5 my-5">

               <li>
               Create high-quality written, visual, or multimedia content for various platforms.
               </li>
                <li>
                Ensure content is responsive and optimized for different devices and screen sizes.
               </li>
               <li>
               Incorporate visually appealing elements like images, infographics, and videos. 
               </li>
                <li>
                Craft compelling narratives and stories to convey information effectively. 
               </li>
               <li>
               Optimize content for search engines (SEO) to improve visibility. 
               </li>
                <li>
                Manage and create content for social media platforms, including engagement. 
               </li>
               <li>
               Foster audience engagement through comments, responses, and discussions. 
               </li>
                <li>
                Stay updated on recent technologies and content creation trends. 
               </li>
               <li>
               Collaborate on content strategies aligned with organizational goals. 
               </li>

        </div>
        
        <p className="font-bold mb-5">Qualifications:</p>
        <div className="ml-5">
            <li>
            {`Bachelor's`} degree in Food Department and other relevant Department. 
            </li>
            <li>
            {`Bachelor’s `}degree in English, marketing, or a similar field. 
            </li>
            <li>
            Experience creating strong, engaging content. 
            </li>
            <li>
            A portfolio of applicable outputs. 
            </li>
            <li>
            An understanding of SEO best practices. 
            </li>
            <li>
            Demonstrated excellence in writing, proofreading, and editing. 
            </li>
            <li>
            Excellent research, organizational, and time management skills. 
            </li>
            <li>
            The capacity to work independently and collaboratively. 
            </li>
        </div>
        
        <p>If {`you're`} a passionate content creator looking to join a dynamic and innovative team, apply now and be part of TAS{`Innovation's`} exciting journey.</p>
         </div>
         <p className="text-center">
              <button className=" bg-black font-semibold text-white rounded-sm my-4 px-10 py-3" onClick={handleClick}>
              Apply Now
              </button>
         </p>
        
        
        
        
        
        
        </>
    )
}