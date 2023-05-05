import React from 'react'
import '../theme/ThemeToggleButton.css'

type toggleThemeButtonProps = {
    changeTheme: () => void;
    theme: string;
    bgColor?: string
}
export const ThemeToggleButton = (props: toggleThemeButtonProps) => {
    return (
        <>
            <div className={`d-flex flex-row toggle-theme-button-wrapper p-2 ${props.bgColor}`}>
                <button className={`toggle-theme-button ${props.theme === "classic-theme-navbar" ? 'bg-blue ' : 'bg-no-color'}`} onClick={props.changeTheme}>classic</button>
                <button className={`toggle-theme-button ${props.theme === "funky-theme-navbar" ? 'bg-blue' : 'bg-no-color '}`} onClick={props.changeTheme}>funky</button>
            </div>
        </>
    )
}
