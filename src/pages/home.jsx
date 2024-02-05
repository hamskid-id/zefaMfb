import { ChairManSection } from "../components/home/chairManMessage"
import { Services } from "../components/home/services"
import { HomeSlideBanner } from "../components/home/slide"
import { HomeCustomerTestimony } from "../components/home/testimony"
import { Layout } from "../components/pageLayout"

export const HomePage =()=>{

    return(
       <>
        <Layout>
            <HomeSlideBanner/>
            <ChairManSection/>
            <Services/>
            <HomeCustomerTestimony/>
        </Layout>
       </>
    )
}