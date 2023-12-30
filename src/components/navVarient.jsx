export const variants = {
    open: { 
        opacity: 1, 
        x: 0, 
        ease: [0.2, 0.65, 0.3, 0.9],
        display:'flex',
        height:'auto',
        transition: { 
            staggerChildren: 0.07, 
            delayChildren: 0.2 
        } 
    },
    default: { 
        opacity: 1
    },
    closed: {
         opacity: 0,
         height:0,
         x: "-100%",
         display:'none',
         transition: { 
            staggerChildren: 0.05, 
            staggerDirection: -1 
        } },
}