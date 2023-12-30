import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai"
import { Text } from "../text"

export const AccountFormLayout =({
    title,
    children
})=>{
    return(
        <div className="py-14 px-4 xl:w-[73%] lg:w-[73%] md:w-[73%] sm:w-100%] xs:w-[100%] flex flex-col justify-center items-center m-auto">
            <Text
                style="lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl xs:text-xl c-brown font-medium mb-2 text-center"
                value="Select the type of account you would like to open "
            />
            <Text
                style="lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl xs:text-xl text-black font-semibold mb-8 text-center"
                value="Kindly fill all form fields with valid information"
            />
            {/* <div className="flex flex-row">
                <span>Note:</span>
                <span><AiTwotoneDislike color="red" size="1.5rem"/></span>
                <span>Should change to</span>
                <span><AiTwotoneLike color="blue" size="1.5rem"/></span>
            </div> */}
            <div className="w-full bg-white rounded-md p-4 my-4">
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {
                        [
                            "PERSONAL ACCOUNT",
                            "CORPORATE ACCOUNT"
                        ].map((heading,index)=>{
                            return(
                                <div 
                                    key={index}
                                    className={`${heading ==title?"bg-green text-white rounded-md":"text-black"} lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-center p-4`}
                                >
                                    {heading}
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}