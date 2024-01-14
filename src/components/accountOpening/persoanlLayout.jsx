import { useState } from "react";
import { PersonalOne } from "./personalTabOne";
import { AccountFormLayout } from "./accountFormLayout";
import { useParams } from "react-router-dom";
import { CorporateOne } from "./corporateTabOne";

export const PersonalLayout =()=>{
    const{
        title
    }=useParams();
    const[
        activeTab,
        setActiveTab
    ]=useState(null);
    return(
        <>
           <AccountFormLayout>
                {
                    activeTab == null && title ==="personal"? (
                        <PersonalOne 
                            setActiveTab={ setActiveTab}
                        />
                    ): activeTab == null && title ==="corporate"?(
                        <CorporateOne 
                            setActiveTab={ setActiveTab}
                        />
                    ):activeTab
                }
            </AccountFormLayout> 
        </>
    )
}