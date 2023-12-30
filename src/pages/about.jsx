import { Banner } from "../components/about/banner"
import { AboutSectionTwo } from "../components/about/sectionTwo"
import { Layout } from "../components/pageLayout"

export const AboutUsPage =()=>{
    return(
        <>
            <Layout>
                <Banner/>
                <AboutSectionTwo/>
            </Layout>
        </>
    )

}