import { ContactUsBanner } from "../components/contactUs/banner"
import { ContactInfo } from "../components/contactUs/conntactInfo"
import { ContactInputSection } from "../components/contactUs/inputSection"
import { Layout } from "../components/pageLayout"

export const ContactusPage =()=>{
    return(
        <>
            <Layout>
                <ContactUsBanner/>
                <ContactInfo/>
                <ContactInputSection/>
            </Layout>
        </>
    )
}