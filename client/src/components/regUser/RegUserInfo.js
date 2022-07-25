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
    let [nameTextField, setName] = useState("");
    let [currentLang, setLang] = useState("");
    let [currentEmail, setEmail] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:3001/user/${props.user_id}`)
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
        Axios.put(`http://localhost:3001/user/edit-name/${props.user_id}/${nameTextField}`)
            .then((response) => {
                if(response.status===200) {
                    setUser([{...currentUser[0], "name":nameTextField}]);
                    setName("");
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
