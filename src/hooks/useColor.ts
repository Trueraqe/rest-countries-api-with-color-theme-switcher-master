import { useEffect } from "react";

export default function useColor(){

    useEffect(() => {

        if (localStorage.getItem('mode') === 'light'){
            document.documentElement.style.setProperty('--color-bg-color', "hsl(0,0%,95%)");
            document.documentElement.style.setProperty('--color-elem-color', "hsl(0,100%,100%)");
            document.documentElement.style.setProperty('--color-text-color', "hsl(200,15%,8%)");
        }
        else{
            document.documentElement.style.setProperty('--color-bg-color', "hsl(207,26%,17%)");
            document.documentElement.style.setProperty('--color-elem-color', "hsl(209,23%,22%)");
            document.documentElement.style.setProperty('--color-text-color', "hsl(0,100%,100%)");
        }

    }, []);
    
}