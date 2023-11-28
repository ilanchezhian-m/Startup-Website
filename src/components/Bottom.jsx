import { NavLink, Outlet, useNavigate ,useLocation } from 'react-router-dom';
// import { useState } from 'react';
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import img5 from "/src/assets/image5.png";
// import Twitter from "/src/assets/Twitter.png";
// import fb from "/src/assets/facebook.png"
// import insta from "/src/assets/Instagram.png"
// import linkedin from "/src/assets/Linkedin.png"
// import youtube from "/src/assets/Youtube.png"
// import whatsapp from "/src/assets/Whatsapp.png" 


export function Bottom() {
  const navigate = useNavigate();
  const location = useLocation();
// jobs carrer page
  const handleClick = () => {
    // Check if the current route is /carrer
    if (location.pathname === '/carrer') {
      // Navigate to the section with smooth scrolling
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
      // Navigate to the section with smooth scrolling
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
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   mobile: '',
  //   message: '',
  // });

  // const handleInputChange = (e, fieldName) => {
  //   const { value } = e.target;
  //   setFormData({ ...formData, [fieldName]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:5173/src/Server.mjs', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Email sent successfully!');
  //       // You can add logic to handle success (e.g., show a success message)
  //     } else {
  //       console.error('Failed to send email');
  //       // You can add logic to handle failure (e.g., show an error message)
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  
  return (  
    <>
    
      <div className="align-items flex-1">
      <div className="bg-black text-white py-10 flex-row px-1 pl-2 md:pl-10 justify-center">
              <div className="flex justify-center">
              <h4 className="message-color inline-block py-2 px-2 md:py-5 md:px-20 alfa text-xs md:text-xl now justify-center">
                FEEL FREE TO CONNECT WITH US
              </h4>
              </div>

              <h4 className="text-xs md:text-xl py-5 text-center">
                Welcome to TAS innovation. Our team will response within 24 hours
              </h4>

        <div className="flex bottom justify-center ">
        {/* onSubmit={handleSubmit} */}
          <form  >
            <fieldset>
              <p>
                <input
                  type="text"
                  id="name"
                  required="on"
                  autoComplete="on"
                  placeholder="Your Name"
                  // value={formData.name} 
                  // onChange={(e) => handleInputChange(e, 'name')}
                  className="rounded mt-4 px-2 text-black md:pr-20 md:py-2 "
                />
                
              </p>

              <p>
                <input
                  type="email"
                  id="email"
                  required="on"
                  autoComplete="on"
                  placeholder="Mail"
                  // value={formData.email} 
                  // onChange={(e) => handleInputChange(e, 'email')}
                  className="rounded mt-4 px-2 text-black md:pr-20 md:py-2 "
                />
              </p>

              <p>
                <input
                  type="tel"
                  id="mobile"
                  required="on"
                  autoComplete="on"
                  placeholder="Mobile"
                  // value={formData.mobile} 
                  // onChange={(e) => handleInputChange(e, 'mobile')} 
                  className="rounded mt-4 px-2 text-black md:pr-20 md:py-2"
                />
              </p>

              <p>
                <input
                  type="text"
                  id="message"
                  required="on"
                  autoComplete="on"
                  placeholder="write your message"
                  // value={formData.message} 
                  // onChange={(e) => handleInputChange(e, 'message')}
                  className="rounded mt-4 px-2 text-black md:pr-20 py-4 md:py-8 "
                />
              </p>

              <button className="text-xs md:text-base mt-5 py-3 px-4 message-color alef-style rounded font-bold alef-style text-left send-message " >
                SEND MESSAGE
              </button>
            </fieldset>
          </form>
       

          <img src={img5} alt="" className="w-[100px] h-[300px] md:w-[533px] md:h-[622px]  " /> 

        </div>
      </div>
      </div>
     
      <br/>

      <div className=" text-sm flex flex-col mx-3 md:flex-row md:text-xl justify-evenly bottom-aleo">
          <div className="leading-10 text-left">
          <p className="font-bold">Company</p>
         <nav>
              <p><NavLink target='_blank' to="/" className='bottom-style' onClick={() => {  window.scrollTo(0, 0); }}>Home</NavLink></p>
              <p><NavLink target='_blank' to="../carrer" className='bottom-style' onClick={() => { window.scrollTo(0, 0);}}>Carrers</NavLink></p>
              <p><NavLink target='_blank' to="../service" className='bottom-style' onClick={() =>{ window.scrollTo(0, 0);}}>Services</NavLink></p>
              <p><NavLink target='_blank' to="../about" className='bottom-style' onClick={() => { window.scrollTo(0, 0);}}>About us</NavLink></p>
          </nav> 
      </div>
  
             
      <div className="leading-10 text-left">
        <p className="font-bold">Support</p>
                  <p><NavLink target='_blank'  to="../terms" className='bottom-style' onClick={()=>{window.scrollTo(0,0);}}>Terms of use</NavLink></p>
                  <p><NavLink target='_blank' to="../private" className='bottom-style' onClick={()=>{window.scrollTo(0,0);}}>Privacy policy</NavLink></p>
                  <p><NavLink target='_blank' to ="../cookie" className='bottom-style' onClick={()=>{window.scrollTo(0,0);}}>Cookie policy</NavLink></p>
      </div>

      {/* navigation to the exact locations*/}
  <div className="leading-10 text-left">
        <p className="font-bold">Students</p>
        <p><NavLink to="../carrer" className='bottom-style' onClick={handleClick}>Jobs</NavLink></p>
        <p><NavLink to="../courses" className='bottom-style' onClick={handleClick1}>Internships</NavLink></p>
        <p><NavLink to="../courses"  className='bottom-style' onClick={()=>{window.scrollTo(0,0);}}>Course</NavLink></p>
        <p><NavLink className='bottom-style'>Training & certifications</NavLink></p>
  </div>

  <div className="leading-10 text-left">
    <p className="font-bold">Contact Us</p>
    <p className='bottom-style'>+91 8072877622</p>
    <p className='bottom-style'>+91 6380654780</p>
    <p className='bottom-style'>Email</p>
    <p className='bottom-style'>Support@tasinnovation.com</p>
  </div>

</div>
        <div className="flex justify-evenly mx-5 my-8" >
            < a href="https://twitter.com/TasInnovations?t=REgrY43arLI1-Z0bYRlQGw&s=09" rel="noreferrer" target='_blank' >
                  <BsTwitterX className=' h-[40px] w-[35px] bottom-fontstyle' />
           </a>
          <a href="https://www.facebook.com/profile.php?id=100086967900946" rel="noreferrer" target='_blank'>
                <BsFacebook className='h-[40px] w-[35px] bottom-fontstyle'  />
          </a>
          <a href="https://instagram.com/tas.innovation?igshid=OGQ5ZDc2ODk2ZA==" rel="noreferrer" target='_blank'>
                <RiInstagramFill  className='h-[40px] w-[35px] bottom-fontstyle' />
          </a>
          <a href="https://www.linkedin.com/company/tas-innovation/" rel="noreferrer" target='_blank'>
               <BsLinkedin className='h-[40px] w-[35px] bottom-fontstyle' />
          </a>
          <a href="https://youtube.com/@tasinnovation6973" rel="noreferrer" target='_blank'>
                <BsYoutube className='h-[40px] w-[35px] bottom-fontstyle' />
                
          </a>
          <a href="https://chat.whatsapp.com/FPMMtY1Cvf1LFTjOjBWGol" rel="noreferrer" target='_blank'>
                <IoLogoWhatsapp  className='h-[40px] w-[35px] bottom-fontstyle'/>
          </a>

        </div>
        
        <Outlet />
       
    </>
  );
}
