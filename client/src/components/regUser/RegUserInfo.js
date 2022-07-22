import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';

export default function RegUserInfo() {

    let [user_id, setUser] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/user/${user_id}`)
            .then((response) => {
                setUser(response.data);
            });
    }, []);



    return (
        <Card style={{ width: '68rem' }}>
            <Card.Body>
                <Card.Title></Card.Title>
            </Card.Body>
        </Card>
    );
}