import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Text } from "./text";

export const Footer =()=>{
    const navigate = useNavigate();
    return(
        <div className="bg-brown lg:px-24 lg:py-14 xl:py-14 md:py-14 sm:py-4 xs:py-4 xl:px-24 md:px-4 sm:px-4 xs:px-4">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:gap-8 xl:gap-8 md:gap-2 sm:gap-2 xs:gap-2">
            <div>   
                <div>
                    <img
                        src="https://zefamfb.com/images/zefa-normal.png"
                        alt="object not found"
                        className="w-[14rem]"
                    />
                </div>
                <ul className="list-disc">
                    <li className="text-lg">Quick Links</li>
                    <li><Link to="" className="text-white text-sm">Open an Account</Link></li>
                    <li><Link to="" className="text-white text-sm">Apply for Loan</Link></li>
                    <li><Link to="" className="text-white text-sm">Our Story</Link></li>
                    <li><Link to="" className="text-white text-sm">Career</Link></li>
                    <li className="text-white text-sm">© 2023. All rights reserved</li>
                </ul>
            </div> 
            <div>
                <Text
                    style="text-white tex-md text-start mb-2 text-lg"
                    value="CLOSE TO YOU"
                />
                <div className="mb-2">
                    <img
                        src="https://zefamfb.com/images/footer_map.png"
                        alt="object not found"
                        className="w-full"
                    />
                </div>
                <div>
                    <button
                        onClick={()=>navigate("/contact")} 
                        className="bg-green text-white rounded-md py-2 px-4 text-md cursor text-center w-full">Find Zefa MFB</button>
                </div>
            </div>
            <div>
                <ul className="list-disc">
                    <li className="text-lg mb-4">AVAILABLE ALWAYS</li>
                    <li className="mb-2 text-sm">Customer service center</li>
                    <li className="mb-2 text-sm">Weekdays 08.00 am - 04:00 pm</li>
                    <li className="mb-2 text-sm">0907 368 5511</li>
                    <li className="mb-2 text-sm">0903 995 2377</li>
                    <li className="mb-2 text-sm"><a href="zefamfb@gmail.com" className="text-none text-white text-sm">Feedback/Mail</a></li>
                </ul>
                <div className="flex flex-wrap flex-row">
                    <span className="me-4">
                        <a href="http://www.linkedin.com/in/zefamfb-ltd-0b5b691b5"><AiOutlineLinkedin size="1.5rem" color="white"/></a>
                    </span>
                    <span className="me-4">
                        <a href="https://twitter.com/zefamfb"><AiOutlineTwitter size="1.5rem" color="white" /></a>
                    </span>
                    <span className="me-4">
                        <a href="https://www.facebook.com/Zefa-Microfinance-Bank-104433207967999"><AiOutlineFacebook size="1.5rem" color="white"/></a>
                    </span>
                    <span className="me-4">
                        <a href="https://www.instagram.com/zefamfb/?hl=en"><AiOutlineInstagram size="1.5rem" color="white" /></a>
                    </span>
                </div>
            </div>
         </div>
         <Text
            style="text-sm text-center mt-8"
            value="Licenced By Central Bank of Nigeria."
        />
         </div>
    )
}