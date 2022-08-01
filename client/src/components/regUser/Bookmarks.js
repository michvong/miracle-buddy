import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import {Accordion, Button, Navbar, Table, Stack, Container, Col, Row} from 'react-bootstrap';
import Axios from 'axios';
import Dashboard from './Dashboard';

export default function Bookmarks() {

    const navigate = useNavigate();
    const location = useLocation();

    let [currentUser, setUser] = useState([]);
    let [company, setCompany] = useState(0);
    let [bookmarks, setBookmarks] = useState([]);

    const fetch_user_id = () => {
        try{
            return location.state.user_id
        } catch (e) {
            Navigate('/reguserLogin')
        }
    }

    useEffect(() => {
        Axios.get(`http://localhost:3001/user/${fetch_user_id()}`)
            .then((response) => {
                if(response.status === 200) {
                    // setNumber(testNumber++);
                    // setBookmarks(response.data);
                    setUser(response.data);
                }
            })
    })

    const grab_companies = ((event) => {
        event.preventDefault();
        Axios.get(`http://localhost:3001/bookmark-bookmarked-companies/${fetch_user_id()}`)
            .then((response) => {
                if(response.status === 200) {
                    setBookmarks(response.data);
                }
            });
    });

    const remove_bookmark = ((event, companyID) => {
        event.preventDefault();
        console.log("Removing bookmark");
        Axios.post('http://localhost:3001/bookmark-delete', {
            company_id: companyID, user_id: fetch_user_id(),
        }).then((response) => {
            if(response.status ===200) {
                grab_companies(event);
            }
        })
    });

    const handleBackClick = () => {
        navigate('/dashboard', { state: {name: currentUser[0].name, user_id: currentUser[0].user_id } });
    }

    return (
        <Container fluid="xxl" >
            <button className="p-2 hover:opacity-70" onClick={handleBackClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
            </button>
        <Accordion >
            {currentUser.map((val, key) => {
                return(
                    <div key={key}>
                        <Accordion.Item eventkey='0'>
                            <Accordion.Header>
                                Hello {val.name}
                            </Accordion.Header>
                            <Accordion.Body>
                                <form onSubmit={(e) => grab_companies(e)}>
                                    <Button type="submit">Click to load Bookmarks</Button>
                                </form>
                                <Stack gap={3}>
                                    <div></div>
                                    <Container fluid>
                                        <Row>
                                            <Col><h3>Company Name</h3></Col>
                                            <Col><h3>Company Phone</h3></Col>
                                            <Col><h3>Company Email</h3></Col>
                                            <Col><h3>Remove Bookmark</h3></Col>
                                        </Row>
                                        {bookmarks.map((val, key) => {
                                            return (
                                                <Row key={key}>
                                                    <Col>{val.name}</Col>
                                                    <Col>{val.phone_number}</Col>
                                                    <Col>{val.email}</Col>
                                                    <Col><Button onClick={(e) => remove_bookmark(e, val.company_id)} >Remove</Button></Col>
                                                </Row>
                                            );
                                        })}
                                    </Container>
                                </Stack>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                );
            })}
        </Accordion>
        </Container>
    );
}
