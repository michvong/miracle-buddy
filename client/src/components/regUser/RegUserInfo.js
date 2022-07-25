import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Accordion, Button} from 'react-bootstrap';
import Axios from 'axios';
import Dashboard from './Dashboard';



// class RegUserInfo extends Component {
const RegUserInfo = (props) => {

    let [currentUser, setUser] = useState([]);
    let [currentName, setName] = useState("");
    let [currentLang, setLang] = useState("");
    let [currentEmail, setEmail] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:3001/user/${props.user_id}`)
            .then((response) => {
                setUser(response.data);
            });
    }, []);

    const handleSubmit= ((event) => {
        event.preventDefault();


        setName("");
    });

    return (
        <Accordion>
            {currentUser.map((val, key) => {
                return(
                    <div key={key}>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Current Name: {val.name}</Accordion.Header>
                            <Accordion.Body>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Enter new Name:
                                        <input type="text"
                                        value={currentName}
                                        onChange={(e) => setName(e.target.value)}
                                        />
                                    </label>
                                    <Button color= "blue" type="submit">Submit</Button>
                                </form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Current Language: {val.language}</Accordion.Header>
                            <Accordion.Body>
                                tmp empty body
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Current email: {val.email}</Accordion.Header>
                            <Accordion.Body>
                                tmp empty body
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                );
            })}
        </Accordion>
    );
}

export default RegUserInfo;
