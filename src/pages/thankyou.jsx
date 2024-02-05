import { Layout } from "../components/pageLayout"
import { Text } from "../components/text"

export const ThankYou =()=>{
    return(
        <Layout>
            <div className="bg-thank-You pt-[23rem] pb-[10rem] sm:w-full xs:w-full">
                <div className=" p-4 rounded-lg bg-white lg:w-[50%] xl:w-[50%] md:w-[50%] m-auto">
                    <Text
                        style="text-success font-extrabold text-xl mb-4 bg-[#f8f9fa] w-full text-start"
                        value="Thank You"
                    />
                    <Text
                        style="text-black text-lg"
                        value="Thank you for your interest in our bank. Your message has been received. A customer service staff will contact you shortly."
                    />
                </div>
            </div>
        </Layout>
    )
}