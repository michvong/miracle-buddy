import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Accordion, Button, Container} from 'react-bootstrap';
import Axios from 'axios';
import CompDashboard from './CompDashboard';



const CompUserInfo = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    let [currentUser, setUser] = useState([]);
    let [nameTextField, setName] = useState("");
    let [langTextField, setLang] = useState("");
    let [emailTextField, setEmail] = useState("");

    const fetch_user_id = () => {
        try{
            return location.state.user_id
        } catch (e) {
            Navigate('/companyauthLogin')
        }
    }

    useEffect(() => {
        Axios.get(`http://localhost:3001/compuser/${fetch_user_id()}`)
            .then((response) => {
                if(response.status === 200) {
                    setUser(response.data);
                }
            });
    }, []);

    const handleSubmitName= ((event, nameTextField) => {
        event.preventDefault();
        if(nameTextField === ""){
            return; //no action, just return
        }
        //otherwise, update value
        Axios.put(`http://localhost:3001/compuser/edit-name/${fetch_user_id()}/${nameTextField}`)
            .then((response) => {
                if(response.status===200) {
                    setUser([{...currentUser[0], "name":nameTextField}]);
                    setName("");
                }
            });
    });

    const handleSubmitLang = ((event, langTextField) => {
        event.preventDefault();
        if(langTextField === ""){
            return; // no action, just return
        }
        Axios.put(`http://localhost:3001/compuser/edit-lang/${fetch_user_id()}/${langTextField}`)
            .then((response) => {
                if(response.status === 200) {
                    setUser([{...currentUser[0], "language":langTextField}]);
                    setLang("");
                }
            });
    });

    const handleSubmitEmail = ((event, emailTextField) => {
        event.preventDefault();
        if(emailTextField ==="") {
            return; //no action
        }
        Axios.put(`http://localhost:3001/compuser/edit-email/${fetch_user_id()}/${emailTextField}`)
            .then((response) => {
                if(response.status === 200) {
                    setUser([{...currentUser[0], "email":emailTextField}]);
                    setEmail("");
                }
            });
    });

    const handleBackClick = () => {
        navigate('/compdashboard', { state: {name: currentUser[0].name, user_id: currentUser[0].user_id, company_id: currentUser[0].company_id } });
    }


    return (
        <Container>
            <button className="p-2 hover:opacity-70" onClick={handleBackClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
            </button>
            {currentUser.map((val, key) => {
                return(
                    <div key={key}>
        <Card>
                <Card.Header>{val.name}'s account information</Card.Header>
                <Card.Body>
                    <Card.Subtitle>Click on information that you would like to change</Card.Subtitle>
                </Card.Body>
        <Accordion>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Current Name: {val.name}</Accordion.Header>
                            <Accordion.Body>
                                <form onSubmit={(e) => handleSubmitName(e, nameTextField)}>
                                    <label>
                                        Enter new Name:
                                        <input type="text"
                                        value={nameTextField}
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
                                <form onSubmit={(e) => handleSubmitLang(e,langTextField)}>
                                    <label>
                                        Enter new Language:
                                        <input type="text"
                                        value={langTextField}
                                        onChange={(e) => setLang(e.target.value)}
                                        />
                                    </label>
                                    <Button color= "blue" type="submit">Submit</Button>
                                </form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Current email: {val.email}</Accordion.Header>
                            <Accordion.Body>
                                <form onSubmit={(e) => handleSubmitEmail(e, emailTextField)}>
                                    <label>
                                        Enter new Email:
                                        <input type="text"
                                        value={emailTextField}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </label>
                                    <Button color= "blue" type="submit">Submit</Button>
                                </form>
                            </Accordion.Body>
                        </Accordion.Item>
        </Accordion>
        </Card>
                    </div>
                );
            })}
        </Container>
    );
}

export default CompUserInfo;
