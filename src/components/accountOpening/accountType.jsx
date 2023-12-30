import { useNavigate } from "react-router-dom";
import { Text } from "../text"
import { OpeningLayout } from "./Openinglayout"

export const AccountType =()=>{
    
    const navigate = useNavigate();
    return(
        <>
            <OpeningLayout
                title="Account Types"
            >
                <div className="lg:p-[12rem] xl:p-[12rem] md:p-[12rem] sm:p-4 xs:p-4 flex flex-col bg-green">
                    <div className="mb-8 bg-white rounded-md lg:p-8 xl:p-8 md:p-8 sm:p-4 xs:p-2">
                        <Text
                            style="font-semibold text-2xl text-start text-black mb-4"
                            value="Personal Account"
                        />
                        <ul className="list-disc leading-10">
                            <li className="lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-2 text-black">Individual Account (Savings or Current)</li>
                            <li className="lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-2 text-black">Salary Account (Savings or current)</li>
                            <li className="lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-2 text-black">Target Savings Account (Savings)</li>
                            <li className="lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-2 text-black mb-2">Regular Contribution Account-Daily, Weekly or monthly (Savings or Current)</li>
                        </ul>
                        <button
                            onClick={()=>navigate("/personal_form")} 
                            className="bg-green text-white rounded-md py-4 px-8 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-2 cursor">Open Personal Account</button>
                    </div>
                    <div className="mb-8 bg-white rounded-md lg:p-8 xl:p-8 md:p-8 sm:p-4 xs:p-2">
                        <Text
                            style="font-semibold text-2xl text-start text-black mb-4"
                            value="Corporate Account"
                        />
                        <ul className="list-disc leading-10">
                            <li className="lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-2 text-black">Business Account</li>
                            <li className="lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-2 text-black mb-2">Salary Account (Savings or current)</li>
                        </ul>
                        <button
                            onClick={()=>navigate("/personal_form")} 
                            className="bg-green text-white rounded-md py-4 px-8 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-2 cursor">Open Corporate Account</button>
                    </div>

                </div>
            </OpeningLayout>
        </>
    )
}