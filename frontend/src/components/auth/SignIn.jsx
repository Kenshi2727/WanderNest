import React from 'react'
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';


function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='min-h-screen grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2'>
            <div className='flex justify-center items-center m-4'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input validator" placeholder="Email" />
                    <div className="validator-hint">Enter valid email address</div>

                    <label className="label">Password</label>

                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} className="input validator" required placeholder="Password" minlength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                        <p className="validator-hint">
                            Must be more than 8 characters, including
                            <br />At least one number
                            <br />At least one lowercase letter
                            <br />At least one uppercase letter
                        </p>
                        <button
                            type="button"
                            className="absolute inset-y-0 -top-20 right-0 pr-3 flex items-center z-50"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5 text-base-content/40" />
                            ) : (
                                <Eye className="h-5 w-5 text-base-content/40" />
                            )}
                        </button>
                    </div>


                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
            <div className='size-full'>
                <img src="/sign-in.png" loading='lazy' className="bg-cover h-full" alt="sign-in-photo" />
            </div>
        </div>
    )
}

export default SignIn