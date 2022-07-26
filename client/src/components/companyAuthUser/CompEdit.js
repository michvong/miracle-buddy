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

    let [Location, setCategory] = useState([]);
    let [Services, setServices] = useState([]);
    let [Cities, setCity] = useState([]);
    let [Products, setProducts] = useState([]);
    let [Event, setEvent] = useState([]);
    let [Companies, setCompany] = useState([]);
    let [CompanyService, setCompanyServices] = useState([]);
    let [CompanyInventory, setCompanyInventory] = useState([]);
    let [CompanyEvent, setCompanyEvent] = useState([]);
    let [CompanyInfo, setCompanyInfo] = useState([]);
    let [userID, setUserID] = useState(new Map());

    let[address, setAddress] = useState("");
    let[postal, setPostal] = useState("");
    let [serviceName, setServiceName] = useState("");
    let [hop, setHOP] = useState("");
    let [serviceType, setServiceType] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const handleDashboardClick = () => {
        navigate('/compdashboard');
    }

    const info = useLocation();
    const {infoState} = info

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    useEffect(()=>{

        Axios.post('http://localhost:3001/locations',{
            user_id: fetchInput()
        })
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
            Axios.post('http://localhost:3001/locations',{
                user_id: fetchInput()
            }).then((response) => {
                setCategory(response.data)
            });
            return;
        }
        Axios.post('http://localhost:3001/sort-services', {
            filter: filter1, service: service1
        }).then((response)=>{
            Location = {};
            setCategory(response.data);
        });
    };

    const sortCompany = (companyID, filter1) => {
        Axios.post('http://localhost:3001/sort-services', {
            filter: filter1, service: companyID
        }).then((response)=>{
            CompanyService = {};
            setCompanyServices(response.data);
        });
        Axios.post('http://localhost:3001/sort-products', {
            id: companyID,
        }).then((response)=>{
            CompanyInventory = {};
            setCompanyInventory(response.data);
        });
        Axios.post('http://localhost:3001/sort-event', {
            id: companyID,
        }).then((response)=>{
            CompanyEvent = {};
            setCompanyEvent(response.data);
        });
        Axios.post('http://localhost:3001/org', {
            id: companyID,
        }).then((response)=>{
            CompanyInfo = {};
            setCompanyInfo(response.data);
        });

    };

    const fetchInput = () => {
        try{
            return info.state.user_id
        } catch (e) {
            return "Guest"
        }
    };

    const updateServices = (name,hop, address, postalCode) => {
        Axios.post('http://localhost:3001/update-services', {
            name: name, hop:hop, address:address, postal_code: postalCode
        }).then((response)=>{
            CompanyInfo = {};
            setCompanyInfo(response.data);
        });
        Axios.post('http://localhost:3001/locations',{
            user_id: fetchInput()
        })
        .then((response) => {
            setCategory(response.data);
        });
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
                                        <Nav.Link eventKey="first" >Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" >Warehouse</Nav.Link>
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
                                                <h2>Services</h2>
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
                                                                <td><Button variant="secondary" size="sm" onClick={()=>{handleShow(); setAddress(val.address); setHOP(val.hours_of_operation); setServiceName(val.location_name); setServiceType(val.service_name); setPostal(val.postal_code)}}>Edit</Button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                    <Modal show={show} onHide={handleClose}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Edit</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                                <Row className="mb-3">
                                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                                        <Form.Label>First name</Form.Label>
                                                                        <Form.Control
                                                                            required
                                                                            isInvalid={returnBoolean(true)}
                                                                            placeholder="First name"
                                                                            defaultValue="Mark"
                                                                        />
                                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                    </Form.Group>
                                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                                        <Form.Label>Last name</Form.Label>
                                                                        <Form.Control
                                                                            required
                                                                            type="text"
                                                                            placeholder="Last name"
                                                                            defaultValue="Otto"
                                                                        />
                                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                    </Form.Group>
                                                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                                                        <Form.Label>Username</Form.Label>
                                                                        <InputGroup hasValidation>
                                                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                                            <Form.Control
                                                                                type="text"
                                                                                placeholder="Username"
                                                                                aria-describedby="inputGroupPrepend"
                                                                                required
                                                                            />
                                                                            <Form.Control.Feedback type="invalid">
                                                                                Please choose a username.
                                                                            </Form.Control.Feedback>
                                                                        </InputGroup>
                                                                    </Form.Group>
                                                                </Row>
                                                                <Row className="mb-3">
                                                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                                                        <Form.Label>City</Form.Label>
                                                                        <Form.Control type="text" placeholder="City" required />
                                                                        <Form.Control.Feedback type="invalid">
                                                                            Please provide a valid city.
                                                                        </Form.Control.Feedback>
                                                                    </Form.Group>
                                                                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                                                                        <Form.Label>State</Form.Label>
                                                                        <Form.Control type="text" placeholder="State" required />
                                                                        <Form.Control.Feedback type="invalid">
                                                                            Please provide a valid state.
                                                                        </Form.Control.Feedback>
                                                                    </Form.Group>
                                                                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                                                                        <Form.Label>Zip</Form.Label>
                                                                        <Form.Control type="text" placeholder="Zip" required />
                                                                        <Form.Control.Feedback type="invalid">
                                                                            Please provide a valid zip.
                                                                        </Form.Control.Feedback>
                                                                    </Form.Group>
                                                                </Row>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Check
                                                                        required
                                                                        label="Agree to terms and conditions"
                                                                        feedback="You must agree before submitting."
                                                                        feedbackType="invalid"
                                                                    />
                                                                </Form.Group>
                                                               <Button type="submit">Save Changes</Button>

                                                            </Form>
                                                        </Modal.Body>

                                                    </Modal>

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
                                                                <td><Button variant="secondary" size="sm" onClick={()=>{handleShow(); setAddress(val.address); setHOP(val.hours_of_operation); setServiceName(val.location_name); setServiceType(val.service_name); setPostal(val.postal_code)}}>Edit</Button>
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
                                                                <td><Button variant="secondary" size="sm" onClick={()=>{handleShow(); setAddress(val.address); setHOP(val.hours_of_operation); setServiceName(val.location_name); setServiceType(val.service_name); setPostal(val.postal_code)}}>Edit</Button>
                                                                </td>
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