import { useForm } from "react-hook-form";
import { CorporateThree } from "./corporateTabThree";
import { CorporateOne } from "./corporateTabOne";

export const CorporateTwo =({
    setActiveTab
})=>{
    const itemStored = JSON.parse(localStorage.getItem('account_opening'));
    const{
        register,
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
                                <div 
                                    className="lg:mb-3 xl:mb-3 md:mb-3 sm:mb-0 xs:mb-0 flex flex-col justify-start"
                                    key={index}
                                >
                                    <label
                                        htmlFor={title}
                                        className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >{label}
                                    </label>
                                    <input
                                        type={type}
                                        required
                                        {...register(title,{required:true})}
                                        className="peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id={title}
                                        name={title}
                                        placeholder={holder} 
                                    />
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="flex flex-row">
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