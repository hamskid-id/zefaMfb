import { useForm } from "react-hook-form";
import { useState } from "react";

export const PersonalThree =({
    setActiveTab
})=>{
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
        console.log( fileInputs.pass, fileInputs.signature)
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
                                        />
                                    )
                                )
                            }}
                        >Prev</div>
                        <button className="bg-green text-white rounded-md p-4 text-md cursor">Submit</button>
                    </div>
                </form>
        </>
    )
}