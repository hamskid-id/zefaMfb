import { useForm } from "react-hook-form";
import { CorporateThree } from "./corporateTabThree";
import { CorporateOne } from "./corporateTabOne";
import { InputField } from "../formField";

export const CorporateTwo =({
    setActiveTab
})=>{
    const itemStored = JSON.parse(localStorage.getItem('account_opening'));
    const{
        register,
        watch,
        handleSubmit,
        formState: {errors}
    }=useForm();
    const SubmitHandler =({
        bWebsite,
        bAddress,
        bEmail,
        bphone,
        contactPerson
    })=>{
        localStorage.setItem(
            "account_opening",
            JSON.stringify({
                ...itemStored,
                bWebsite,
                contactPerson,
                bAddress,
                bEmail,
                bphone
            })
        )
        setActiveTab(
            (prev)=>(
                <CorporateThree
                    setActiveTab={setActiveTab}
                />
            )
        )
    }
    return(
        <>
                <form onSubmit ={handleSubmit(SubmitHandler)}>
                    <div className="mb-4 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    {
                        [
                            {
                                title:"bWebsite",
                                holder:"Enter business website",
                                type:"text",
                                label:"Bsiness website"
                            },{
                                title:"bAddress",
                                holder:"Enter business address",
                                type:"text",
                                label:"Business Address"
                            },{
                                title:"bEmail",
                                holder:"Enter business email",
                                type:"email",
                                label:"Business email"
                            },{
                                title:"bphone",
                                holder:"Enter business phone number",
                                type:"tel",
                                label:"Business Phone Number"
                            },{
                                title:"contactPerson",
                                holder:"Enter contact person's name",
                                type:"text",
                                label:"Contact Person"
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
                    <div className="flex flex-row items-center justify-between">
                        <div 
                            className="bg-danger text-white rounded-md p-4 text-md cursor me-4 w-fit" 
                            onClick={()=>{
                                setActiveTab(
                                    (prev)=>(
                                        <CorporateOne
                                            setActiveTab={setActiveTab}
                                        />
                                    )
                                )
                            }}
                        >Prev</div>
                        <button className="bg-green text-white rounded-md p-4 text-md cursor">Next</button>
                    </div>
                </form>
        </>
    )
}