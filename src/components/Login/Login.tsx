import React, { useState } from 'react'
import { Logo } from '../AnimatedLogo/Logo'
import '../Login/Login.css'
import mobileFrame from '../../assets/pages-images/Login/login-m-frame.svg'
export const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [isRegister, setIsRegister] = useState(false)
    return (
        <>
            <section className='Login-page login-bg' >
                <div className='container'>
                    <div className='row'>
                        <div className='d-flex flex-column justify-content-start gap-4'>
                            <div className='mt-3'>
                                <Logo />
                            </div>
                            <div className='d-flex flex-row justify-content-between gap-5 '>
                                <div className='transparent-box col-6'>
                                    <div className='d-flex flex-row'>
                                        <h4 className='text-light'>Welcome</h4>
                                        <div className='tabbed-buttons d-inline p-2'>
                                            <button className='btn' onClick={() => setIsLogin(true)}>Login</button>
                                            <button className='btn' onClick={() => setIsRegister(true)}>Register</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-box col-6 d-flex'>
                                    <img src={mobileFrame} alt='login QR code' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
