import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { motion} from "framer-motion";
import React from 'react';
import { variants } from "./navVarient";
import { AboutUsDropdown } from "./dropdowns/aboutusDropdown";
import Hamburger from 'hamburger-react';
import { useWindowHeight } from "./useDimension";
import { Text } from "./text";

export const Nav =()=>{
    const navRef = useRef(null);
    const navigate = useNavigate()
    const [showNavToggler,setShowNavToggler] = useState(false);
    const scrollY = useWindowHeight();
    let accountOpening ="personal"

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
            className="lg:px-24 xl:px-24 pd:mx-8 sm:p-2 xs:px-2 xxs:px-2 w-full z-50 absolute"
        >
            <div className="flex flex-row justify-between items-center border-danger">
                <div className="lg:w-[20%] xl:w-[20%] md:w-[20%] sm:w-full xs:w-full lg:block xl:block md:block sm:hidden xs:hidden">
                    <img
                        src="https://zefa.vercel.app/images/zefa-transparent-with-green.png"
                        alt="object not found"
                        className="w-40"
                    />    
                    <Text
                        style="text-xs text-start text-white"
                        value="Licenced By Central Bank of Nigeria."
                    />
                </div>
                <div className="lg:w-[30%] xl:w-[30%] md:w-[50%] sm:w-full xs:w-full ">
                    <div className="lg:flex xl:flex md:flex sm:hidden xs:hidden flex-row justify-between items-center">
                        <Link className="text-sm text-white" to="/aboutUs?tab=mission">Mission</Link>
                        <Link className="text-sm text-white" to="/career">Career</Link>
                        <Link className="text-sm text-white" to="/aboutUs?tab=differentiators">Differentiators</Link>
                        <Link className="text-sm text-white" to="/contact">Contacts</Link>
                    </div>
                    <div
                        className="lg:hidden xl:hidden md:hidden sm:flex xs:flex flex-row justify-between w-full items-center">
                        <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-white" to={`/open_account/${accountOpening}`}>Open Account</Link>
                        <AboutUsDropdown/>
                        <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-white" to="/contact">Contact Us</Link>
                        <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-white" to="/loan">Apply For Loan</Link>
                    </div>
                </div>
            </div>
            <div className="lg:px-8 xl:px-8 md:px-0 sm:px-0 xs:px-0">
                <div
                    className={
                        `${
                            scrollY > 200
                            ? "opacity-100 translate-y-0 shadow-[0_0_40px_0_rgba(0,0,0,0.16)] fixed top-0 lg:w-[85%] xl:w-[85%] sm:w-[96%] md:w-[85%] xs:w-[96%]  z-50 transition-all duration-1000 "
                            : " translate-y-5"
                        }
                        flex lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col xs:p-2 xxs:p-2 lg:px-4 xl:px-8 md:px-8 lg:py-4 xl:py-4 md:py-4  justify-between items-center loan_cover mb-2
                        `
                    }
                >
                    <div className="lg:w-auto xl:w-auto md:w-auto sm:w-full xs:w-full lg:hidden xl:hidden md:hidden sm:flex xs:flex xxs:flex flex-row justify-between items-center">
                        <div>
                            <img
                                src="https://zefamfb.com/images/zefa-normal.png"
                                alt="object not found"
                                className="w-[7.5rem] lg:block xl:block md:block sm:hidden xs:hidden"
                            />
                            <img
                                src="https://zefa.vercel.app/images/zefa-transparent-with-green.png"
                                alt="object not found"
                                className="w-[7.5rem] lg:hidden xl:hidden md:hidden sm:block xs:block"
                            />
                        </div>
                        <Hamburger
                            toggled={showNavToggler}
                            toggle={setShowNavToggler}
                            color="white"
                            easing="ease-in"
                            size={20}
                        />
                    </div>
                     {/**desktop */}
                    <div
                        className="desktopNav lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col justify-between w-full items-center bg_transparent">
                        <div className="navList flex lg:flex-row xl:flex-row justify-between md:flex-row sm:flex-col xs:flex-col xxs:flex-col lg:w-[50%] xl:w-[50%] md:w-[70%] sm:w-[100%] xs:w-[100%]">
                            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-[#006837]" to="/">Home</Link>
                            <AboutUsDropdown/>
                            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-[#006837]" to={`/open_account/${accountOpening}`}>Open Account</Link>
                            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-[#006837]" to="/success_stories">Success Stories</Link>
                            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-[#006837]" to="/contact">Contact Us</Link>
                        </div>
                        <div  className="lg:w-auto xl:w-auto sm:w-full md:w-auto xs:w-full">
                            <button
                                onClick={()=>navigate("/loan")}
                                className="border lg:w-auto xl:w-auto sm:w-full md:w-auto xs:w-full applyBtn text-white rounded-md py-2 px-4 text-md cursor"
                            >
                                Apply for Loan
                            </button>
                        </div>
                    </div>
                    {/**mobile */}
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
                            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-white" to="/">Home</Link>
                            <AboutUsDropdown/>
                            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-white" to={`/open_account/${accountOpening}`}>Open Account</Link>
                            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-white" to="/success_stories">Success Story</Link>
                            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md text-white" to="/contact">Contact Us</Link>
                        </div>
                        <div  className="lg:w-auto xl:w-auto sm:w-full md:w-auto xs:w-full lg:border-none xl:border-none md:border-none sm:border xs:border rounded">
                            <button
                                onClick={()=>navigate("/loan")}
                                className="border lg:w-auto xl:w-auto sm:w-full md:w-auto xs:w-full applyBtn text-white rounded-md py-2 px-4 text-md cursor"
                            >
                                Apply for Loan
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}