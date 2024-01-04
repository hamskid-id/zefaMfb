import { useNavigate } from "react-router-dom";
import { Text } from "../components/text";

export const PageNotFound =()=>{
    const navigate = useNavigate();
    return(
        <div className="m-auto flex flex-col justify-center items-center p-4 h-screen">
            <div className="m-auto flex flex-col justify-center items-center">
                <Text
                    style="text-4xl font-extrabold text-black mb-2"
                    value="404"
                />
                <Text
                    style="text-xl font-semibold text-black mb-2"
                    value="Page Not Found"
                />
                <button
                    onClick={()=>navigate("/")} 
                    className="bg-green text-white rounded-md p-[0.9rem] lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm cursor">Back to Homepage</button>
           
            </div>
        </div>
    )
}