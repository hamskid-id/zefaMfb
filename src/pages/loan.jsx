import { LoanBanner } from "../components/loan/banner"
import { LoanSectionTwo } from "../components/loan/sectionTwo"
import { Layout } from "../components/pageLayout"

export const LoanPage =()=>{
    return(
        <>
            <Layout>
                <LoanBanner subTitle="Apply For Loan" title="Loan Application Form "/>
                <LoanSectionTwo/>
            </Layout>
        </>
    )
}