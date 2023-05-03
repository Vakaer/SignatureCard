import React from 'react'

export const Register = () => {
    return (
        <div className='text-light col-10 ms-auto me-auto mt-4'>
            <div className='d-flex flex-row gap-3'>
                <div className="mb-1 col-6">
                    <label className="form-label ms-4">FirstName</label>
                    <input type="text" className="form-control custom-input-register-page" id="exampleFirstName" aria-describedby="FirstNameHelp" />
                    <div id="FirstNameHelp" className="form-text"></div>
                </div>
                <div className="mb-1 col-6">
                    <label className="form-label ms-4">LastName</label>
                    <input type="text" className="form-control custom-input-register-page" id="exampleFirstName" aria-describedby="LastNameHelp" />
                    <div id="LastNameHelp" className="form-text"></div>
                </div>
            </div>
            <div className="mb-1">
                <label className="form-label ms-4">Email</label>
                <input type="email" className="form-control custom-input-register-page" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-1">
                <label className="form-label ms-4">PhoneNumber</label>
                <input type="number" className="form-control custom-input-register-page" id="exampleInputPassword1" />
            </div>
            <div className="mb-1 ms-3">
                <a style={{ textDecoration: 'underline', fontSize: '12px' }}>Forgot your password?</a>
            </div>
            <div className='d-flex justify-content-end'>
                <button type="submit" className="btn-login py-px-2-4 bg-green">Register</button>
            </div>
        </div>
    )
}
