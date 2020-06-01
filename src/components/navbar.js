import React, {Component} from 'react';
import '../css/navbar.css';
import {
    Nav,
    Navbar, 
    Form, 
  //  FormControl, 
    Button,
    NavDropdown
} from 'react-bootstrap';
import {FaRegUserCircle} from 'react-icons/fa';


class Navigation extends Component {
    constructor(){
        super()
    }
    render() {
        const {user} = this.props;
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Drive</Navbar.Brand>
                <Navbar.Text className="user-icon" href="#"><FaRegUserCircle/></Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Nuestras Ventajas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Nuestras Flotas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Nuestros Destinos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Convertirse en Transportista</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Para Negocios</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Resenas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Preguntas Frecuentes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form >
                        {user == null && (
                            <span className="center">
                                <Button className="btn-login" variant="outline-primary">Login</Button>
                                <Button className="btn-login" variant="outline-primary">Register</Button>
                            </span>
                        )}
                        {user && (
                                <Button className="btn-login" variant="outline-primary">Logout</Button>
                        )}
                    
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
} 

export default Navigation;