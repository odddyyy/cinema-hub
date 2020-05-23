import React from 'react'
import { Link } from 'react-router-dom'

//logo
import Logo from '../assets/img/nav-logo.png'

//bootstrap components
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function Navsbar() {
    return (
        <Navbar bg="dark" expand="lg" className="sticky-top">
            <Navbar.Brand className="logo-container"><Link to="/"><img src={Logo} className="nav-logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navLink">
                    <Link className="text-light links" to="/movies">Movies</Link>
                    <div className="mr-3 ml-3 mt-2 text-light"> | </div>
                    <Link className="text-light links" to="/series">Series</Link>
                </Nav>
                <Nav className="ml-auto navLink">
                <Form inline>
                    <FormControl type="text" placeholder="Enter email" className="mr-sm-2" />
                    <Button type="submit" variant="outline-light">Subscribe</Button>
                </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
