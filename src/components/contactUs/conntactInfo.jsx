import { AiOutlineMail,AiOutlinePhone } from "react-icons/ai";
import { FaDroplet } from "react-icons/fa6";
import { Text } from "../text";

export const ContactInfo =()=>{
    return(
        <div className="lg:px-24 py-14 xl:px-24 md:px-4 sm:px-4 xs:px-2 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:gap-12 xl:gap-12 md:gap-2 sm:gap-2 xs:gap-2">
            <div className='rounded-tl-lg rounded-br-lg flex flex-col justify-center items-center lg:p-8 xl:p-8 md:p-8 sm:p-4 xs:p-4 bg-green'>
                <AiOutlinePhone
                    size="2rem"
                    className="mb-4"
                    color="white"
                />
                <Text
                    style="mb-4 text-white text-center"
                    value="Phone : +234 9039952377"
                />
                <Text
                    style="mb-4 text-white text-center"
                    value="Phone : +234 9073685511"
                />
            </div>
            <div className='flex flex-col justify-center items-center lg:p-8 xl:p-8 md:p-8 sm:p-4 xs:p-4 bg-white'>
                <AiOutlineMail 
                    size="2rem"
                    className="mb-4"
                    color="black"
                />
                <Text
                    style="mb-4 text-black text-center"
                    value="Send us a mail"
                />
                <Text
                    style="mb-4 text-black text-center"
                    value="Email: bank@zefamfb.com"
                />
            </div>
            <div className=' rounded-tr-lg rounded-bl-lg flex flex-col justify-center items-center lg:p-8 xl:p-8 md:p-8 sm:p-4 xs:p-4 bg-olive'>
                <FaDroplet
                    size="2rem"
                    className="mb-4"
                    color="white"
                />
                <Text
                    style="mb-4 text-white text-center"
                    value="27 Olambe Road, Olambe, Ifo LGA,"
                />
                <Text
                    style="mb-4 text-white text-center"
                    value="Ogun State, Nigeria"
                />
            </div>
        </div>
    )
}