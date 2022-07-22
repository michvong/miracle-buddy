import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Axios from 'axios';
import Dashboard from './Dashboard';



// class RegUserInfo extends Component {
const RegUserInfo = (props) => {

    let [currentUser, setUser] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/user/${props.user_id}`)
            .then((response) => {
                setUser(response.data);
            });
    }, []);


    return (
        <Accordion>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>NAME</Accordion.Header>
                <Accordion.Body>
                    tmp empty body
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
                <Accordion.Header>NAME</Accordion.Header>
                <Accordion.Body>
                    tmp empty body
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
                <Accordion.Header>NAME</Accordion.Header>
                <Accordion.Body>
                    tmp empty body
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default RegUserInfo;
