import { Text } from "../text"
export const ChairManSection =()=>{
    return(
        <div className="bg-white lg:px-24 py-8 xl:px-24 md:px-4 sm:px-4 xs:px-2 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:gap-12 xl:gap-12 md:gap-2 sm:gap-2 xs:gap-2">
            <div className="flex flex-col items-start">
                <Text
                    style="font-semibold lg:text-6xl xl:text-6xl md:text-6xl sm:text-4xl xs:text-4xl text-black mb-2"
                    value="The Chairman's Message"
                />
                <Text
                    style="font-medium lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl xs:text-xl text-black mb-2"
                    value="Welcome to Zefa Microfinace Bank's website"
                />
                <Text
                    style="lg:text-lg xl:text-lg md:text-lg sm:text-sm xs:text-sm text-black mb-4"
                    value="Within these pages, you will learn more about our history, products, services and success stories of some of our customers. You will also find out more about the values of our institution which, since it was established in 2018, has been committed to helping the financially excluded members of our community achieve their financial dreams."
                />
                <button className="bg-green text-white rounded-md p-[0.9rem] lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm cursor">Read More</button>
            </div>
            <div>
                <img
                    src="https://zefamfb.com/images/chairman2.jpg"
                    alt="object not found"
                    className="lg:object-fill xl:object-fill md:object-fill sm:object-contain xs:object-contain my-2 lg:h-[25rem] xl:h-[25rem] md:h-[25rem] sm:h-auto xs:h-auto w-full "
                />
            </div>
        </div>
    )
}