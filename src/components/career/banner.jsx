import { Text } from "../text"

export const CareersBanner =()=>{
    return(
    <>
    <div 
        className="w-100 relative introContainer flex flex-column justify-center lg:pt-[23rem] xl:pt-[23rem] md:pt-[23rem] sm:pt-[10rem] xs:pt-[10rem]"
    >
        <div className="CareersBg">
        </div>
        <div className="introContent px-2 m-auto lg:w-8/12 xl:w-8/12 md:w-8/12 sm:w-full xs:w-full xxs:w-full xxxs:w-full">
            <div>
                <div className="flex flex-col justify-center items-center mb-2">
                    <Text
                        style="text-white mb-4 lg:text-xl xl:text-xl md:text-xl sm:text-md xs:text-md text-center font-semibold"
                        value="Careers At Zefa"
                    />
                    <div className="flex flex-col justify-center items-center xl:mb-[8rem] lg:mb-[8rem] md:mb-[8rem] sm:mb-[3rem] xs:mb-[3rem]">
                        <div className="flex flex-wrap flex-row justify-center mb-4">
                            <span className="me-4 lg:text-6xl xl:text-6xl md:text-6xl sm:text-4xl xs:text-4xl text-white font-semibold text-center">
                            Join our team at
                            </span>
                            <span className="me-4 lg:text-6xl xl:text-6xl md:text-6xl sm:text-4xl xs:text-4xl c-olive font-semibold text-center">
                            Zefa MfB
                            </span>
                        </div>
                        <div className="bg-white w-[8rem] h-[0.2rem]"></div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-2 ">
                        <div className="flex flex-wrap flex-row justify-center items-center">
                            <span className="me-4">
                                Home
                            </span>
                            <span className="me-4">
                                -
                            </span>
                            <span className="c-brown">
                            Career
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </>
    )
}