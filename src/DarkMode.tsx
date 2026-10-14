import { useState } from "react";

export default function DarkMode(){

    const [mode, setMode] = useState<boolean>(localStorage.getItem('mode') === 'light' ? false : true);

    const handleChangeColorLight = () => {
    document.documentElement.style.setProperty('--color-bg-color', "hsl(0,0%,95%)");
    document.documentElement.style.setProperty('--color-elem-color', "hsl(0,100%,100%)");
    document.documentElement.style.setProperty('--color-text-color', "hsl(200,15%,8%)");
    localStorage.setItem('mode', 'light');
    setMode(false);
    };

    const handleChangeColorDark = () => {
    document.documentElement.style.setProperty('--color-bg-color', "hsl(207,26%,17%)");
    document.documentElement.style.setProperty('--color-elem-color', "hsl(209,23%,22%)");
    document.documentElement.style.setProperty('--color-text-color', "hsl(0,100%,100%)");
    localStorage.setItem('mode', 'dark');
    setMode(true);
    };

    return(
    <>
    {!mode ? <button className='text-sm hover:cursor-pointer' onClick={handleChangeColorDark}>🌙 Dark Mode</button> : <button className='text-sm hover:cursor-pointer' onClick={handleChangeColorLight}>☀️ Light Mode</button>}
    </>
)}