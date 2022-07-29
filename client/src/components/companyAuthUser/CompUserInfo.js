import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Accordion, Button} from 'react-bootstrap';
import Axios from 'axios';
import CompDashboard from './CompDashboard';



const CompUserInfo = (props) => {

    const info = useLocation();
    let [currentUser, setUser] = useState([]);
    let [nameTextField, setName] = useState("");
    let [langTextField, setLang] = useState("");
    let [emailTextField, setEmail] = useState("");

    const fetch_user_id = () => {
        try{
            return info.state.user_id
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

    return (
        <Accordion>
            {currentUser.map((val, key) => {
                return(
                    <div key={key}>
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
                    </div>
                );
            })}
        </Accordion>
    );
}

export default CompUserInfo;
