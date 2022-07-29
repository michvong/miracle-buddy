import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Accordion, Button, Navbar, Table} from 'react-bootstrap';
import Axios from 'axios';
import Dashboard from './Dashboard';

export default function Bookmarks() {

    const info = useLocation();

    let [currentUser, setUser] = useState([]);
    let [company, setCompany] = useState(0);
    let [bookmarks, setBookmarks] = useState([]);

    const fetch_user_id = () => {
        try{
            return info.state.user_id
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

    return (
        <Accordion>
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
                                <Table striped bordered hover>
                                    <thread>
                                        <tr>
                                            <th>Company Name</th>
                                            <th>Company Phone</th>
                                            <th>Company Email</th>
                                            <th>Remove Bookmark</th>
                                        </tr>
                                    </thread>
                                    <tbody>
                                        {bookmarks.map((val, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{val.name}</td>
                                                    <td>{val.phone_number}</td>
                                                    <td>{val.email}</td>
                                                    <td><Button ></Button></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>

                    </div>
                );
            })}
        </Accordion>
    );
}
