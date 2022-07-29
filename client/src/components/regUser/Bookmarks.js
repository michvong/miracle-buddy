import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Accordion, Button, Navbar} from 'react-bootstrap';
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

    const grab_company_ids = ((event) => {
        event.preventDefault();
        Axios.get(`http://localhost:3001/bookmark-bookmarked-companies/${fetch_user_id()}`)
            .then((response) => {
                if(response.status === 200) {
                    setBookmarks(response.data);
                }
            });
    });

    const grab_company = ((company_id, key) => {
        Axios.get(`http://localhost:3001/company/${company_id}`)
            .then((response) => {
                if(response.status === 200) {
                    // setCompany(response.data);
                    // setCompany(...company, company[key] = response.data[0]);
                    setCompany({company : company.concat(response.data)})
                }
            });
    });


    return (
        <Navbar>
            {currentUser.map((val, key) => {
                return (
                    <div key={key}>
                        <h1>Hello {val.name}</h1>
                        <form onSubmit={(e) => grab_company_ids(e)}>
                            <Button color="blue" type="submit">List Bookmarks</Button>
                        </form>
                        {bookmarks.map((val, key) => {
                            // grab_company(val.company_id);
                            return(
                                <div key={key}>

                                </div>
                            );
                        })};
                    </div>
                );
            })};
        </Navbar>

    );
}
