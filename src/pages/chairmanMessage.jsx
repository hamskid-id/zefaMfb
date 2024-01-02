import { Layout } from "../components/pageLayout"
import { ChairManMessageBanner } from "../components/theChairmanMessage/banner"
import { ChairManMessageSection } from "../components/theChairmanMessage/messageSection"

export const ChairManMessagePage =()=>{
    return(
        <>
            <Layout>
                <ChairManMessageBanner/>
                <ChairManMessageSection/>
            </Layout>
        </>
    )
}