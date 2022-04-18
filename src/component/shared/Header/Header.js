import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user]=useAuthState(auth)
    return (
        <Navbar sticky='top' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to='/' style={{fontSize:'25px'}}>JK Fitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        {
                            user
                            ?
                            <button onClick={()=>signOut(auth)} className='btn btn-primary'>Logout</button>
                            :
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }


                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;