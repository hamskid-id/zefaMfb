import { ChairManSection } from "../components/home/chairManMessage"
import { CustomerTestimoy } from "../components/home/customerTestimony"
import { Services } from "../components/home/services"
import { Layout } from "../components/pageLayout"

export const HomePage =()=>{

    return(
       <>
        <Layout>
            <ChairManSection/>
            <Services/>
            <CustomerTestimoy/>
        </Layout>
       </>
    )
}