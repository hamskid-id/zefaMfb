import { useForm } from "react-hook-form";
import { Text } from "../text"
import { useState } from "react";

export const CareerForm =()=>{
    const[
        fileInputs,
        setFileInputs
    ]= useState({
        cv:null
    })
    const{
        register,
        handleSubmit,
        formState: {errors}
    }=useForm();
    const SubmitHandler =({
        jobsInterest,
        Suraname,
        firstname,
        email,
        message,
        jobsType,
        phone
    })=>{
        console.log(
            jobsInterest,
            Suraname,
            message,
            fileInputs.cv,
            firstname,
            email,
            jobsType,
            phone
        )
    }
    return(
        <div className="bg-white py-14 my-14 px-4 xl:w-[73%] lg:w-[73%] md:w-[73%] sm:w-100%] xs:w-[100%] flex flex-col justify-center items-center m-auto">
            <Text
                style="text-2xl c-brown font-medium text-center"
                value="Do you feel ready to join our team?"
            />
            <Text
                style="text-md c-brown font-medium text-center"
                value="Send us your CV"
            />
            <Text
                style="text-lg text-black font-semibold text-center"
                value="Apply using the form below"
            />
            <Text
                style="text-sm text-black font-semibold mb-8 text-center"
                value="*Please enter your full name (first name, surname) exactly as it appears in your Identity card and jobsType*"
            />
            <hr className="text-black"/>
            <div className="w-full bg-white rounded-md p-4 my-4">
                <form action="https://formsubmit.co/webcontact@zefamfb.com" encType="multipart/form-data" method="POST">
                    <div className="mb-4 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    <input type="hidden" name="_next" value="https://zefa.vercel.app/acct-opening-thanks.html"/>
                    <input type="hidden" name="_subject" value="Career Form Submission"/>
                    {
                        [
                            {
                                jobsInterest:"Surname",
                                holder:"Enter surname",
                                type:"text",
                                label:"Surname"
                            },{
                                jobsInterest:"firstname",
                                holder:"Enter firstname",
                                type:"text",
                                label:"First name"
                            },{
                                jobsInterest:"email",
                                holder:"Enter your email",
                                type:"email",
                                label:"Email"
                            },{
                                jobsInterest:"phone",
                                holder:"Enter phone number",
                                type:"tel",
                                label:"Phone Number"
                            }
                        ].map((info,index)=>{
                            const{
                                jobsInterest,
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
                                        htmlFor={jobsInterest}
                                        className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                                        >{label}
                                    </label>
                                    <input
                                        type={type}
                                        required
                                        className="peer block text-black  w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id={jobsInterest}
                                        name={jobsInterest}
                                        placeholder={holder} 
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="flex flex-col">
                        <label
                            htmlFor="jobsInterest"
                            className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Jobs Im interested in (**you can select multiple categories)
                        </label>
                        <select 
                            multiple
                            name="jobsInterest"
                            className="peer block text-black  w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" 
                            required
                            id="jobsInterest"
                        >
                            <option value="Administration/Operations">
                                Administration/Operations
                            </option>
                            <option value="Business/Strategic Management">
                                Business/Strategic Management
                            </option>
                            <option value="Creative/Design">Creative/Design</option>
                            <option value="Customer Care">Customer Care</option>
                            <option value="Finance/Accounting">Finance/Accounting</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="IT - Administration">
                                IT - Administration
                            </option>
                            <option value="IT - Software Development">
                                IT - Software Development
                            </option>
                            <option value="Legal">Legal</option>
                            <option value="Marketing/PR">Marketing/PR</option>
                            <option value="Other">Other</option>
                            <option value="Project Management">Project Management</option>
                            <option value="Project/Product Management">
                                Project/Product Management
                            </option>
                            <option value="Sales/Business Development">
                                Sales/Business Development
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="jobsType"
                            className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Job Type
                        </label>
                        <select 
                            className="peer block text-black  w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" 
                            id="jobsType" 
                            required
                        >
                            <option value="">Select a job type</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="any">Any</option>
                        </select>
                    </div>
                    </div>
                    <div 
                        className="flex flex-col items-start w-full mb-2"
                    >
                        <label
                            htmlFor={`exampleFormControlInput4`}
                            className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                        >cv
                        </label>
                        <input
                            type="file"
                            name="cv"
                            className="peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id={`exampleFormControlInput4`}
                            onChange ={(e)=>setFileInputs((prev)=>{
                                return{...prev,cv:e.target.files[0]}
                            })}
                            />
                    </div>
                    <div 
                        className="lg:mb-3 xl:mb-3 md:mb-3 sm:mb-0 xs:mb-0 flex flex-col justify-start"
                    >
                        <label
                            htmlFor="message"
                            className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                            >Cover Letter
                        </label>
                        <textArea
                            type="text"
                            required
                            className="peer block text-black  w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="message"
                            name="message"
                            placeholder="Write your cover letter..." 
                        ></textArea>
                    </div>
                    <div>
                        <button type="submit" className="bg-green text-white rounded-md p-4 text-md cursor w-full mt-4">Submit Request</button>
                    </div>
                </form>
            </div>
        </div>
    )
}