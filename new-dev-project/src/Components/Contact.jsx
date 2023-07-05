import React  from "react";
import { Col,Row ,Container} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import '../styles/contact.css'
import { useState } from "react";
const Contact = () => {
    const item = {
        firstName: '',
        lastName : '',
        email : '',
        phoneNumber : '',
        message : ''
    }
    const [formDetails, setFormDetails] = useState(item)
    const [buttonText, setButtonText] = useState('Send Message')
    const [status, setStatus] = useState({})
    
    const onFormUpdate = (category , value) => {
        setFormDetails({...formDetails, [category] : value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        let responsive = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send Message')
        let result = await responsive.json();
        setFormDetails(item)
        if (result.code === 200) {
            setStatus({ type: 'success', message: result.message })
        }
        else {
            setStatus({ type: 'error', message: result.message })
        }


    }
    return (
        <div>
            <section className="contact" id="connect">
                <Container>
                    <Row className="align-items-center">
                        <Col size={12} md={6}>
                            <img src={contactImg} alt="" />
                        </Col>
                        <Col size={12} md={6}>
                            <h2>Get In Touch</h2>
                            <form action={handleSubmit}>
                                <Row>
                                    <Col size={12} ms={6} md={3} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('fisrtName',e.target.value)}/>
                                    </Col>
                                    <Col size={12} ms={6} md={3} className="px-1">
                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName',e.target.value)} />
                                    </Col>
                                    <Col size={12} ms={6} md={3} className="px-1">
                                        <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email',e.target.value)}/>
                                    </Col>
                                    <Col size={12} ms={6} md={3} className="px-1">
                                        <input type="text" value={formDetails.phoneNumber} placeholder="Phone Number" onChange={(e)=>onFormUpdate('number',e.target.value)}/>
                                    </Col>
                                    <Col size={12}  className="px-1 ">
                                        <textarea  rows="6" value={formDetails.message} name="" id="" cols="30" placeholder="Message"></textarea>
                                        <button  type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                    {/* {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    } */}
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default Contact;