import React, { useEffect } from "react";
import { Col, Row,Container } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import '../styles/banner.css'
const Banner = () => {
    let [loopNum ,setLoopNum]=useState(0);
    let [isDeleting, setIsDeleting] = useState(false);
    let toRotate = ["Developer", "Designer", "Content Creator"];
    let [txt, setTxt] = useState("");
    let [details, setDetails] = useState(toRotate[300 - Math.random() * 100]);
    let perriod = 1000;

    useEffect(() => {
        let tick = () => {
            let i = loopNum % toRotate.length;
            let fullTxt = toRotate[i];
            if (isDeleting) {
                setTxt(fullTxt.substring(0, txt.length - 1));

            } else {
                setTxt(fullTxt.substring(0, txt.length + 1));
            }
            if (!isDeleting && txt === fullTxt) {
                perriod = 1000;
                setIsDeleting(true);
            } else if (isDeleting && txt === "") {
                setIsDeleting(false);
                setLoopNum(++loopNum);
                perriod = 500;
            }
        };
        let timer = setTimeout(tick, perriod);
        return () => clearTimeout(timer);
    }, [txt, isDeleting, loopNum, perriod, toRotate]);



    return (
        <div className="banner">
            <section>
                <Container>
                    <Row className="aligh-items-center">
                        <Col md={6} xl={7}>
                            <span className="subheading">Hello, I am</span>
                            <h1>{`Hi I'm webdecoded ` } <span className="wrap">
                                {txt}
                    
                                </span></h1>
                            <p>I'm a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.</p>
                            <button onClick={() => console.log("connect")}>Let's connect <FontAwesomeIcon className="faArrowRight" icon={faArrowRight} beat /></button>
                        </Col>
                        <Col md={6} xl={5}>
                            <img src={headerImg} alt="Heder img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default Banner;