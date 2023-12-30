import { CareersBanner } from "../components/career/banner"
import { CareerForm } from "../components/career/careerForm"
import { Layout } from "../components/pageLayout"

export const CareerPage =()=>{
    return(
        <>
            <Layout>
                <CareersBanner/>
                <CareerForm/>
            </Layout>
        </>
    )
}