import { useEffect, useState } from 'react';

export const useWindowWidthAndHeight = ()=>{
    let windowInnerSize = [window.innerWidth, window.innerHeight];

    
    let [ windowSize, setWidowSize ] = useState(windowInnerSize);

    useEffect(()=>{
        const changeWindowSize = ()=>{
            setWidowSize([window.innerWidth, window.innerHeight]);
        }
     
        window.addEventListener("resize", changeWindowSize);

      
        return ()=> window.removeEventListener('resize', changeWindowSize);
    }, []);
   
    return windowSize;
}