import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";

export default function CompDashboard() {
    const navigate = useNavigate();
    const location = useLocation();

    // TODO: Fill in the handleClicks
    const handlePersonalInfoClick = () => {

        navigate('/compuserinfo', {state: {user_id: location.state.user_id}});
    }
    
    const handleCompanyInfoClick = () => {
        navigate('/companyinfo', {state: {user_id: location.state.user_id, name: location.state.name, company_id: location.state.company_id }});
    }
    
    const handleCompanyInfoClick2 = () => {

        navigate('/FILL_THIS_IN', { state: { user_id: location.state.user_id } });
    }
    
    const handleCompanyInfoClick3 = () => {
        navigate('/FILL_THIS_IN', { state: { company_id: location.state.company_id } });
    }

    const handleLocationsClick = () => {
        navigate('/compedit', { state: { company_id: location.state.company_id, tab: "first", name: location.state.name} });
    }

    const handleWarehousesClick = () => {
        navigate('/compedit', { state: { company_id: location.state.company_id, tab: "second", name: location.state.name } });
    }

    const handleEventsClick = () => {
        navigate('/compedit', { state: { company_id: location.state.company_id, tab: "third", name: location.state.name } });
    }

    const handleBackClick = () => {
        navigate('/companyauthlogin');
    }

    return (
        <>
        <div className="pb-40 bg-cityscape2 bg-cover bg-center bg-no-repeat">

            <button className="p-2 hover:opacity-70" onClick={handleBackClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
            </button>

            <div class="flex justify-center pt-20">
                <p class="welcome-message text-3xl font-extrabold font-sans">
                    Welcome, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">{location.state.name}! #{location.state.company_id}</span>
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
                        <button onClick={handleCompanyInfoClick}>

                            <CardHeader color="blue" variant="gradient" className="relative h-56 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" 
                                    stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" 
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                            <button onClick={handleLocationsClick}>
                                <Typography variant="h5" className="mb-2">
                                    Locations
                                </Typography>
                            </button>
                            <Typography>
                                View and edit the company's location(s) information.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                <div class="px-4">
                    <Card className="mt-6 w-96">
                        <button onClick={handleWarehousesClick}>
                            <CardHeader color="blue" variant="gradient" className="relative h-56 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" 
                                    stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" 
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
                                View and edit the company's warehouse(s) information.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                <div class="px-4">
                    <Card className="mt-6 w-96">
                        <button onClick={handleEventsClick}>
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
                            <button onClick={handleEventsClick}>
                                <Typography variant="h5" className="mb-2">
                                    Events
                                </Typography>
                            </button>
                            <Typography>
                                View and edit the company's event(s) information.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        </>
    );
}