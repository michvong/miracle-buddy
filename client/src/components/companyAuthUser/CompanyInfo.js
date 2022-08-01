import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Accordion, Button, Container} from 'react-bootstrap';
import Axios from 'axios';



// class CompanyInfo extends Component {
const CompanyInfo = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    let [currentUser, setUser] = useState([]);
    let [currentCompany, setCompany] = useState([]);
    let [nameTextField, setName] = useState("");
    let [phoneTextField, setPhone] = useState("");
    let [emailTextField, setEmail] = useState("");
    
    const fetch_user_id = () => {
        try{
            return location.state.user_id
        } catch (e) {
            Navigate('/companyauthLogin')
        }
    }

     const fetch_company_id = () => {
        try{
            return location.state.company_id
        } catch (e) {
            Navigate('/companyauthLogin')
        }
    }

    //user user_id of company auth user to get company_id
    useEffect(() => {
        Axios.get(`http://localhost:3001/company/${fetch_company_id()}`)
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
        Axios.put(`http://localhost:3001/company/edit-name/${fetch_company_id()}/${nameTextField}`)
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
        Axios.put(`http://localhost:3001/company/edit-phone/${currentCompany.company_id}/${phoneTextField}`)
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
        Axios.put(`http://localhost:3001/company/edit-email/${currentCompany.company_id}/${emailTextField}`)
            .then((response) => {
                if(response.status === 200) {
                    setCompany([{...currentCompany[0], "email":emailTextField}]);
                    setEmail("");
                }
            });
    });

    const handleBackClick = () => {
        navigate('/compdashboard', { state: {name: currentUser[0].name, user_id: currentUser[0].user_id, company_id: currentUser[0].company_id } });
    }


    return (
        <Container fluid="xxl" >
            <button className="p-2 hover:opacity-70" onClick={handleBackClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
            </button>
            {currentCompany.map((val, key) => {
                return (
                    <div key={key}>
                        <Card>
                            <Card.Header>Account information for {val.name}</Card.Header>
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
                                            <Button color="blue" type="submit">Submit</Button>
                                        </form>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='1'>
                                    <Accordion.Header>Current Phone Number: {val.phone_number}</Accordion.Header>
                                    <Accordion.Body>
                                        <form onSubmit={(e) => handleSubmitPhone(e, phoneTextField)}>
                                            <label>
                                                Enter new Phone Number:
                                                <input type="text"
                                                    value={phoneTextField}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </label>
                                            <Button color="blue" type="submit">Submit</Button>
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
                                            <Button color="blue" type="submit">Submit</Button>
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

export default CompanyInfo;
