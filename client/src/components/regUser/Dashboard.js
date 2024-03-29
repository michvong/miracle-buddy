import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
   
export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handlePersonalInfoClick = () => {
        navigate('/reguserinfo', { state: {user_id: location.state.user_id } });
    }

    const handleBookmarksClick = () => {
        navigate('/bookmarks', { state: {user_id: location.state.user_id } });
    }

    const handleSearchClick = () => {
        navigate('/search', { state: {user_id: location.state.user_id , name: location.state.name} });
    }

    const handleBackClick = () => {
        navigate('/reguserlogin');
    }

    return (
        <>
        <div className="pb-80 bg-cityscape1 bg-cover bg-center bg-no-repeat">

            <button className="p-2 hover:opacity-70" onClick={handleBackClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
            </button>

            <div class="flex justify-center pt-20">
                <p class="welcome-message text-3xl font-extrabold font-sans">
                    Welcome, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">{location.state.name}! #{location.state.user_id}</span>
                </p>
            </div>

            <div class="flex flex-row justify-center">
                <div class="px-4">
                    <Card className="mt-6 w-96">
                        <button onClick={handlePersonalInfoClick}>

                            <CardHeader color="blue" variant="gradient" className="relative h-56 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    className="h-20 w-20" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                                    clipRule="evenodd" />
                                </svg>
                            </CardHeader>

                        </button>

                        <CardBody className="text-center">
                            <button onClick={handlePersonalInfoClick}>
                                <Typography variant="h5" className="mb-2">
                                    Personal Information
                                </Typography>
                            </button>
                            <Typography>
                                You can update any personal information here (Name, email, language).
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                <div class="px-4">
                    <Card className="mt-6 w-96">
                        <button onClick={handleBookmarksClick}>
                            <CardHeader color="blue" variant="gradient" className="relative h-56 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    className="h-20 w-20" fill="none" viewBox="0 0 24 24" 
                                    stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </CardHeader>
                        </button>

                        <CardBody className="text-center">
                            <button onClick={handleBookmarksClick}>
                                <Typography variant="h5" className="mb-2">
                                    Bookmarks
                                </Typography>
                            </button>
                            <Typography>
                                View and edit companies that you have bookmarked.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            
                <div class="px-4">
                    <Card className="mt-6 w-96">
                        <button onClick={handleSearchClick}>
                            <CardHeader color="blue" variant="gradient" className="relative h-56 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    className="h-20 w-20" fill="none" 
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </CardHeader>
                        </button>

                        <CardBody className="text-center">
                            <button onClick={handleSearchClick}>
                                <Typography variant="h5" className="mb-2">
                                    Search Services
                                </Typography>
                            </button>
                            <Typography>
                                View services offered by companies and their locations.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        </>
    );
}