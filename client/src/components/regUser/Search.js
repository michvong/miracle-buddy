import React, {useRef} from "react";
import {useEffect, useState} from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {useNavigate} from "react-router-dom";



export default function Search() {

    let [Location, setCategory] = useState([]);
    let [Services, setServices] = useState([]);
    let [Cities, setCity] = useState([]);

    const navigate = useNavigate();

    const handleDashboardClick = () => {
        navigate('/dashboard');
    }

    useEffect(()=>{
        Axios.get('http://localhost:3001/locations')
            .then((response) => { 
            setCategory(response.data);
        });

        Axios.get('http://localhost:3001/services')
            .then((response) => { 
                setServices(response.data);
            });

        Axios.get('http://localhost:3001/city')
            .then((response) => {
                setCity(response.data);
            });

    }, []);

    const reactButton = (service1, filter1) => {

        if (service1 === 'All'){
            Location = {};
            Axios.get('http://localhost:3001/locations').then((response) => { setCategory(response.data)});
            return;
        }

        Axios.post('http://localhost:3001/sort-services', {
            filter: filter1, service: service1
        }).then((response)=>{
            console.log(response);
            Location = {};
            setCategory(response.data);
        });

    };

    return (
        <Container>
            <Stack gap={3}>
                <div>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">miracle-buddy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={handleDashboardClick}>Dashboard</Nav.Link>
                                <NavDropdown title="Account" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" href="#">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" href="#">Warehouse</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#">Events</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Tab.Content>

                                    <Tab.Pane eventKey="first">
                                        <Stack gap={3}>
                                            <div>
                                                <h2>Services</h2>
                                            </div>
                                            <div>
                                                <Stack direction={"horizontal"} gap={2}>
                                                    <div>
                                                        <DropdownButton id="dropdown-basic-button2" title="Find By City">
                                                            <Dropdown.Item onClick={()=>{reactButton('All')} }>All</Dropdown.Item>
                                                            {Cities.map((val) => {
                                                                return (
                                                                    <Dropdown.Item onClick={()=>{reactButton(val.city, 'c.city')} }>{val.city}</Dropdown.Item>
                                                                );
                                                            })}
                                                        </DropdownButton>
                                                    </div>
                                                    <div>
                                                        <DropdownButton id="dropdown-basic-button" title="Find By Service">
                                                            <Dropdown.Item onClick={()=>{reactButton('All')} }>All</Dropdown.Item>
                                                            {Services.map((val) => {
                                                                return (
                                                                    <Dropdown.Item onClick={()=>{reactButton(val.name, 'b.name')} }>{val.name}</Dropdown.Item>
                                                                );
                                                            })}
                                                        </DropdownButton>
                                                    </div>
                                                </Stack>
                                            </div>
                                            <div>
                                                <Table striped bordered hover>
                                                    <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>City</th>
                                                        <th>Hours of Operation</th>
                                                        <th>Service</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {Location.map((val, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{val.name}</td>
                                                                <td>{val.address}</td>
                                                                <td>{val.city}</td>
                                                                <td>{val.hours_of_operation}</td>
                                                                <td>{val.service_name}</td>
                                                                <td><Button variant="secondary" size="sm">More</Button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Stack>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <Stack gap={3}>
                                            <div>
                                                <h2>Warehouse</h2>
                                            </div>
                                            <div>
                                                <Stack direction={"horizontal"} gap={2}>
                                                    <div>
                                                        <DropdownButton id="dropdown-basic-button2" title="Find By City">
                                                            <Dropdown.Item onClick={()=>{reactButton('All')} }>All</Dropdown.Item>
                                                            {Cities.map((val) => {
                                                                return (
                                                                    <Dropdown.Item onClick={()=>{reactButton(val.city, 'c.city')} }>{val.city}</Dropdown.Item>
                                                                );
                                                            })}
                                                        </DropdownButton>
                                                    </div>
                                                    <div>
                                                        <DropdownButton id="dropdown-basic-button" title="Find By Service">
                                                            <Dropdown.Item onClick={()=>{reactButton('All')} }>All</Dropdown.Item>
                                                            {Services.map((val) => {
                                                                return (
                                                                    <Dropdown.Item onClick={()=>{reactButton(val.name, 'b.name')} }>{val.name}</Dropdown.Item>
                                                                );
                                                            })}
                                                        </DropdownButton>
                                                    </div>
                                                </Stack>
                                            </div>
                                            <div>
                                                <Table striped bordered hover>
                                                    <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>City</th>
                                                        <th>Hours of Operation</th>
                                                        <th>Service</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {Location.map((val, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{val.name}</td>
                                                                <td>{val.address}</td>
                                                                <td>{val.city}</td>
                                                                <td>{val.hours_of_operation}</td>
                                                                <td>{val.service_name}</td>
                                                                <td><Button variant="secondary" size="sm">More</Button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Stack>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey = "third">
                                        <h2>Events</h2>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Stack>
        </Container>

    );
}