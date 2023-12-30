import { Link } from "react-router-dom"
import { useRef, useState } from "react";
import { motion} from "framer-motion";
import {FaAlignRight } from "react-icons/fa";
import {FaTimes } from "react-icons/fa";
import React from 'react';
import { variants } from "./navVarient";
import { AboutUsDropdown } from "./dropdowns/aboutusDropdown";
import { OpenAccountDropdown } from "./dropdowns/openAccountDropdown";
import { BtnDropdown } from "./dropdowns/appBtnDropdown";

export const Nav =({
    scrollToViewRef
})=>{
    const navRef = useRef(null);
    const [showNavToggler,setShowNavToggler] = useState(null);
    const showNav =()=>{
        setShowNavToggler(false)
        setTimeout(()=>{
            navRef.current?.classList.add("active");
            setShowNavToggler(true)
        },100)
    }

     const hideNav =()=>{
        setShowNavToggler(false)
        setTimeout(()=>{
            navRef.current?.classList.remove("active");
            setShowNavToggler(false)
        },400)
    }

    return(
        <div 
            className="lg:mx-24 xl:mx-24 md:mx-8 sm:m-2 xs:mx-2 xxs:mx-2 "
            ref={scrollToViewRef}
        >
            <div className="flex flex-row justify-between items-center mb-4 ">
                <div className="lg:w-[20%] xl:w-[20%] md:w-[20%] sm:w-full xs:w-full lg:block xl:block md:block sm:hidden xs:hidden">
                    <img
                        src="https://zefamfb.com/images/zefa-transparent-with-green.png"
                        alt="object not found"
                        className="w-40"
                    />
                </div>
                <div className="flex flex-row justify-between lg:w-[30%] xl:w-[30%] md:w-[50%] sm:w-full xs:w-full lg:mt-auto xl:mt-auto md:mt-auto sm:mt-4 xs:mt-4">
                    <Link className="text-sm text-black" to="/aboutUs?tab=mission">Mission</Link>
                    <Link className="text-sm text-black" to="/career">Career</Link>
                    <Link className="text-sm text-black" to="/aboutUs?tab=differentiators">Differentiators</Link>
                    <Link className="text-sm text-black" to="/contact">Contacts</Link>
                </div>
            </div>
            <div className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col xs:p-2 xxs:p-2 lg:px-4 xl:px-4 md:px-4 lg:py-2 xl:py-2 md:py-2  rounded justify-between items-center loan_cover">
                <div className="lg:w-auto xl:w-auto md:w-auto sm:w-full xs:w-full lg:hidden xl:hidden md:hidden sm:flex xs:flex xxs:flex flex-row justify-between items-center">
                    <div>
                        <img
                            src="https://zefamfb.com/images/zefa-transparent-with-green.png"
                            alt="object not found"
                            className="w-[7rem]"
                        />
                    </div>
                    <span 
                        className="me-2 hamburger"
                        >
                        {
                            showNavToggler===null||showNavToggler===false?(
                            <FaAlignRight
                                color="white"
                                size="0.9rem"
                                onClick={showNav}
                            />
                            ):(
                                <FaTimes
                                    color="white"
                                    size="0.9rem"
                                    onClick={hideNav}
                                />
                            )
                        }
                    </span>
                </div>
                <div
                    className="desktopNav lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col justify-between w-full items-center bg_transparent">
                    <div className="navList flex lg:flex-row xl:flex-row justify-between md:flex-row sm:flex-col xs:flex-col xxs:flex-col lg:w-[50%] xl:w-[50%] md:w-[70%] sm:w-[100%] xs:w-[100%]">
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/">Home</Link>
                        <AboutUsDropdown/>
                        <OpenAccountDropdown/>
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/?tab=testimony">Success Story</Link>
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/contact">Contact Us</Link>
                    </div>
                    <div  className="lg:w-auto xl:w-auto sm:w-full md:w-auto xs:w-full">
                        <BtnDropdown/>
                    </div>
                </div>
                <motion.div
                    animate={
                        showNavToggler ? "open": 
                        showNavToggler===false ? 
                        "closed":"default"
                    }
                    ref={navRef}
                    variants={variants}
                    className="mobilenav lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col justify-between w-full items-center bg_transparent">
                    <div className="navList flex lg:flex-row xl:flex-row justify-between md:flex-row sm:flex-col xs:flex-col xxs:flex-col lg:w-[50%] xl:w-[50%] md:w-[70%] sm:w-[100%] xs:w-[100%]">
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/">Home</Link>
                        <AboutUsDropdown/>
                        <OpenAccountDropdown/>
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/?tab=testimony">Success Story</Link>
                        <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/contact">Contact Us</Link>
                    </div>
                    <div  className="lg:w-auto xl:w-auto sm:w-full md:w-auto xs:w-full">
                        <BtnDropdown/>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}