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
import {Accordion, Card} from "react-bootstrap";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";



export default function Search() {

    let [Location, setCategory] = useState([]);
    let [Services, setServices] = useState([]);
    let [Cities, setCity] = useState([]);
    let [Products, setProducts] = useState([]);
    let [Event, setEvent] = useState([]);
    let [Companies, setCompany] = useState([]);
    let [CompanyService, setCompanyServices] = useState([]);
    let [CompanyInventory, setCompanyInventory] = useState([]);
    let [CompanyEvent, setCompanyEvent] = useState([]);

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
        Axios.get('http://localhost:3001/products')
            .then((response) => {
                setProducts(response.data);
            });
        Axios.get('http://localhost:3001/event')
            .then((response) => {
                setEvent(response.data);
            });
        Axios.get('http://localhost:3001/company')
            .then((response) => {
                setCompany(response.data);
            });
    }, []);

    const sortServicesButton = (service1, filter1) => {
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

    const sortCompany = (companyID, filter1) => {
        Axios.post('http://localhost:3001/sort-services', {
            filter: filter1, service: companyID
        }).then((response)=>{
            console.log(response);
            CompanyService = {};
            setCompanyServices(response.data);
        });
        Axios.post('http://localhost:3001/sort-products', {
            id: companyID,
        }).then((response)=>{
            console.log(response);
            CompanyInventory = {};
            setCompanyInventory(response.data);
        });
        Axios.post('http://localhost:3001/sort-event', {
            id: companyID,
        }).then((response)=>{
            console.log(response);
            CompanyEvent = {};
            setCompanyEvent(response.data);
        });
    };

    const availability = (sum) => {
        if (sum>0) {
            return <text>In Stock. {sum} available{"\n"}<Button variant="secondary" size="sm">Search</Button></text>}
        return <text>Out of Stock. {sum} available{"\n"}<Button variant="secondary" size="sm" disabled>Search</Button></text>
    };

    return (
        <Container fluid="xxl" >
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
                    <Tab.Container defaultActiveKey="first">
                        <Row >
                            <Col sm={20} md={2} lg={2}>
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
                                    <Nav.Item className={"minimum-width"}>
                                        <Nav.Link eventKey="forth" href="#">Organizations</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={13} md={10} lg={10}>
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
                                                            <Dropdown.Item onClick={()=>{sortServicesButton('All')} }>All</Dropdown.Item>
                                                            {Cities.map((val) => {
                                                                return (
                                                                    <Dropdown.Item onClick={()=>{sortServicesButton(val.city, 'c.city')} }>{val.city}</Dropdown.Item>
                                                                );
                                                            })}
                                                        </DropdownButton>
                                                    </div>
                                                    <div>
                                                        <DropdownButton id="dropdown-basic-button" title="Find By Service">
                                                            <Dropdown.Item onClick={()=>{sortServicesButton('All')} }>All</Dropdown.Item>
                                                            {Services.map((val) => {
                                                                return (
                                                                    <Dropdown.Item onClick={()=>{sortServicesButton(val.name, 'b.name')} }>{val.name}</Dropdown.Item>
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
                                                                <td>{val.location_name}</td>
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
                                                <Accordion>
                                                    {Products.map((val) => {
                                                        return (
                                                            <Accordion.Item eventKey={val.name}>
                                                                <Accordion.Header>Item #{val.item_id} {val.name} - {val.description}</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <text className={"display-linebreak"}>
                                                                        {availability(val.inventory_sum)}
                                                                    </text>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        );
                                                    })}
                                                </Accordion>
                                            </div>
                                        </Stack>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey = "third">
                                        <Row>
                                            {Event.map((val) => {
                                                return (
                                                    <Col sm={'auto'}>
                                                        <Card style={{ width: '322px' }}>
                                                            <Card.Body>
                                                                <Card.Title>{val.event_name}</Card.Title>
                                                                <Card.Subtitle className="mb-2 text-muted">{val.location}</Card.Subtitle>
                                                                <Card.Text>
                                                                    {val.description}
                                                                </Card.Text>
                                                                <Card.Link href="#">Card Link</Card.Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey = "forth">

                                        <Stack gap={3}>

                                            <div>
                                                <Stack direction={"horizontal"} gap={3}>
                                                    <div>
                                                        <h2>Organization</h2>
                                                    </div>
                                                    <div>
                                                        <DropdownButton id="dropdown-basic-button2" title="Find By Organization" >
                                                            {Companies.map((val) => {
                                                                return (
                                                                    <Dropdown.Item onClick={()=>{sortCompany(val.company_id, 'd.company_id')} }>{val.name}</Dropdown.Item>
                                                                );
                                                            })}
                                                        </DropdownButton>
                                                    </div>
                                                </Stack>
                                            </div>
                                            <div>
                                                <h3>Services</h3>
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
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {CompanyService.map((val, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{val.location_name}</td>
                                                                <td>{val.address}</td>
                                                                <td>{val.city}</td>
                                                                <td>{val.hours_of_operation}</td>
                                                                <td>{val.service_name}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div>
                                                <h3>Inventory</h3>
                                            </div>

                                            <div>
                                                <Table striped bordered hover>
                                                    <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Description</th>
                                                        <th>Stock</th>
                                                        <th>Item #</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {CompanyInventory.map((val, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{val.name}</td>
                                                                <td>{val.description}</td>
                                                                <td>{val.stock}</td>
                                                                <td>{val.item_id}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div>
                                                <h3>Events</h3>
                                            </div>

                                            <div>
                                                <Table striped bordered hover>
                                                    <thead>
                                                    <tr>
                                                        <th>Event Name</th>
                                                        <th>Description</th>
                                                        <th>Location</th>
                                                        <th>Date</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {CompanyEvent.map((val, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{val.event_name}</td>
                                                                <td>{val.description}</td>
                                                                <td>{val.location}</td>
                                                                <td>{val.date}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Stack>

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