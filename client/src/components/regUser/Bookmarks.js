import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Accordion, Button} from 'react-bootstrap';
import Axios from 'axios';
import Dashboard from './Dashboard';

export default function Bookmarks() {

    const info = useLocation();

    let [currentUser, setUser] = useState([]);
    let [testNumber, setNumber] = useState(0);
    let [currentBookmarks, setBookmarks] = useState([]);

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


    return (
        <div>
            <h1>Hello {currentUser[0].name}</h1>
            <form onSubmit={(e) => grab_company_ids(e)}>
            </form>
        </div>

    );
}
