import { useForm } from "react-hook-form";
import { Text } from "../text"

export const LoanSectionTwo =()=>{
    const{
        register,
        handleSubmit,
        formState: {errors}
    }=useForm();
    const SubmitHandler =({
        Title,
        Suraname,
        firstname,
        email,
        about_us,
        loan_type,
        bvn,
        phone
    })=>{
        console.log(
            Title,
            Suraname,
            about_us,
            loan_type,
            firstname,
            email,
            bvn,
            phone
        )
    }
    return(
        <div className="my-14 bg-white py-14 px-4 xl:w-[73%] lg:w-[73%] md:w-[73%] sm:w-100%] xs:w-[100%] flex flex-col justify-center items-center m-auto">
            <Text
                style="lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl xs:text-xl c-brown font-medium mb-2 text-center"
                value="Kindly complete the Registration form below."
            />
            <Text
                style="lg:text-xl xl:text-xl md:text-xl sm:text-md xs:text-md c-brown font-medium mb-2 text-center"
                value="Our sales team will be in touch shortly to speak about what's possible."
            />
            <Text
                style="lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black font-semibold mb-8 text-center"
                value="Kindly fill all form fields with valid information"
            />
            <div className="w-full bg-white rounded-md p-4 my-4">
                <form onSubmit ={handleSubmit(SubmitHandler)}>
                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    {
                        [
                            {
                                title:"Title",
                                holder:"Enter preffered title",
                                type:"text",
                                label:"Title"
                            },{
                                title:"Surname",
                                holder:"Enter surname",
                                type:"text",
                                label:"Surname"
                            },{
                                title:"firstname",
                                holder:"Enter firstname",
                                type:"text",
                                label:"First name"
                            },{
                                title:"email",
                                holder:"Enter your email",
                                type:"email",
                                label:"Email"
                            },{
                                title:"bvn",
                                holder:"Enter BVN",
                                type:"number",
                                label:"BVN"
                            },{
                                title:"phone",
                                holder:"Enter phone number",
                                type:"tel",
                                label:"Phone Number"
                            }
                        ].map((info,index)=>{
                            const{
                                title,
                                holder,
                                type,
                                label
                            }=info;
                            return(
                                <div 
                                    className="lg:mb-3 xl:mb-3 md:mb-3 sm:mb-0 xs:mb-0 flex flex-col justify-start"
                                    key={index}
                                >
                                    <label
                                        htmlFor={title}
                                        className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                                        >{label}
                                    </label>
                                    <input
                                        type={type}
                                        required
                                        className="peer block text-black  w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id={title}
                                        name={title}
                                        placeholder={holder} 
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="flex flex-col">
                        <label
                            htmlFor="loan_type"
                            className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Type of Loan
                        </label>
                        <select
                            name="loan_type" 
                            id="loan_type"
                            className="lg:mb-3 xl:mb-3 md:mb-3 sm:mb-0 xs:mb-0 peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        >
                            <option value="" selected>Choose...</option>
                            <option value="traders-relief">
                                Traders Relief Scheme (Business Loan)
                            </option>
                            <option value="personal-micro">
                                Personal Micro Loans (Personal Loan)
                            </option>
                            <option value="consumer-loan">
                                Consumer Loans (Personal Loan)
                            </option>
                            <option value="group-loan">Group Loan</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="about_us"
                            className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >How did you hear about us?
                        </label>
                        <select  
                            name="about_us" 
                            id="about_us"
                            className="lg:mb-3 xl:mb-3 md:mb-3 sm:mb-0 xs:mb-0 peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        >
                            <option value="" selected="">Choose...</option>
                            <option value="radio">Radio</option>
                            <option value="google_search">Google Search</option>
                            <option value="trade_show">Trade Show</option>
                            <option value="google_ad">Google Ad</option>
                            <option value="facebook_ad">Facebook Ad</option>
                            <option value="bank">Bank</option>
                            <option value="existing_customer">Existing Customer</option>
                            <option value="accountant">Accountant</option>
                            <option value="friend">Friend</option>
                        </select>
                    </div>
                    </div>
                    <div>
                        <button className="bg-green text-white rounded-md p-4 text-md cursor w-full mt-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}