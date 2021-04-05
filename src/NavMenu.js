import React from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShopping} from 'react-icons/ai';
import { FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/navmenu.css";
import logo from "./images/NykaaLogoSvg.svg";

class NavMenu extends React.Component{
    render(){
        return(
            <div>
                <div class="conatiner-fluid">
                <nav>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand id="brand" href="#home"><img src={logo} alt="logo" ></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="#home">CATEGORIES</Nav.Link>
                            <Nav.Link href="#link">BRANDS</Nav.Link>
                            <Nav.Link href="#link">NYKAA FASHION</Nav.Link>
                            <Nav.Link href="#link">BEAUTY ADVICE</Nav.Link>
                            <Nav.Link href="#link">NYKAA NETWORK</Nav.Link>
                            </Nav>
                            <Form inline >
                            <span class="icon"><AiOutlineSearch size="25px"/></span>
                            <FormControl id="search" type="text" placeholder= "Search for Products,Brands etc" className="mr-sm-8" />
                            </Form>
                            
                            <a href="App.js"><span class="icon"><AiOutlineUser size="15px"/>Account</span></a>
                            <a href="App.js"><span class="icon"><AiOutlineShopping size="15px"/></span></a>
                        </Navbar.Collapse>
                        </Navbar>
                    </nav>
                </div>
            </div>
)
    }
}
export default NavMenu;