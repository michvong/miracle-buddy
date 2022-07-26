import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Accordion, Button} from 'react-bootstrap';
import Axios from 'axios';



// class CompanyInfo extends Component {
const CompanyInfo = (props) => {

    let [currentCompany, setCompany] = useState([]);
    let [nameTextField, setName] = useState("");
    let [phoneTextField, setPhone] = useState("");
    let [emailTextField, setEmail] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:3001/company/${props.company_id}`)
            .then((response) => {
                if(response.status === 200) {
                    setCompany(response.data);
                }
            });
    }, []);

    const handleSubmitName= ((event, nameTextField) => {
        event.preventDefault();
        if(nameTextField === ""){
            return; //no action, just return
        }
        //otherwise, update value
        Axios.put(`http://localhost:3001/company/edit-name/${props.company_id}/${nameTextField}`)
            .then((response) => {
                if(response.status===200) {
                    setCompany([{...currentCompany[0], "name":nameTextField}]);
                    setName("");
                }
            });
    });

    const handleSubmitPhone = ((event, phoneTextField) => {
        event.preventDefault();
        if(phoneTextField === ""){
            return; // no action, just return
        }
        Axios.put(`http://localhost:3001/company/edit-phone/${props.company_id}/${phoneTextField}`)
            .then((response) => {
                if(response.status === 200) {
                    setCompany([{...currentCompany[0], "phone_number":phoneTextField}]);
                    setPhone("");
                }
            });
    });

    const handleSubmitEmail = ((event, emailTextField) => {
        event.preventDefault();
        if(emailTextField ==="") {
            return; //no action
        }
        Axios.put(`http://localhost:3001/company/edit-email/${props.company_id}/${emailTextField}`)
            .then((response) => {
                if(response.status === 200) {
                    setCompany([{...currentCompany[0], "email":emailTextField}]);
                    setEmail("");
                }
            });
    });

    return (
        <Accordion>
            {currentCompany.map((val, key) => {
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
                            <Accordion.Header>Current Phone Number: {val.phone_number}</Accordion.Header>
                            <Accordion.Body>
                                <form onSubmit={(e) => handleSubmitPhone(e,phoneTextField)}>
                                    <label>
                                        Enter new Phone Number:
                                        <input type="text"
                                        value={phoneTextField}
                                        onChange={(e) => setPhone(e.target.value)}
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

export default CompanyInfo;
