import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

export default function LoginLanding() {
    const navigate = useNavigate();

    const handleRegUserClick = () => {
        navigate('/reguserlogin');
    }

    const handleCompanyAuthUserClick = () => {
        navigate('/companyauthlogin');
    }

    return (
        <div className="pt-32 pb-12 md:pt-52 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
                <h1 className="pt-12 text-7xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Miracle<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">Buddy</span></h1>
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">We believe that basic necessities should be accessible to all. Whether you need a advice or a place to stay, this is a plentiful and handy resource for those in need.</p>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                        <div className="px-4 ">
                            <Button className="bg-blue" variant="gradient" onClick={handleRegUserClick}>Regular user</Button>
                            {/* <a className="btn text-white bg-blue-500 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Regular user</a> */}
                        </div>
                        <div className="px-4">
                            <Button className="bg-black" variant="filled" onClick={handleCompanyAuthUserClick}>Company user</Button> 
                            {/* <a className="btn text-white bg-black hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Company user</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}