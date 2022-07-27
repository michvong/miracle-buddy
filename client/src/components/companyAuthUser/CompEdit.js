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
import {useLocation, useNavigate} from "react-router-dom";
import {Accordion, Card, Form, Modal} from "react-bootstrap";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";
import {map} from "react-bootstrap/ElementChildren";
import InputGroup from 'react-bootstrap/InputGroup';


export default function CompEdit() {

    // Tables
    let [Location, setLocation] = useState([]);
    let [Inventory, setInventory] = useState([]);
    let [Event, setEvent] = useState([]);

    // Locations
    let [locationAddress, setAddress] = useState("");
    let [locationPostal, setPostal] = useState("");
    let [locationName, setServiceName] = useState("");
    let [locationHOP, setHOP] = useState("");
    let [locationServiceType, setServiceType] = useState("");
    let [locationCity, setLocationCity] = useState("");
    let [locationService, setLocationService] = useState("");

    // Warehouses
    let [inventoryName, setInventoryName] = useState("");
    let [inventoryDescription, setInventoryDescription] = useState("");
    let [inventoryStock, setInventoryStock] = useState("");
    let [inventoryItemID, setInventoryItemID] = useState("");

    // Events
    let [eventName, setEventName] = useState("");
    let [eventDate, setEventDate] = useState("");
    let [eventLocation, setEventLocation] = useState("");
    let [eventDescription, setEventDescription] = useState("");

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    let [Service, setService] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const navigate = useNavigate();

    const handleDashboardClick = () => {
        navigate('/compdashboard');
    }

    const info = useLocation();
    const {infoState} = info

    const [validated, setValidated] = useState(false);

    // Update Buttons
    const handleSubmitLocation = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return
        }
        setValidated(true);
        event.preventDefault();

        Axios.post('http://localhost:3001/update-service', {
            address: locationAddress, postal_code: locationPostal, hours_of_operation: locationHOP, name: locationName, company_id: fetchInput(), service_id: locationService
        }).then((response)=>{
            updateLocation();
        });

        setShow(false);
    };

    const handleSubmitWarehouse = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return
        }
        setValidated(true);
        event.preventDefault();

        Axios.post('http://localhost:3001/update-inventory', {
            name: inventoryName, description: inventoryDescription, stock: inventoryStock, item_id: inventoryItemID
        }).then((response)=>{
            updateInventory();
        });
        setShow2(false);
    };

    const handleSubmitEvent = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return
        }
        setValidated(true);
        event.preventDefault();

        Axios.post('http://localhost:3001/update-event', {
            location: eventLocation, description: eventDescription, eventName: eventName, date: eventDate
        }).then((response)=>{
            updateEvent();
        });

        setShow3(false);
    };

    // Delete Buttons

    const deleteLocation = (address, postal_code) => {
        Axios.post('http://localhost:3001/delete-service', {
            address: address, postal_code: postal_code
        }).then((response)=>{
            updateLocation();
        });
        setShow(false);
    }

    const deleteEvent = (event_name, date) => {
        Axios.post('http://localhost:3001/delete-event', {
            event_name: event_name, date: date
        }).then((response)=>{
            updateEvent();
        });
        setShow3(false);
    }

    function updateInventory() {
        Axios.post('http://localhost:3001/sort-products', {
            id: fetchInput(),
        }).then((response) => {
            Inventory = {};
            setInventory(response.data);
        });
    }

    function updateEvent() {
        Axios.post('http://localhost:3001/sort-event', {
            id: fetchInput(),
        }).then((response) => {
            Event = {};
            setEvent(response.data);
        });
    }

    function updateLocation() {
        Axios.post('http://localhost:3001/sort-services', {
            filter: 'a.company_id', service: fetchInput()
        }).then((response) => {
            Location = {};
            setLocation(response.data);
        });
    }

    useEffect(()=>{

        updateLocation();
        updateInventory();
        updateEvent();
        Axios.get('http://localhost:3001/services')
            .then((response) => {
                setService(response.data);
            });

    }, []);


    const fetchInput = () => {
        try{
            return info.state.company_id
        } catch (e) {
            return "Guest"
        }
    };

    const returnBoolean = (bool) => {
        return bool
    }

    return (
        <Container fluid="xxl" >
            <Stack gap={3}>
                <div>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">miracle-buddy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link onClick={handleDashboardClick}>Dashboard</Nav.Link>
                                <NavDropdown title="Account" id="basic-nav-dropdown">
                                    <NavDropdown.Item >Account</NavDropdown.Item>
                                    <NavDropdown.Item >Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item >Log Out</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end right-marg">
                            <Navbar.Text>
                                Logged In As: #{fetchInput()}
                            </Navbar.Text>
                        </Navbar.Collapse>

                    </Navbar>
                </div>
                <div>
                    <Tab.Container defaultActiveKey="first">
                        <Row >
                            <Col sm={20} md={2} lg={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" >Locations</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" >Inventory</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={"minimum-width"}>
                                        <Nav.Link eventKey="third" >Events</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={13} md={10} lg={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Stack gap={3}>
                                            <div>
                                                <h2>Locations</h2>
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
                                                                <td><Button variant="secondary" size="sm" onClick={()=>{handleShow(); setAddress(val.address); setHOP(val.hours_of_operation); setServiceName(val.location_name); setServiceType(val.service_name); setPostal(val.postal_code); setLocationCity(val.city); setLocationService(val.service_id)}}>Edit</Button>
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
                                                <h2>Inventory</h2>
                                            </div>
                                            <div>
                                                <Table striped bordered hover>
                                                    <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Description</th>
                                                        <th>Stock</th>
                                                        <th>Item #</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {Inventory.map((val, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{val.name}</td>
                                                                <td>{val.description}</td>
                                                                <td>{val.stock}</td>
                                                                <td>{val.item_id}</td>
                                                                <td><Button variant="secondary" size="sm" onClick={()=>{handleShow2(); setInventoryName(val.name); setInventoryDescription(val.description); setInventoryStock(val.stock); setInventoryItemID(val.item_id)}}>Edit</Button>
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
                                        <Stack gap={3}>
                                            <div>
                                                <h2>Events</h2>
                                            </div>
                                            <div>
                                                <Table striped bordered hover>
                                                    <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Description</th>
                                                        <th>Location</th>
                                                        <th>Date</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {Event.map((val, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{val.event_name}</td>
                                                                <td>{val.description}</td>
                                                                <td>{val.location}</td>
                                                                <td>{val.date}</td>
                                                                <td><Button variant="secondary" size="sm" onClick={()=>{handleShow3(); setEventName(val.event_name); setEventDescription(val.description); setEventLocation(val.location); setEventDate((val.date))}}>Edit</Button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Stack>
                                    </Tab.Pane>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit 1</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form noValidate validated={validated} onSubmit={handleSubmitLocation}>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                        <Form.Label>Location Address</Form.Label>
                                                        <Form.Control
                                                            required
                                                            placeholder="First name"
                                                            defaultValue={locationAddress}
                                                            readOnly
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                        <Form.Label>Postal Code</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="Last name"
                                                            defaultValue={locationPostal}
                                                            readOnly
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>

                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                                                        <Form.Label>Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Address" required defaultValue={locationName} onChange={(e)=> { setServiceName(e.target.value)}}/>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide a valid address.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                                                        <Form.Label>Hours Of Operation</Form.Label>
                                                        <Form.Control type="text" placeholder="Sat to Fri, 5PM to 6PM" required defaultValue={locationHOP} onChange={(e)=> { setHOP(e.target.value)}}/>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide a valid hours.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control
                                                            required
                                                            placeholder="First name"
                                                            defaultValue={locationCity}
                                                            onChange={(e)=> { setLocationCity(e.target.value)}}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                        <Form.Label>Service</Form.Label>
                                                        <Form.Select aria-label="Default select example" defaultValue={locationService} onChange={(e)=> { setLocationService(e.target.value)}}>
                                                            {Service.map((val) => {
                                                                return (
                                                                    <option value={val.service_id} onClick={(e)=>{ setLocationService(e.target.value)} }>{val.name} ({val.service_id})</option>
                                                                );
                                                            })}
                                                        </Form.Select>
                                                    </Form.Group>

                                                </Row>
                                                <Stack direction={"horizontal"} gap={1}>
                                                    <div>
                                                        <Button md="3" variant="danger" onClick={()=>{deleteLocation(locationAddress, locationPostal)}}>Delete</Button>
                                                    </div>
                                                    <div>
                                                        <Button md="3" type="submit">Save Changes</Button>
                                                    </div>
                                                </Stack>                                            </Form>
                                        </Modal.Body>
                                    </Modal>

                                    <Modal show={show2} onHide={handleClose2}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit 2</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form noValidate validated={validated} onSubmit={handleSubmitWarehouse}>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                        <Form.Label>Item #</Form.Label>
                                                        <Form.Control
                                                            required
                                                            isInvalid={returnBoolean(false)}
                                                            placeholder="1234"
                                                            defaultValue={inventoryItemID}
                                                            readOnly
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                        <Form.Label>Stock</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="Last name"
                                                            defaultValue={inventoryStock}
                                                            onChange={(e)=> { setInventoryStock(e.target.value); }}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                                                        <Form.Label>Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Name" required defaultValue={inventoryName} onChange={(e)=> { setInventoryName(e.target.value); }}/>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide a valid name.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control type="text" placeholder="Description" required defaultValue={inventoryDescription} onChange={(e)=> { setInventoryDescription(e.target.value); }}/>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide a valid description.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>

                                                <Stack direction={"horizontal"} gap={1}>
                                                    <div>
                                                        <Button md="3" variant="danger">Delete</Button>
                                                    </div>
                                                    <div>
                                                        <Button md="3" type="submit">Save Changes</Button>
                                                    </div>
                                                </Stack>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>

                                    <Modal show={show3} onHide={handleClose3}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit Events</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form noValidate validated={validated} onSubmit={handleSubmitEvent}>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                        <Form.Label>Event Name</Form.Label>
                                                        <Form.Control
                                                            required
                                                            isInvalid={returnBoolean(false)}
                                                            placeholder="Event Name"
                                                            defaultValue={eventName}
                                                            readOnly
                                                        />
                                                        <Form.Control.Feedback type="invalid">Please Provide Valid Event Name</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                        <Form.Label>Date</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="YYYY-MM-DD HH:MM:SS"
                                                            defaultValue={eventDate}
                                                            readOnly
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                                                        <Form.Label>Location</Form.Label>
                                                        <Form.Control required type="text" placeholder="Address, City" defaultValue={eventLocation} onChange={(e)=> { setEventLocation(e.target.value); }}/>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide a valid city.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Row><Row className="mb-3">
                                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control type="text" placeholder="Description" required defaultValue={eventDescription} onChange={(e)=> { setEventDescription(e.target.value); }}/>
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid description.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>

                                                <Stack direction={"horizontal"} gap={1}>
                                                    <div>
                                                        <Button md="3" variant="danger" onClick={()=>{deleteEvent(eventName, eventDate)}}>Delete</Button>
                                                    </div>
                                                    <div>
                                                        <Button md="3" type="submit">Save Changes</Button>
                                                    </div>
                                                </Stack>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Stack>
        </Container>

    );
}