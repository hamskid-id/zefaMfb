import { useForm } from "react-hook-form";
import { PersonalTwo } from "./personalTabTwo";

export const PersonalOne =({
    setActiveTab,
    dataToSubmit,
    setDataToSubmit
})=>{
    console.log(dataToSubmit)
    const{
        register,
        handleSubmit,
        formState: {errors}
    }=useForm();
    const SubmitHandler =({
        Title,
        Surname,
        firstname,
        othername,
        bvn,
        gender
    })=>{
        localStorage.setItem(
            "account_opening",
            JSON.stringify({
                Title,
                Surname,
                firstname,
                othername,
                bvn,
                gender
            })
        )
        console.log(
            Title,
            Surname,
            firstname,
            othername,
            bvn,
            gender
        )
        setActiveTab(
            (prev)=>(
                <PersonalTwo
                    setActiveTab={setActiveTab}
                    dataToSubmit={dataToSubmit}
                    setDataToSubmit={setDataToSubmit}
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
                                title:"othername",
                                holder:"Enter Othername",
                                type:"text",
                                label:"Other names"
                            },{
                                title:"bvn",
                                holder:"Enter BVN",
                                type:"number",
                                label:"BVN"
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
                                        {...register(title,{required:true})}
                                        className="peer block text-black  w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id={title}
                                        name={title}
                                        placeholder={holder} 
                                    />
                                </div>
                            )
                        })
                    }
                    <div>
                        <label
                            htmlFor="gender"
                            className="pointer-events-none max-w-[90%] origin-[0_0] truncate me-4 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                            >Gender
                        </label>
                        <div 
                            className=" flex flex-row items-center"
                        >
                            <label
                                htmlFor="gender"
                                className="pointer-events-none max-w-[90%] origin-[0_0] truncate me-4 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                                >Male
                            </label>
                            <input
                                required
                                type="radio"
                                className="peer text-black block  rounded border  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="gender"
                                {...register("gender",{required:true})}
                                name="gender"
                                value="Male"
                            />
                        </div>
                        <div 
                            className="lg:mb-3 flex flex-row items-center"
                        >
                            <label
                                htmlFor="gender"
                                className="pointer-events-none max-w-[90%] origin-[0_0] truncate me-4 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                                >Female
                            </label>
                            <input
                                required
                                type="radio"
                                className="peer block rounded border outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="gender"
                                {...register("gender",{required:true})}
                                name="gender"
                                value="Female"
                            />
                        </div>
                    </div>
                    </div>
                    <div>
                        <button className="bg-green text-white rounded-md p-4 text-md cursor mt-4">Next</button>
                    </div>
                </form>
            </>
    )
}