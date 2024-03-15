import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { CorporateTwo } from "./corporateTabTwo";

export const CorporateThree =({
    setActiveTab
})=>{
    const navigate = useNavigate()
    const itemStored = JSON.parse(localStorage.getItem('account_opening'));
    const[
        isLoading,
        setIsLaoding
    ]= useState(false);
    const{
        title
    }=useParams();
    const[
        fileInputs,
        setFileInputs
    ]= useState({
        cSignature:null,
        cPass:null
    })
    const { 
        register, 
        watch,
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =()=>{
    var formData = new FormData();
    const{
            companyName,
            nameOfBusiness,
            date,
            bWebsite,
            contactPerson,
            bAddress,
            bEmail,
            bphone
        }=itemStored;
        console.log(itemStored);
        
    [
        {
            title:"Contact Passport",
            value:fileInputs.cPass
       },{
            title:"Contact Signature",
            value:fileInputs.cSignature
        },{
            title:"Business Address",
            value:bAddress
       },{
            title:"Business Email",
            value:bEmail
        },{
            title:"Business Website",
            value:bWebsite
        },{
            title:"Business Phone Number",
            value:bphone
        },{
            title:"Contact person",
            value: contactPerson
        },{
            title:"Name of Company",
            value:companyName
        },{
            title:"Nature of Business",
            value:nameOfBusiness
        },{
            title:"Year of registration",
            value:date
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
                "https://formsubmit.co/ajax/tokade@gmail.com",
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
                navigate("/thank-you");
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
                        <div 
                            className="flex flex-col items-start w-full"
                        >
                            
                            <label
                                htmlFor={"cSignature"}
                                className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Upload Signature of contact
                            </label>
                            <input
                                type="file"
                                name="cSignature"
                                className="peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id={"cSignature"}
                                onChange ={(e)=>setFileInputs((prev)=>{
                                    return{...prev,cSignature:e.target.files[0]}
                                })}
                                />
                        </div>
                        <div 
                            className="flex flex-col items-start w-full"
                        >
                            <label
                                htmlFor={`exampleFormControlInput4`}
                                className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Upload Passport of contact
                            </label>
                            <input
                                type="file"
                                name="cPassport"
                                className="peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id={`exampleFormControlInput4`}
                                onChange ={(e)=>setFileInputs((prev)=>{
                                    return{...prev,cPass:e.target.files[0]}
                                })}
                                />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4">
                        <div 
                            className="bg-danger text-white rounded-md p-4 text-md cursor me-4 w-fit"
                            onClick={()=>{
                                setActiveTab(
                                    (prev)=>(
                                        <CorporateTwo
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