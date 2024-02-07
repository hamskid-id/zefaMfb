import { Text } from "../text"

export const Banner =({
    img,
    title,
    subTitle
})=>{
    return(
    <>
    <div 
        style={{
            backgroundImage:`url(${img})`,
            transform: `translate3d(0px, 0px, 0px) scale(1.02944, 1.02944)`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            transformOrigin: `0% 0% 0px`
        }}
        className=" w-100 relative introContainer flex flex-column justify-center lg:pt-[23rem] xl:pt-[23rem] md:pt-[23rem] sm:pt-[14rem] xs:pt-[14rem] px-4"
    >
        <div className="SlideBg">
        </div>
        <div className="introContent px-2 m-auto lg:p-20 xl:p-20 md:p-20 sm:p-2 xs:p-2 xxs:p-2 xxxs:p-2 w-full">
            <div>
                <div className="flex flex-col justify-start items-start mb-2">
                    <div className="flex flex-col justify-start items-start xl:mb-[8rem] lg:mb-[8rem] md:mb-[8rem] sm:mb-[3rem] xs:mb-[3rem]">
                        <div className="flex flex-col justify-start mb-4 translate-text">
                            <Text
                                style="lg:text-6xl xl:text-6xl md:text-6xl sm:text-xl xs:text-xl text-start font-semibold text-start mb-2"
                                value={title}
                            />
                            <Text
                                style="c-brown lg:text-6xl xl:text-6xl md:text-6xl sm:text-xl xs:text-xl font-semibold text-start"
                                value={subTitle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </>
    )
}