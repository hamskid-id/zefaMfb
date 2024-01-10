import { useForm } from "react-hook-form";
import { useState } from "react";
import { PersonalTwo } from "./personalTabTwo";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const PersonalThree =({
    setActiveTab,
    setDataToSubmit,
    dataToSubmit
})=>{
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
        signature:null,
        pass:null
    })
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =()=>{
    var formData = new FormData();
    const{
            Title,
            Surname,
            firstname,
            othername,
            bvn,
            gender,
            Date,
            Address,
            Email,
            phone,
            account_type
        }=itemStored;
        console.log(itemStored);
        
    [
        {
            title:"Passport",
            value:fileInputs.pass
       },{
            title:"Signature",
            value:fileInputs.signature
        },{
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
            title:"Account type",
            value:account_type
        },{
            title:"_next",
            value:"https://zefa.vercel.app/acct-opening-thanks.html"
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
                "https://formsubmit.co/ajax/webcontact@zefamfb.com",
                formData,
                {
                    headers:{
                        'Content-Type':"multipart/form-data"
                    }
                }
            );
            const data = response?.data;
            setIsLaoding(false)
            toast.success('Application Successfully sent')
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
                                htmlFor={"signature"}
                                className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Upload Signature
                            </label>
                            <input
                                type="file"
                                name="signature"
                                className="peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id={"signature"}
                                onChange ={(e)=>setFileInputs((prev)=>{
                                    return{...prev,signature:e.target.files[0]}
                                })}
                                />
                        </div>
                        <div 
                            className="flex flex-col items-start w-full"
                        >
                            <label
                                htmlFor={`exampleFormControlInput4`}
                                className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Passport
                            </label>
                            <input
                                type="file"
                                name="Passport"
                                className="peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id={`exampleFormControlInput4`}
                                onChange ={(e)=>setFileInputs((prev)=>{
                                    return{...prev,pass:e.target.files[0]}
                                })}
                                />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div 
                            className="bg-green text-white rounded-md p-4 text-md cursor me-4 w-fit"
                            onClick={()=>{
                                setActiveTab(
                                    (prev)=>(
                                        <PersonalTwo
                                            setActiveTab={setActiveTab}
                                            dataToSubmit={dataToSubmit}
                                            setDataToSubmit={setDataToSubmit}
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