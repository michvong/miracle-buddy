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

    const handleClick = () => {
        navigate('/reguserinfo');
    }

    return (
        <Card className="mt-6 w-96">
        <CardHeader color="blue" className="relative h-56">
            {/* <img
            src="/img/blog.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
            /> */}
        </CardHeader>

        <CardBody className="text-center">
            <button onClick={handleClick}>
                <Typography variant="h5" className="mb-2">
                    Personal Information
                </Typography>
            </button>
            <Typography>
            {/* The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life in
            Barcelona. */}
            You can update any personal information here (Name, email, language).
            </Typography>
        </CardBody>
        </Card>
    );
}