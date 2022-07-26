import {useEffect, useState} from "react";
import Axios from "axios";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export default function RegUserLogin() {
    const [Users, setUser] = useState([]);
    const [selected, setSelected] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:3001/companyauthusers')
            .then((response) => { 
                setUser(response.data);
                setSelected(response.data[0]);
            });
    }, []);

    const handleUserSelect = (userName) => {
        setSelected({ name: userName });
    }

    const handleLoginClick = () => {
        navigate('/compdashboard', { state: {name: selected.name, user_id: selected.user_id, company_id: selected.company_id } });
    }
    
    const handleBackClick = () => {
        navigate('/loginlanding');
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

            <div className="flex justify-center pt-20 pb-4">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Company Login</h2>
            </div>

            <h2 className="text-center text-2xl font-extrabold text-gray-900">Sign in to your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">account</span></h2>

            <div className="flex justify-center">
                
                <div className="top-16 w-80 pb-80">
                    <Listbox value={selected} onChange={handleUserSelect}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <SelectorIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">

                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {Users.map((val, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`}
                                            value={val.name}>

                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                        {val.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                    
                    
                    <div className="text-sm text-center m-3">If you are logging in as a regular user, please click <a href="/reguserlogin">here!</a></div>
                    <div className="flex justify-center pb-40">
                        <Button className="btn-blue m-0" size="sm" variant="gradient" onClick={handleLoginClick}>Login</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
