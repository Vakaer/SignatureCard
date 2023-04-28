import React, { useState } from 'react'
import { Logo } from '../AnimatedLogo/Logo'
import '../Login/Login.css'
import mobileFrame from '../../assets/pages-images/Login/login-m-frame.svg'
import { Link } from 'react-router-dom'
export const Login = () => {
    const [Login, setIsLogin] = useState(true)
    const [Register, setRegister] = useState(false)
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
                                    <div className='d-flex flex-row justify-content-between ps-5 pe-5 align-items-start' style={{ marginTop: '5rem' }}>
                                        <h4 className='text-light'>Welcome</h4>
                                        <div className='tabbed-buttons d-inline p-2 '>
                                            <button className={`btn-login py-px-2-2 ${Login ? 'bg-green' : null}`} onClick={() => { setIsLogin(true); setRegister(false); }}>Login</button>
                                            <button className={`btn-login py-px-2-2 ${Register ? 'bg-green' : null}`} onClick={() => { setRegister(true); setIsLogin(false); }}>Register</button>
                                        </div>
                                    </div>
                                    <div className='text-light col-10 ms-auto me-auto mt-4'>
                                        <div className="mb-3">
                                            <label className="form-label ms-4">Login</label>
                                            <input type="email" className="form-control custom-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label ms-4">Password</label>
                                            <input type="password" className="form-control custom-input" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3 ms-3">
                                            <a style={{ textDecoration: 'underline', fontSize: '12px' }}>Forgot your password?</a>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button type="submit" className="btn-login py-px-2-4 bg-green">Login</button>
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
