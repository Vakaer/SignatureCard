import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../App/App'

export const LanguageToggle = () => {
    const lang = useContext(ThemeContext)
    const [language, setLanguage] = useState(true)
    return (
        <>
            <div>
                <button className={`gr-button ${language ? 'eng-hide' : null}`} onClick={() => { lang?.handleLanguageChange("gr") }} style={{ padding: '3px', borderRadius: '50%', border: '1px solid #144F53', position: 'absolute' }}>Ger</button>
                <div style={{ paddingTop: '2.5rem', height: 'fit-content', backgroundColor: 'white', display: 'flex', flexDirection: 'column', borderRadius: '18px' }}>
                    <button className='en-btn' onClick={() => { lang?.handleLanguageChange("en") }} style={{ padding: '3.5px', border: 'none', backgroundColor: 'transparent' }}>Eng</button>
                </div>
            </div>
        </>
    )
}
