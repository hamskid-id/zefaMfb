import { useState } from "react";
import { PersonalOne } from "./personalTabOne";
import { AccountFormLayout } from "./accountFormLayout";

export const PersonalLayout =()=>{
    const[
        activeTab,
        setActiveTab
    ]=useState(null);
    return(
        <>
           <AccountFormLayout title="PERSONAL ACCOUNT">
                {
                    activeTab == null? (
                    <PersonalOne setActiveTab={ setActiveTab}/>
                    ):(
                        activeTab
                    )
                }
            </AccountFormLayout> 
        </>
    )
}