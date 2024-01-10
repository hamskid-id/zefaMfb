import { useState } from "react";
import { PersonalOne } from "./personalTabOne";
import { AccountFormLayout } from "./accountFormLayout";

export const PersonalLayout =()=>{
    const[
        activeTab,
        setActiveTab
    ]=useState(null);
    const[
        dataToSubmit,
        setDataToSubmit
    ]=useState(
        {
            Title:"",
            Surname:"",
            firstname:"",
            othername:"",
            bvn:"",
            gender:"",
            Date:"",
            Address:"",
            Email:"",
            phone:"",
            account_type:""
        }
    )
    return(
        <>
           <AccountFormLayout>
                {
                    activeTab == null? (
                    <PersonalOne 
                        setActiveTab={ setActiveTab}
                        dataToSubmit={dataToSubmit}
                        setDataToSubmit={setDataToSubmit}
                    />
                    ):(
                        activeTab
                    )
                }
            </AccountFormLayout> 
        </>
    )
}