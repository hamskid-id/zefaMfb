import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { motion} from "framer-motion";
import React from 'react';
import { variants } from "./navVarient";
import { AboutUsDropdown } from "./dropdowns/aboutusDropdown";
import { OpenAccountDropdown } from "./dropdowns/openAccountDropdown";
import { BtnDropdown } from "./dropdowns/appBtnDropdown";
import Hamburger from 'hamburger-react';

export const Nav =({
    scrollToViewRef
})=>{
    const navRef = useRef(null);
    const [showNavToggler,setShowNavToggler] = useState(false);

    useEffect(()=>{

        const checkViewWidth = ()=>{
            if(window.innerWidth >767 && showNavToggler){
                navRef.current?.classList.remove("active");
                setShowNavToggler(false)
            }
        }
        window.addEventListener('resize',checkViewWidth)
        return ()=> window.removeEventListener('resize',checkViewWidth)
    })
    return(
        <div 
            className="lg:mx-24 xl:mx-24 md:mx-8 sm:m-2 xs:mx-2 xxs:mx-2 "
            ref={scrollToViewRef}
        >
            <div className="flex flex-row justify-between items-center mb-4 border-danger">
                <div className="lg:w-[20%] xl:w-[20%] md:w-[20%] sm:w-full xs:w-full lg:block xl:block md:block sm:hidden xs:hidden">
                    <img
                        src="https://zefamfb.com/images/zefa-normal.png"
                        alt="object not found"
                        className="w-40"
                    />
                </div>
                <div className="lg:w-[30%] xl:w-[30%] md:w-[50%] sm:w-full xs:w-full ">
                    <div className="lg:flex xl:flex md:flex sm:hidden xs:hidden flex-row justify-between items-center">
                        <Link className="text-sm text-black" to="/aboutUs?tab=mission">Mission</Link>
                        <Link className="text-sm text-black" to="/career">Career</Link>
                        <Link className="text-sm text-black" to="/aboutUs?tab=differentiators">Differentiators</Link>
                        <Link className="text-sm text-black" to="/contact">Contacts</Link>
                    </div>
                    <div
                        className="lg:hidden xl:hidden md:hidden sm:flex xs:flex flex-row justify-between w-full items-center lg:mt-auto xl:mt-auto md:mt-auto sm:mt-4 xs:mt-4">
                        
                        <OpenAccountDropdown/>
                        <AboutUsDropdown/>
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm text-black" to="/contact">Contact Us</Link>
                        <BtnDropdown type="text"/>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col xs:p-2 xxs:p-2 lg:px-4 xl:px-4 md:px-4 lg:py-2 xl:py-2 md:py-2  rounded justify-between items-center loan_cover mb-2">
                <div className="lg:w-auto xl:w-auto md:w-auto sm:w-full xs:w-full lg:hidden xl:hidden md:hidden sm:flex xs:flex xxs:flex flex-row justify-between items-center">
                    <div>
                        <img
                            src="https://zefamfb.com/images/zefa-normal.png"
                            alt="object not found"
                            className="w-[7.5rem]"
                        />
                    </div>
                    <Hamburger
                        toggled={showNavToggler}
                        toggle={setShowNavToggler}
                        color="rgba(0, 0, 0, 0.702)"
                        easing="ease-in"
                        size={20}
                    />
                </div>
                <div
                    className="desktopNav lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col justify-between w-full items-center bg_transparent">
                    <div className="navList flex lg:flex-row xl:flex-row justify-between md:flex-row sm:flex-col xs:flex-col xxs:flex-col lg:w-[50%] xl:w-[50%] md:w-[70%] sm:w-[100%] xs:w-[100%]">
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm text-black" to="/">Home</Link>
                        <AboutUsDropdown/>
                        <OpenAccountDropdown/>
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm text-black" to="/?tab=testimony">Success Story</Link>
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm text-black" to="/contact">Contact Us</Link>
                    </div>
                    <div  className="lg:w-auto xl:w-auto sm:w-full md:w-auto xs:w-full">
                        <BtnDropdown/>
                    </div>
                </div>
                <motion.div
                    animate={
                        showNavToggler ? "open": 
                        showNavToggler===false? 
                        "closed":"default"
                    }
                    ref={navRef}
                    variants={variants}
                    className="mobilenav lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col justify-between w-full items-center bg_transparent ">
                    <div className="navList flex lg:flex-row xl:flex-row justify-between md:flex-row sm:flex-col xs:flex-col xxs:flex-col lg:w-[50%] xl:w-[50%] md:w-[70%] sm:w-[100%] xs:w-[100%]">
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm text-black" to="/">Home</Link>
                        <AboutUsDropdown/>
                        <OpenAccountDropdown/>
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm text-black" to="/success_stories">Success Story</Link>
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm text-black" to="/contact">Contact Us</Link>
                    </div>
                    <div  className="lg:w-auto xl:w-auto sm:w-full md:w-auto xs:w-full">
                        <BtnDropdown/>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}