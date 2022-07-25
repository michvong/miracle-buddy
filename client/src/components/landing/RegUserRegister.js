import React from 'react';
import {useEffect, useState} from "react";
import Axios from "axios";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export default function RegUserLogin() {
    const [Users, setUsers] = useState([]);
    const [selected, setSelected] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:3001/regusers')
            .then((response) => { 
                setUsers(response.data);
                setSelected(response.data[0]);
            });
    }, []);

    const handleUserSelect = (userName) => {
        setSelected({ name: userName });
    }

    const handleLoginClick = () => {
        navigate('/dashboard', { state: {name: selected.name, user_id: selected.user_id } });
    }

    const handleRegisterClick = () => {
        navigate('/reguserregister');
    }

    const handleBackClick = () => {
        navigate('/reguserlogin');
    }

    return (
        <>
        <div className="bg-gradient-to-r from-yellow-100 via-blue-200 to-transparent w-full h-full animate-text">
            <button className="p-2 hover:opacity-70" onClick={handleBackClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
            </button>

            <div className="flex justify-center pt-40">
            </div>

            <div className="flex justify-center pb-2">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Customer Registration</h2>
            </div>

            <h2 className="text-center text-2xl font-extrabold text-gray-900 pb-2">Please fill in the following <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">details:</span></h2>

            <div className="flex justify-center">
                <div className="top-18 w-80 pb-40 max-w-sm mx-auto">
                    <form>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="text-sm font-medium mb-1" htmlFor="name">Name</label>
                                <Input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="text-sm font-medium mb-1" htmlFor="email">Email</label>
                                <Input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="text-sm font-medium mb-1" htmlFor="language">Language</label>
                                <Input id="language" type="language" className="form-input w-full text-gray-800" placeholder="Enter your preferred language" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="flex justify-center w-full px-3">
                                <Button className="btn-blue mr-2 w-full" size="md" variant="gradient">Sign up</Button>
                                {/* <button className="btn text-black hover:bg-blue-700 w-full">Sign up</button> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
