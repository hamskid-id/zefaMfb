import { Text } from "../text"

export const ChairManMessageBanner =()=>{
    return(
    <>
    <div 
        className="w-100 relative introContainer flex flex-column justify-center lg:pt-[16rem] xl:pt-[16rem] md:pt-[16rem] sm:pt-[8rem] xs:pt-[8rem] lg:mt-auto xl:mt-auto md:mt-auto sm:mt-2 xs:mt-2"
    >
        <div className="introBg">
        </div>
        <div className="introContent px-2 m-auto lg:w-8/12 xl:w-8/12 md:w-8/12 sm:w-full xs:w-full xxs:w-full xxxs:w-full">
            <div>
                <div className="flex flex-col justify-center items-center mb-2">
                    <Text
                        style="text-white mb-4 lg:text-xl xl:text-xl md:text-xl sm:text-md xs:text-md text-center font-semibold"
                        value="Meet The Chairman"
                    />
                    <div className="flex flex-col justify-center items-center xl:mb-[8rem] lg:mb-[8rem] md:mb-[8rem] sm:mb-[3rem] xs:mb-[3rem]">
                        <div className="flex flex-wrap flex-row justify-center mb-4">
                            <span className="me-4 lg:text-6xl xl:text-6xl md:text-6xl sm:text-4xl xs:text-4xl text-white font-semibold text-center">
                            Chairman's message
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
                            Chairman's message
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