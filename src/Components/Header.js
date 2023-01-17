import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header =({auth,setAuth})=>{

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">CP_API</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            
                            {
                               auth?
                               <>
                               <Nav.Link as={Link} to='/Userlist' >Userlist</Nav.Link>
                               <Nav.Link onClick={()=>setAuth(false)}>Log out</Nav.Link>
                               </>
                               :<Nav.Link onClick={()=>setAuth(true)}>Login</Nav.Link>
                            }
                            
                            
                            
                        </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header