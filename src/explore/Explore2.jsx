import { Bottom } from "../components/Bottom";
import { Footer } from "../components/Footer";
import iot2 from "/src/assets/Iot2.png";



export function Explore2(){
    return(
        <>
         <div className=" text-center ">

            <h1 className="text-3xl py-10">
            Shaping a Sustainable Future Through Power & IoT
            </h1>

             <img src={iot2} alt="" className="w-screen" />

            <h1 className="py-10 text-3xl">
            Smart Technologies Unleashed
            </h1>

                <p className="para mx-20 pb-10">
                At Smart Technologies Unleashed, we are committed to pioneering the future by harnessing the potential of smart technologies to shape a sustainable and connected world. We believe that innovation, combined with the power of the Internet of Things (IoT), holds the key to addressing the most pressing challenges of our time.
                </p>

            <h1 className="text-3xl pb-10">Our Vision</h1>
                <p className=" para mx-20 pb-10">
                Our vision is to create a world where technology not only simplifies our lives but also makes a positive impact on our environment. We are on a mission to leverage the latest advances in IoT and power solutions to build a more sustainable future for all.
                </p>
            <h1 className="text-3xl pb-10">
            What We Offer
            </h1>
            <p className="para pb-1 font-bold">IOT SOLUTIONS</p>
                <p className="para mx-20 pb-10">
                Discover the limitless possibilities of IoT with our cutting-edge solutions. From smart cities to precision agriculture, we help industries connect, collect, and analyze data to make informed decisions and reduce their environmental footprint. 
                </p>
            <p className=" para pb-1 font-bold">POWER INNOVATIONS</p>
                <p className="para mx-20 pb-10">
                Powering the future with renewable and efficient solutions is at the heart of what we do. Our power innovations are designed to reduce energy consumption, lower costs, and minimize environmental impact. 
                </p>
            <p className="para pb-1 font-bold">SMART TECHNOLOGY INTEGRATION</p>
                <p className="para mx-20 pb-10">
                Unlock the potential of your business with our smart technology integration. We bring efficiency, automation, and intelligence to your operations, making them more sustainable and future-ready.
                </p>
            <h1 className="pb-10 text-3xl">
            WHY CHOOSE US
            </h1>
            <div className="para mx-20">
                <p className="pb-5"><span className="font-bold">Innovation leaders:</span>We stay at the forefront of technological advancements, ensuring that your business remains on the cutting edge.
                </p>
                <p className="pb-5">
                <span className="font-bold">Sustainability Champions:</span> Our solutions are designed to promote Eco-friendly practices and reduce the carbon footprint.
                </p>
                <p className="pb-5">
                <span className="font-bold">Reliable Partners:</span> Count on us for dependable, secure, and scalable technology solutions that meet your unique needs.
                </p>
                <p className="pb-10">
                <span className="font-bold">Future-Ready:</span> We help you prepare for the challenges and opportunities of tomorrow with forward-thinking solutions.
                </p>
            <h1 className="text-3xl pb-10">JOIN US ON THE JOURNEY</h1>
                <p className="para pb-10">
                EEmbrace the future with us at Smart Technologies Unleashed. Whether {`you're`} a business looking to enhance sustainability or an individual ready to embark on a connected lifestyle, {`we're`} here to guide you on this exciting journey.
                </p>
            </div>
            <Bottom/>
            <Footer/>




</div>
        
        
        </>
    )
}