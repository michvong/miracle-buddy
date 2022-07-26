import React from 'react';
import {useEffect, useState} from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { response } from 'express';

export default function RegUserLogin() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Language, setLanguage] = useState("");
    const navigate = useNavigate();

    const handleSignUpClick = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:3001/regusers/add-user', {
            name: Name,
            language: Language,
            email: Email
        }).then((response) => {
            console.log(response);
            // console.log(response.data);
            navigate('/dashboard', { state: {name: Name, user_id: response.data } });

        }).catch((error) => {
            console.log(error);
        });
    }

    const handleBackClick = () => {
        navigate('/reguserlogin');
    }

    const handleNameInput = (event) => {
        setName(event.target.value);
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const handleLanguageInput = (event) => {
        setLanguage(event.target.value);
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
                                <input id="name" type="text" value={Name} onChange={handleNameInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="text-sm font-medium mb-1" htmlFor="email">Email</label>
                                <input id="email" type="email" value={Email} onChange={handleEmailInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="text-sm font-medium mb-1" htmlFor="language">Language</label>
                                <input id="language" type="language" value={Language} onChange={handleLanguageInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your preferred language" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="flex justify-center w-full px-3 pb-2">
                                <button onClick={handleSignUpClick} className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-100 dark:hover:bg-blue-300 dark:focus:ring-blue-500">Sign up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
