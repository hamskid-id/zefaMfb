import { useForm } from "react-hook-form";
import { PersonalOne } from "./personalTabOne";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { InputField } from "../formField";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";

export const PersonalTwo =({
    setActiveTab
})=>{
    const itemStored = JSON.parse(localStorage.getItem('account_opening'));
    const[
        isLoading,
        setIsLaoding
    ]= useState(false);
    const{
        title
    }=useParams();
    const{
        register,
        watch,
        handleSubmit,
        formState: {errors}
    }=useForm();
    const accountTypeinputIsValid = watch("account_type")
    const SubmitHandler =({
        Date,
        Address,
        Email,
        phone,
        account_type
    })=>{
        var formData = new FormData();
        const{
            Title,
            Surname,
            firstname,
            othername,
            bvn,
            gender
        }=itemStored;
        console.log(itemStored);
            
        [
            {
                title:"title",
                value:Title
        },{
                title:"Surname",
                value:Surname
            },{
                title:"firstname",
                value:firstname
            },{
                title:"othername",
                value:othername
            },{
                title:"bvn",
                value: bvn
            },{
                title:"gender",
                value:gender
            },{
                title:"Date",
                value:Date
            },{
                title:"Address",
                value:Address
            },{
                title:" Email",
                value: Email
            },{
                title:"Account type",
                value:account_type
            },{
                title:"Phone",
                value:phone
            },{
                title:"_next",
                value:"https://zefa-microfinace.vercel.app/thank-you"
            },{
                title:"_subject",
                value:title ==="personal"?"Personal Account Form Submission":"Corporate Account Form Submission"
            }
        ].forEach((info)=>{
            const{
                title,
                value
            }=info;
            formData.append(title,value);
        })
        const sendData = async()=>{
            try{
                setIsLaoding(true)
                const response = await axios.post(
                    "https://formsubmit.co/ajax/It@zefamfb.com",
                    formData,
                    {
                        headers:{
                            'Content-Type':"multipart/form-data"
                        }
                    }
                );
                const data = response?.data;
                const{
                    success,
                    message
                }=data;
                setIsLaoding(false);
                if(success){
                    toast.success(message);
                }else{
                    toast.error(message);
                }
                localStorage.removeItem('account_opening');
            }catch(error){
                setIsLaoding(false)
                console.log(error)
                toast.error(error?.response?.data?.message)
            }
        }
        sendData();
    }
    return(
        <>
                <form onSubmit ={handleSubmit(SubmitHandler)}>
                    <div className="mb-4 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    {
                        [
                            {
                                title:"Date",
                                holder:"Enter preffered date",
                                type:"date",
                                label:"Date"
                            },{
                                title:"Address",
                                holder:"Enter Address",
                                type:"text",
                                label:"Address"
                            },{
                                title:"Email",
                                holder:"Enter Email",
                                type:"email",
                                label:"Email"
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
                                <InputField 
                                    labelTitle={title}
                                    inputType={type}
                                    labelName={label}
                                    register={register}
                                    watch={watch}
                                    placeholder={holder}
                                />
                            )
                        })
                    }
                    </div>
                    <div className="flex flex-col relative">
                        <label
                            htmlFor="account_type"
                            className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Account Type
                        </label>
                        <select
                            name="account_type" 
                            id="account_type"
                            {...register("account_type" ,{required:true})}
                            className="lg:mb-3 xl:mb-3 md:mb-3 sm:mb-0 xs:mb-0 peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        >
                            <option value="" selected>Choose...</option>
                            <option value="savings-regular">
                                Savings Account (Regular)
                           </option>
                           <option value="savings-target">
                                Savings Account (Target)
                           </option>
                           <option value="current">Current Account</option>
                        </select>
                        <div className="absolute top-[2rem] right-[0.5rem]">
                            { accountTypeinputIsValid ? <AiFillLike size="1rem" color="#a7f3d0"/>:<AiFillDislike size="1rem" color="#fecdd3"/>}
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div 
                            className="bg-danger text-white rounded-md p-4 text-md cursor me-4 w-fit" 
                            onClick={()=>{
                                setActiveTab(
                                    (prev)=>(
                                        <PersonalOne
                                            setActiveTab={setActiveTab}
                                        />
                                    )
                                )
                            }}
                        >Prev</div>
                        {
                            isLoading?<div className="bg-green text-white rounded-md p-4 text-md cursor">Sending...</div>:<button className="bg-green text-white rounded-md p-4 text-md cursor">Submit</button>
                        }
                    </div>
                </form>
        </>
    )
}