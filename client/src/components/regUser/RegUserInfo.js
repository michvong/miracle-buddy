import React , { Component } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import Dashboard from './Dashboard';


const setUser = useState([]);

class RegUserInfo extends Component {

    // let [user_id, setUser] = useState([]);

    // useEffect(() => {
    //     Axios.get(`http://localhost:3001/user/${user_id}`)
    //         .then((response) => {
    //             setUser(response.data);
    //         });
    // }, []);
    constructor(props){
        super(props)
        this.state = {
            user_id: "2",
        }
    }

    user_info = (() => {
        Axios.get(`http://localhost:3001/user/${this.props.user_id}`)
            .then((response) => {
                setUser(response.data);
            });
    }, []);

    render(){
        return (
            <Card style={{ width: '68rem' }}>
                <Card.Body>
                    <Card.Title></Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default RegUserInfo;
