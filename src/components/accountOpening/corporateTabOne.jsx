import { useForm } from "react-hook-form";
import { CorporateTwo } from "./corporateTabTwo";
import { InputField } from "../formField";

export const CorporateOne =({
    setActiveTab,
    setDataToSubmit
})=>{
    const{
        register,
        watch,
        handleSubmit,
        formState: {errors}
    }=useForm();
    const SubmitHandler =({
        companyName,
        nameOfBusiness,
        date,
        directorsBvn
    })=>{
        localStorage.setItem(
            "account_opening",
            JSON.stringify({
                companyName,
                nameOfBusiness,
                date,
                directorsBvn
            })
        )
        console.log(
            companyName,
            nameOfBusiness,
            date,
            directorsBvn
        )
        setActiveTab(
            (prev)=>(
                <CorporateTwo
                    setActiveTab={setActiveTab}
                />
            )
        )
    }
    return(
            <>
                <form onSubmit ={handleSubmit(SubmitHandler)}>
                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    {
                        [
                            {
                                title:"companyName",
                                holder:"Enter company name",
                                type:"text",
                                label:"Name of Company or Association"
                            },{
                                title:"nameOfBusiness",
                                holder:"Enter business nature",
                                type:"text",
                                label:"Name Of Business"
                            },{
                                title:"date",
                                holder:"Enter date",
                                type:"date",
                                label:"Year of Registration"
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
                    <div>
                        <button className="bg-green text-white rounded-md p-4 text-md cursor mt-4">Next</button>
                    </div>
                </form>
            </>
    )
}