import React from "react";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav,Container} from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons';
import '../styles/navbar.css'
const NavBar = () => {
    const [active, setActive] = useState("Home");
    const  [scorll,setScorll]=useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled) {
                setScorll(true);
            } else {
                setScorll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <Navbar  expand="md" className={setScorll?'scrolled':''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to="/" onClick={() => setActive("Home")} className={active === "Home" ? "active" : ""}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={() => setActive("About")} className={active === "About" ? "active" : ""}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={() => setActive("Contact")} className={active === "Contact" ? "active" : ""}>Contact</Nav.Link>
                    </Nav >

                    <span className="navbar-text">
                        <div className="social-icon">

                            <Link href=""><FontAwesomeIcon size="xl"    icon={faFacebook} /></Link>
                            <Link href=""><FontAwesomeIcon size="xl"   icon={faInstagram} /></Link>
                            <Link href=""><FontAwesomeIcon size="xl"  icon={faTwitch} /></Link>

                        </div>
                        <button className="vvd" onClick={()=>console.log('connect')}>Let's Connect</button>
                    </span>

                </Navbar.Collapse>

                    
            </Container>
        </Navbar>
        
    )
}
export default NavBar;