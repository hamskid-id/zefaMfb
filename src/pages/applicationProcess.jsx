import { ApplicationProcess } from "../components/loan/applicationProcess"
import { LoanBanner } from "../components/loan/banner"
import { Layout } from "../components/pageLayout"

export const ApplicationProcessPage =()=>{
    return(
        <>
            <Layout>
                <LoanBanner
                    title="Loan Application Process"
                    subTitle="Loan Application Process"
                />
                <ApplicationProcess/>
            </Layout>
        </>
    )
}