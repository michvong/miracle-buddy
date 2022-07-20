import React from "react";
import {useEffect, useState} from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Search() {

    let [Location, setCategory] = useState([]);
    let [Services, setServices] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/posts').then((response) => { setCategory(response.data)});
        Axios.get('http://localhost:3001/services').then((response) => { setServices(response.data)});
    }, []);

    const reactButton = (service1) => {
        if (service1 === 'All'){
            Location = {};
            Axios.get('http://localhost:3001/posts').then((response) => { setCategory(response.data)});
            return;
        }
        Axios.post('http://localhost:3001/sort-services', {
            service: service1
        }).then((response)=>{
            console.log(response);
            Location = {};
            setCategory(response.data);
        });

    };

    const filterResults = (service) => {
        Location = {};
        Axios.get('http://localhost:3001/byservice').then((response) => { setCategory(response.data)});
    }

    return (
        <div>
        <div className="App">
            <DropdownButton id="dropdown-basic-button" title="Service">
                <Dropdown.Item onClick={()=>{reactButton('All')} }>All</Dropdown.Item>
                {Services.map((val) => {
                    return (
                        <Dropdown.Item onClick={()=>{reactButton(val.name)} }>{val.name}</Dropdown.Item>
                    );
                })}
            </DropdownButton>
        </div>
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>address</th>
                    <th>postal code</th>
                    <th>hours of operation</th>
                    <th>name</th>
                </tr>
                </thead>
                <tbody>
                {Location.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.address}</td>
                            <td>{val.postal_code}</td>
                            <td>{val.hours_of_operation}</td>
                            <td>{val.name}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
        </div>
    );
}