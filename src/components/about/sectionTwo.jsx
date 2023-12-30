import { useSearchParams } from "react-router-dom";
import { Text } from "../text"
import { useEffect, useRef } from "react";

export const AboutSectionTwo =()=>{
    const [searchParams ] = useSearchParams();
    const missionRef = useRef(null);
    const differentiatorRef = useRef(null);
    const valuesRef = useRef(null);
    const teamRef = useRef(null);
    useEffect(()=>{
        const tabToScroll = searchParams.get('tab')
        if(tabToScroll){
            switch(tabToScroll){
                case 'mission':(
                    missionRef.current.scrollIntoView({behavior:'smooth',block:'start'})
                )
                break;
                case 'differentiators':(
                    differentiatorRef.current.scrollIntoView({behavior:'smooth',block:'start'})
                )
                break;
                case 'our_core_values':(
                    valuesRef.current.scrollIntoView({behavior:'smooth',block:'start'})
                )
                break;
                case 'our_team':(
                    teamRef.current.scrollIntoView({behavior:'smooth',block:'start'})
                )
                break;
                default: return
            }
        }
    },[window.location.href])

    return(
        <div>
            
            <div className="lg:h-[15rem] xl:h-[15rem] md:h-[15rem] sm:h-[4rem] xs:h-[4rem] bg-green">
            </div>
            <div>
                <div className="lg:ps-[12rem] xl:ps-[12rem] md:ps-[12rem] sm:ps-[0rem] xs:ps-[0rem] lg:mb-14 xl:mb-14 md:mb-14 sm:mb-0 xs:mb-0">
                    <div className="section2-overlay lg:mt-[-8rem] xl:mt-[-8rem] md:mt-[-8rem] sm:mt-[0rem] xs:mt-[0rem] lg:p-[5rem] xl:p-[5rem] md:p-[5rem] sm:p-4 xs:p-2 xxs:p-2 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:gap-12 xl:gap-12 md:gap-2 sm:gap-2 xs:gap-2">
                        <div>
                            <Text
                                style="mt-2 text-black lg:text-4xl xl:text-4xl md:text-4xl sm:text-2xl xs:text-2xl text-start font-medium mb-2"
                                value="Who We Are"
                            />
                            <Text
                                style="text-black lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-start lg:mb-8 xl:mb-8 md:mb-8 sm:mb-4 xs:mb-4"
                                value="Zefa Microfinance Bank Limited is licensed by the Central Bank of Nigeria (CBN) to provide financial services towards achieving the Financial inclusion objectives of government."
                            />
                            <Text
                                style="text-black lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-start lg:mb-8 xl:mb-8 md:mb-8 sm:mb-4 xs:mb-4"
                                value="The bank commenced operations on February 18, 2018. Our vision is to become a leader and a major player in the microfinance sector of Nigerian economy."
                            />
                            <button className="bg-green text-white rounded-md py-4 px-8 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm cursor">Read more details</button>
                        </div>
                        <div className="bg-green flex flex-col items-center justify-center">
                            <div>
                                <img
                                    src="https://zefamfb.com/images/who-we-are.png"
                                    alt="object not found"
                                />
                            </div>
                        </div>
                    </div>
                    <Text
                        style="text-start lg:text-lg xl:text-lg md:text-lg sm:text-md xs:text-md lg:px-auto xl:px-auto md:px-auto sm:px-2 xs:px-2 text-black mt-4 font-semibold"
                        value="Since February 2018 Zefa Microfinace Bank has focused on supporting th dreams and aspirations of many financially excluded members of society."
                    />
                </div>
                <div className="lg:px-24 py-14 xl:px-24 md:px-4 sm:px-4 xs:px-2 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:gap-12 xl:gap-12 md:gap-2 sm:gap-2 xs:gap-2">
                    <div>
                        <img 
                            src="https://zefamfb.com/images/mission.png"
                            alt="object not found"
                            className="w-full"
                        />
                    </div>
                    <div 
                        ref={missionRef}
                    >
                        <Text
                            style="lg:text-4xl xl:text-4xl md:text-4xl smtext-2xl text-start text-black lg:mb-8 xl:mb-8 md:mb-8 sm:mb-4 xs:mb-4"
                            value="OUR MISSION"
                        />
                        <Text
                            style="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black mb-5"
                            value="ZEFA provides access to financing, though microcredits, to those who have a business idea or an on-going business or project but are not able to find access to the necessary funds through existing commercial banks. Their businesses are considered not bankable by the established commercial banks because they cannot meet the standard bank loan conditions"
                        />
                        <Text
                            style="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black mb-5"
                            value="ZEFA provides access to financing, though microcredits, to those who have a business idea or an on-going business or project but are not able to find access to the necessary funds through existing commercial banks. Their businesses are considered not bankable by the established commercial banks because they cannot meet the standard bank loan conditions"
                        />
                        <Text
                            style="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black mb-5"
                            value="By supporting entrepreneurship, ZEFA promotes self-employment, reduces unemployment and helps beneficiaries to achieve financial independence, so that they can offer socially and financially to the society."
                        />
                        <h6 className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black">Our Slogan is<b> "Zefa Microfinance Bank…… Supporting your dreams”</b></h6>
                    </div>
                </div>
                <div 
                    ref={differentiatorRef}
                    className="lg:px-24 xl:px-24 md:px-4 sm:px-4 xs:px-2 lg:mb-8 xl:mb-8 md:mb-8 sm:mb-4 xs:mb-4">
                    <Text
                        style="lg:text-4xl xl:text-4xl md:text-4xl smtext-2xl text-start text-black mb-4"
                        value="WHY WE ARE DIFFERENT"
                    />
                    <Text
                        style="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black mb-2"
                        value="Through our processes we build personalized relationships of support and trust through simple and effective procedures"
                    />
                    <ul className="list-disc">
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black">There is no discrimination in the type of legitimate business we support. Our support may range from salaries, equipment or working capital, as long as the customer can prove that this is necessary for the business or project.</li>
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black">We do not ask for shares or part ownership of the businesses we support. The entrepreneur is in the center of our efforts at all times.</li>
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black">Training, Supervision and support both before and after the disbursement are free of charge.</li>
                    </ul>
                </div>
                <div
                    ref={teamRef} 
                    className="lg:px-24 xl:px-24 md:px-4 sm:px-4 xs:px-2 lg:mb-8 xl:mb-8 md:mb-8 sm:mb-4 xs:mb-4">
                    <Text
                        style="lg:text-4xl xl:text-4xl md:text-4xl smtext-2xl text-start text-black mb-4"
                        value="THE TEAM"
                    />
                    <Text
                        style="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black mb-2"
                        value="We have eight fundamental values which are fixed and absolute and are foremost in our quest to realize our vision. All employees, managers and executives are responsible for making compliance a vital part of our business process to ensure sustainable success"
                    />
                </div>
                <div
                    ref={valuesRef} 
                    className="lg:px-24 xl:px-24 md:px-4 sm:px-4 xs:px-2 lg:mb-8 xl:mb-8 md:mb-8 sm:mb-4 xs:mb-4">
                    <Text
                        style="lg:text-4xl xl:text-4xl md:text-4xl smtext-2xl text-start text-black mb-4"
                        value="OUR CORE VALUES"
                    />
                    <Text
                        style="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black mb-2"
                        value="We have eight fundamental values which are fixed and absolute and are foremost in our quest to realize our vision. All employees, managers and executives are responsible for making compliance a vital part of our business process to ensure sustainable success."
                    />
                    <ul className="list-disc">
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black"><b>Integrity and ethics</b>- We act with good faith, honesty and fairness.</li>
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black"><b>Respect for all individuals</b>- We treat others as they are entitled to be treated.</li>
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black"><b>Social and environmental responsibility</b>– Zefa Microfinance bank and each employee individually, takes account of the impact of their actions on the community, people and business.</li>
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black"><b>Excellence </b>- We continually challenge each other to improve our products, our processes, and ourselves. We strive always to understand our customers' businesses and help them achieve their goals.</li>
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black"><b>Teamwork</b>- We foster an environment that encourages innovation, creativity, and results through teamwork.</li>
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black"><b>Accountability</b>- We honour the commitments we make and take personal responsibility for all actions and results.</li>
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black"><b>Impartial counsel and validation</b> - We deliver professional and unbiased advice.</li>
                        <li className="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-start text-black"><b>Community</b>- We ensure that we are good neighbours to the communities in which we operate by complying with the law and acting in the right spirit.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}