import { useRef } from "react";
import { Footer } from "./footer"
import { GotoTop } from "./gottop"
import { Nav } from "./nav"

export const Layout =({
    children
})=>{
    const scrollToViewRef = useRef(null);
    return(
        <div>
            <Nav
                scrollToViewRef={scrollToViewRef}
            />
            <div ref={scrollToViewRef}>
                {children}
            </div>
            <GotoTop scrollToViewRef={scrollToViewRef}/>
            <Footer />
        </div>
    )
}