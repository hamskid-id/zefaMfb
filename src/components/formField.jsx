import { AiFillLike,AiFillDislike } from "react-icons/ai";
export const InputField =({
    labelTitle,
    inputType,
    labelName,
    register,
    placeholder,
    watch
})=>{
    const inputIsValid = watch(labelTitle)
    return(
        <div 
            className=" xs:mb-0 flex flex-col justify-start relative"
        >
            <label
                htmlFor={labelTitle}
                className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >{labelName}
            </label>
            <input
                type={inputType}
                required
                {...register(labelTitle,{required:true})}
                className="peer block text-black w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id={labelTitle}
                name={labelTitle}
                placeholder={placeholder} 
            />
            <div className="absolute top-[2rem] right-[0.5rem]">
                { inputIsValid ? <AiFillLike size="1rem" color="#a7f3d0"/>:<AiFillDislike size="1rem" color="#fecdd3"/>}
            </div>
        </div>
    )
}