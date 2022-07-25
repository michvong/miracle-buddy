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

    const handleLoginClick = (userName, userId) => {
        navigate('/compdashboard', { state: {name: selected.name, user_id: selected.user_id } });
    }

    return (
        <>
        <div className="flex justify-center mt-20 pt-20">
        </div>

        <div className="flex justify-center pt-20">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Company Login</h2>
        </div>

        <h2 className="text-center text-2xl font-extrabold text-gray-900">Sign in to your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">account</span></h2>

        <div className="flex justify-center">
            
            <div className="top-16 w-80">
                <Listbox value={selected} onChange={handleUserSelect}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                                        className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`}
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
                <div className="flex justify-center">
                    <Button className="btn-blue m-0" size="sm" variant="gradient" onClick={handleLoginClick}>Login</Button>
                </div>
            </div>
        </div>
        </>
    )
}
