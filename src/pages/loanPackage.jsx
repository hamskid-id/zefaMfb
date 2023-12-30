import { LoanBanner } from "../components/loan/banner"
import { LoanPackage } from "../components/loan/loanpackage"
import { Layout } from "../components/pageLayout"

export const LoanPackagePage =()=>{
    return(
        <>
            <Layout>
                <LoanBanner
                    title="Loan Packages"
                    subTitle="Loan Packages"
                />
                <LoanPackage/>
            </Layout>
        </>
    )
}