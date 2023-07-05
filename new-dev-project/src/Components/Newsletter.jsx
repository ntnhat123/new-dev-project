import React, { useEffect } from "react";
import { Col, Row, Container, Tab } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import '../styles/footer.css'

const Newsletter = ({subscribe,status,message}) => {
    const [email, setEmail] = useState("")
    
    useEffect(() => {
        if (status === "success") {
            clearFields();
        }
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email&& email.indexOf("@") > -1 && oninvalid({ EMAIL: email });
        
    }
    const clearFields = () => {
        setEmail("")
    }
    return (
        <div>
            <Col lg={12}>
                <div className="newsletter-bx wow slideInUp">
                    <Row>
                        <Col lg={12} md={6} xl={5}>
                            <h2>Subcribe to our Newsletter</h2>
                            {status === "sending" && <Alert variant="info">Sending...</Alert>}
                            {status === "error" && <Alert variant="danger" dangerouslySetInnerHTML={{__html: message}}/>}
                            {status === "success" && <Alert variant="success">{message}</Alert>}
                        </Col>
                        <Col md={6} xl={7}>
                            <form action={handleSubmit}>
                                <div className="new-email-bx">
                                    <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>   
    )
}
export default Newsletter;