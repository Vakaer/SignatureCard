import React from 'react'

export const LanguageToggle = () => {
    return (
        <>
            <div>
                <div style={{ height: '50px', backgroundColor: 'white', position: 'relative' }}>
                    <button style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '50%', border: 'none' }}>Ger</button>
                    <button style={{ backgroundColor: 'white', padding: '10px', position: 'absolute', borderRadius: '50%', border: 'none' }}>Eng</button>
                </div>
            </div>
        </>
    )
}
