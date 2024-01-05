import { OpeningLayout } from "../components/accountOpening/Openinglayout"
import { PersonalLayout } from "../components/accountOpening/persoanlLayout"
import { Layout } from "../components/pageLayout"

export const PersonalFormPage =()=>{
    return(
        <>
            <Layout>
                <OpeningLayout
                    title="Account Opening Forms"
                >
                    <PersonalLayout/>
                </OpeningLayout>
            </Layout>
        </>
    )
}