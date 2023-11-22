import { NavLink, Outlet, useNavigate ,useLocation  } from 'react-router-dom';


import img5 from "/src/assets/image5.png";
import Twitter from "/src/assets/Twitter.png";
import fb from "/src/assets/facebook.png"
import insta from "/src/assets/Instagram.png"
import linkedin from "/src/assets/Linkedin.png"
import youtube from "/src/assets/Youtube.png"
import whatsapp from "/src/assets/Whatsapp.png" 


export function Bottom() {
  const navigate = useNavigate();
  const location = useLocation();
// jobs carrer page
  const handleClick = () => {
    // Check if the current route is /carrer
    if (location.pathname === '/carrer') {
      // Navigate to the section without smooth scrolling
      const graphicSectionRef = document.getElementById("graphicSectionRef");
      if (graphicSectionRef) {
        graphicSectionRef.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not, navigate to /carrer
      navigate('/carrer');
      setTimeout(() => {
        // Navigate to the section without smooth scrolling
        const graphicSectionRef = document.getElementById("graphicSectionRef");
        if (graphicSectionRef) {
          graphicSectionRef.scrollIntoView({ behavior: 'smooth' });
        }
  }, 500);
}
  }
// intenship page
  const handleClick1 = () => {
    // Check if the current route is /carrer
    if (location.pathname === '/courses') {
      // Navigate to the section without smooth scrolling
      const graphicSectionRef = document.getElementById("graphicSectionRef");
      if (graphicSectionRef) {
        graphicSectionRef.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not, navigate to /carrer
      navigate('/courses');
      setTimeout(()=>{ 
        const graphicSectionRef = document.getElementById("graphicSectionRef");
      if (graphicSectionRef) {
        graphicSectionRef.scrollIntoView({ behavior: 'smooth' });
      }

      },500)
    }
  }

  
  return (  
    <>
    
      <div className="align-items flex-1">
      <div className="bg-black text-white py-10 flex-row px-1 pl-2 md:pl-10 justify-center">
              <div className="flex justify-center">
              <h4 className="bg-blue-700 inline-block py-2 px-2 md:py-5 md:px-20 alfa text-xs md:text-xl now justify-center">
                FEEL FREE TO CONNECT WITH US
              </h4>
              </div>

              <h4 className="text-xs md:text-xl py-5 text-center">
                Welcome to TAS innovation. Our team will response within 24 hours
              </h4>

        <div className="flex bottom justify-center">
          <form>
            <fieldset>
              <p>
                <input
                  type="text"
                  id="name"
                  autoComplete="on"
                  placeholder="your Name"
                  className="rounded mt-5 text-black pr-0 pl-1 md:pr-10 md:px-4 py-1"
                />
                <br />
              </p>

              <p>
                <input
                  type="email"
                  id="email"
                  required
                  autoComplete="on"
                  placeholder="Mail"
                  className="rounded mt-5 pr-0 pl-1 md:pr-10 md:px-4 py-1"
                />
              </p>

              <p>
                <input
                  type="tel"
                  id="number"
                  required
                  autoComplete="on"
                  placeholder="Mobile"
                  className="rounded mt-5 text-black pr-0 pl-1 md:pr-10 md:px-4 py-1 "
                />
              </p>

              <p>
                <input
                  type="text"
                  id="message"
                  required
                  autoComplete="on"
                  placeholder="write your message"
                  className="rounded mt-4 py-3 pr-0 pl-1 text-black md:px-4 md:pr-10 md:py:7"
                />
              </p>

              <button className="text-xs md:text-base mt-5 py-3 px-4 bg-blue-700 rounded font-bold alef-style text-left">
                SEND MESSAGE
              </button>
            </fieldset>
          </form>

          <img src={img5} alt="" className="w-[100px] h-[300px] md:w-[533px] md:h-[622px]  " /> 

        </div>
      </div>
      </div>
     
      <br/>

      <div className=" text-sm flex flex-col mx-2 md:flex-row md:text-xl justify-evenly bottom-aleo">
          <div className="leading-10 text-left">
          <p className="font-bold">Company</p>
         <nav>
              <p><NavLink to="/" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>Home</NavLink></p>
              <p><NavLink to="../carrer" onClick={() => {navigate('/carrer'); window.scrollTo(0, 0);}}>Carrers</NavLink></p>
              <p><NavLink to="../service" onClick={() =>{navigate('/service'); window.scrollTo(0, 0);}}>Services</NavLink></p>
              <p><NavLink to="../about" onClick={() => {navigate('/about'); window.scrollTo(0, 0);}}>About us</NavLink></p>
          </nav> 
      </div>
  
             
      <div className="leading-10 text-left">
        <p className="font-bold">Support</p>
                  <p><NavLink to="../terms" onClick={()=>{navigate('./terms');window.scrollTo(0,0);}}>Terms of use</NavLink></p>
                  <p><NavLink to="../private" onClick={()=>{navigate('./private');window.scrollTo(0,0);}}>Privacy policy</NavLink></p>
                  <p><NavLink to ="../cookie" onClick={()=>{navigate('./cookie');window.scrollTo(0,0);}}>Cookie policy</NavLink></p>
      </div>

      {/* navigation to the exact locations*/}
  <div className="leading-10 text-left">
        <p className="font-bold">Students</p>
        <p><NavLink to="../carrer" onClick={handleClick}>Jobs</NavLink></p>
        <p><NavLink to="../courses" onClick={handleClick1}>Internships</NavLink></p>
        <p><NavLink to="../courses"  onClick={()=>{navigate('./courses');window.scrollTo(0,0);}}>Course</NavLink></p>
        <p><NavLink>Training & certifications</NavLink></p>
  </div>

  <div className="leading-10 text-left">
    <p className="font-bold">Contact Us</p>
    <p>+91 8072877622</p>
    <p>+91 6380654780</p>
    <p>Email</p>
    <p>Support@tasinnovation.com</p>
  </div>

</div>
        <div className="flex justify-evenly mx-5 my-8">
            <a href="https://twitter.com/TasInnovations?t=REgrY43arLI1-Z0bYRlQGw&s=09">
           <      img src={Twitter} alt="twitter x logo" />
           </a>
          <a href="https://www.facebook.com/profile.php?id=100086967900946">
                     <img src={fb} alt="facebook logo" />
          </a>
          <a href="https://instagram.com/tas.innovation?igshid=OGQ5ZDc2ODk2ZA==">
                    <img src={insta} alt="instagram logo" />
          </a>
          <a href="https://www.linkedin.com/company/tas-innovation/">
                    <img src={linkedin} alt="linkedin logo" />
          </a>
          <a href="https://youtube.com/@tasinnovation6973">
                  <img src={youtube} alt="youtube logo" />
          </a>
          <a href="https://chat.whatsapp.com/FPMMtY1Cvf1LFTjOjBWGol">
                  <img src={whatsapp} alt="whatsapp logo" />
          </a>

        </div>
        
        <Outlet />
       
    </>
  );
}
