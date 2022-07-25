import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

export default function Dashboard() {
    const navigate = useNavigate();

    // TODO: Fill in the handleClicks
    const handlePersonalInfoClick = () => {
        // navigate('/reguserinfo');
    }
    
    const handleCompanyInfoClick = () => {
        // navigate('/reguserinfo');
    }

    const handleLocationsClick = () => {
        // navigate('/bookmarks');
    }

    const handleWarehousesClick = () => {
        // navigate('/search')
    }

    const handleEventsClick = () => {
        // navigate('/search')
    }

    return (
        <>
        <div class="flex justify-center pt-32 pb-8">
            <p class="welcome-message text-3xl font-sans">
                Welcome, [name]!
            </p>
        </div>

        <div class="flex flex-row justify-center">
            <div class="px-4">
                <Card className="mt-6 w-96">
                    <button onClick={handlePersonalInfoClick}>

                        <CardHeader color="blue" className="relative h-56 flex justify-center items-center">
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
                    <button onClick={handleCompanyInfoClick}>

                        <CardHeader color="blue" className="relative h-56 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-20 w-20" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                                clipRule="evenodd" />
                            </svg>
                        </CardHeader>

                    </button>

                    <CardBody className="text-center">
                        <button onClick={handleCompanyInfoClick}>
                            <Typography variant="h5" className="mb-2">
                                Company Information
                            </Typography>
                        </button>
                        <Typography>
                            You can update any company information here (Name, email, phone number).
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
        
        <div class="flex flex-row justify-center pb-32">
            <div class="px-4">
                <Card className="mt-6 w-96">
                    <button onClick={handleLocationsClick}>
                        <CardHeader color="blue" className="relative h-56 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-20 w-20" fill="none" viewBox="0 0 24 24" 
                                stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </CardHeader>
                    </button>

                    <CardBody className="text-center">
                        <button onClick={handleLocationsClick}>
                            <Typography variant="h5" className="mb-2">
                                Locations
                            </Typography>
                        </button>
                        <Typography>
                            View and edit the company's location(s) information
                        </Typography>
                    </CardBody>
                </Card>
            </div>

            <div class="px-4">
                <Card className="mt-6 w-96">
                    <button onClick={handleWarehousesClick}>
                        <CardHeader color="blue" className="relative h-56 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-20 w-20" fill="none" 
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </CardHeader>
                    </button>

                    <CardBody className="text-center">
                        <button onClick={handleWarehousesClick}>
                            <Typography variant="h5" className="mb-2">
                                Warehouses
                            </Typography>
                        </button>
                        <Typography>
                            View and edit the company's warehouse(s) information
                        </Typography>
                    </CardBody>
                </Card>
            </div>

            <div class="px-4">
                <Card className="mt-6 w-96">
                    <button onClick={handleEventsClick}>
                        <CardHeader color="blue" className="relative h-56 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-20 w-20" fill="none" 
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </CardHeader>
                    </button>

                    <CardBody className="text-center">
                        <button onClick={handleEventsClick}>
                            <Typography variant="h5" className="mb-2">
                                Events
                            </Typography>
                        </button>
                        <Typography>
                            View and edit the company's event(s) information
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
        </>
    );
}