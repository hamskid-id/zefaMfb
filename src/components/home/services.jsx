import { useNavigate } from "react-router-dom";
import { Text } from "../text";

export const Services =()=>{
    const navigate = useNavigate();
    return(
        <div className="lg:px-24 py-14 xl:px-24 md:px-4 sm:px-4 xs:px-2">
            <div className="flex flex-col justify-center items-center mb-8">
                <Text
                    style="c-brown lg:text-4xl xl:text-4xl md:text-4xl sm:text-2xl xs:text-2xl text-center font-semibold mb-2"
                    value="Our Services"
                />
                <div className="bg-olive w-[3rem] h-[0.2rem]"></div>
            </div>
            <div className=" grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 lg:gap-4 xl:gap-4 md:gap-2 sm:gap-2 xs:gap-2">
                {
                    [
                        {
                            image:"https://zefa.vercel.app/images/undraw_Savings_re_eq4w.svg",
                            title:"ACCOUNT TYPES",
                            info:"To take care of specific needs of different categories of customers, ZEFA Microfinance Bank has various account types to meet these needs. They include Personal, Corporate, Target, Group or Investment accounts.",
                            btnText:"Open Account",
                            route:"/personal_form"
                        },{
                            image:"https://zefa.vercel.app/images/undraw_transfer_money_rywa%20(2).svg",
                            title:"LOAN PACKAGES",
                            info:"ZEFA Microfinance Bank Ltd offers a variety of loan packages designed for all categories of our customers.They include Consumer Loans, Personal business Loans or Group Loans.",
                            btnText:"Apply Now",
                            route:"/loan"
                        },{
                            image:"https://zefa.vercel.app/images/progress__monochromatic.svg",
                            title:"LEADERSHIP",
                            info:"We believe that the success of our business is hinged on the quality of leadership. ZEFA has assembled a winning management team comprising of mostly young and experienced hands in the industry.",
                            btnText:"Meet the team",
                            route:"/aboutUs?tab=our_team"
                        },{
                            image:"https://zefa.vercel.app/images/undraw_stand_out_1oag.svg",
                            title:"WHY CHOOSE US",
                            info:"We are focused on supporting the dreams and aspirations of many financially excluded members of society. Through our processes we build personalized relationships of support and trust through simple and effective procedures.",
                            btnText:"Our Differentiators",
                            route:"/aboutUs?tab=differentiators"
                        },{
                            image:"https://zefa.vercel.app/images/handshake.svg",
                            title:"OUR VALUES",
                            info:"We have eight fundamental values which are fixed, absolute & foremost in our quest to realize our vision. Everyone is responsible for making compliance a vital part of our business process to ensure sustainable success.",
                            btnText:"Core Values",
                            route:"/aboutUs?tab=our_core_values"
                        },{
                            image:"https://zefa.vercel.app/images/undraw_phone_call_grmk.svg",
                            title:"EMERGENCY CONTACT",
                            info:"In case of an emergency, or simply to make enquiries, you can reach Zefa Microfinance Bank through any of our communication channels.A customer service executive will be on hand to provide answers.",
                            btnText:"Contact Us",
                            route:"/contact"
                        }
                    ].map((servi,index)=>{
                        const{
                            image,
                            title,
                            info,
                            btnText,
                            route
                        }=servi;
                        return(
                            <div 
                                key={index}
                                className="flex justify-between items-center flex-col bg-white px-4 rounded py-6"
                            >
                                <div className="mb-4">
                                    <img 
                                        src={image}
                                        alt="object not found"
                                        className="w-20"
                                    />
                                </div>
                                <Text
                                    style="text-md text-black text-center mb-2"
                                    value={title}
                                />
                                <Text
                                    style="text-sm text-black text-center mb-4"
                                    value={info}
                                />
                                <div>
                                    <button
                                        onClick={() =>navigate(route)}
                                        className="bg-green text-white rounded-md py-2 px-4 text-sm cursor">{btnText}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}