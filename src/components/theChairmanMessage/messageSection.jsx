import { Text } from "../text"
import {useNavigate} from "react-router-dom";
export const ChairManMessageSection =()=>{
    const navigate = useNavigate();
    return(
        <div className="bg-white lg:px-24 py-8 xl:px-24 md:px-4 sm:px-4 xs:px-2 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:gap-12 xl:gap-12 md:gap-2 sm:gap-2 xs:gap-2">
            <div className="flex flex-col items-start">
                <Text
                    style="font-extrabold text-chairmanmessage text-black mb-2"
                    value="The Chairman's Message"
                />
                <Text
                    style="font-medium text-2xl text-black mb-2"
                    value="Welcome to Zefa Microfinance Bank’s website; within these pages you will learn more about our history, products, services and success stories of some of our customers. You will also find out more about the values of our institution which, since it was established in 2018, has been committed to helping the financially excluded members of our community achieve their financial dreams."
                />
                <Text
                    style="text-lg text-black mb-4"
                    value="Zefa Microfinance Bank is focused on the fundamentals of microfinance banking and its best practices with an emphasis on sustainable growth. Our most valuable asset is our people and we will continue to strengthen and empower them as they are responsible for the Bank’s operations at all levels. Most importantly, we will be whole-heartedly dedicated to our customers, shareholders, business partners and the communities we serve."/>
                <Text
                    style="text-lg text-black mb-4"
                    value="You can count on my pledge to anyone considering using our services. At Zefa Microfinance bank, , we will treat you with respect, work to establish your trust, and provide the necessary support towards your financial success."/>
                <Text
                    style="text-lg text-black mb-4"
                    value="Here at Zefa microfinance Bank, our motto is “Supporting your dreams” so whatever your legitimate financial dreams are, you are at the right place for the desired support."/>
                <Text
                    style="text-lg text-black mb-4"
                    value="Once again, welcome to our website."/>
                <Text
                    style="text-lg text-black mb-4"
                    value="Sincerely"/>
                <Text
                    style="text-lg text-black mb-4"
                    value="Olufunmilola OMODEHIN [Mrs]"/>
                <Text
                    style="text-lg text-black mb-4"
                    value="Chairman, Board of Directors"/>
            </div>
            <div>
                <img
                    src="https://zefamfb.com/images/chairman2.jpg"
                    alt="object not found"
                    className="lg:object-fill xl:object-fill md:object-fill sm:object-contain xs:object-contain my-2 lg:h-[35rem] xl:h-[35rem] md:h-[35rem] sm:h-auto xs:h-auto w-full "
                />
            </div>
        </div>
    )
}