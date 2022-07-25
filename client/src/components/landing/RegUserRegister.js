import React from 'react';
import {useEffect, useState} from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function RegUserLogin() {
    const [Name, setName] = useState([]);
    const [Email, setEmail] = useState({});
    const [Language, setLanguage] = useState({});
    const navigate = useNavigate();

    const handleSetNewUser = (Name, Email, Language) => {
        Axios.put(`http://localhost:3001/user/add-user/`)
            .then((response) => {
                if (response.status === 200) {
                    // if id exists, just keep incrementing by 1?
                    setName([{ "name": Name }]);
                    setEmail([{ "email": Email }]);
                    setLanguage([{ "language": Language }]);
                }
        });
    }
    // useEffect(() => {
    //     Axios.get('http://localhost:3001/regusers')
    //         .then((response) => { 
    //             setUsers(response.data);
    //             setSelected(response.data[0]);
    //         });
    // }, []);

    // const handleUserSelect = (userName) => {
    //     setSelected({ name: userName });
    // }

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
                                <input id="name" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="text-sm font-medium mb-1" htmlFor="email">Email</label>
                                <input id="email" type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="text-sm font-medium mb-1" htmlFor="language">Language</label>
                                <input id="language" type="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your preferred language" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="flex justify-center w-full px-3 pb-2">
                                <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-100 dark:hover:bg-blue-300 dark:focus:ring-blue-500">Sign up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
