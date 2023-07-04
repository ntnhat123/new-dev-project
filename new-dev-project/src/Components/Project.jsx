import React from "react";

import { Col,Row ,Container,Tab} from "react-bootstrap";
import '../styles/project.css'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import Nav from 'react-bootstrap/Nav';
const Project = () => {

    const project = [
        {
            id:1,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl:projImg1,
        }  ,
        {
            id:2,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl:projImg2,
        }  ,
        {
            id:3,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl:projImg3,
        }  ,
        {
            id:4,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl:projImg1,
        }  ,
        {
            id:5,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        }  ,
        {
            id:6,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl:projImg3,
        } 
    ]

    return (
        <div>
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col>
                            <h2>Project</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id harum illo, doloribus debitis voluptates mollitia, officia molestias est quod blanditiis nostrum? Id tempore est nulla, fugit dolore doloribus facilis!
                            </p>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first ">

                                <Nav justify variant="tabs" defaultActiveKey="/home" className="nav-links mb-3">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                project.map((item) => {
                                                    return (
                                                        <Col size={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src={item.imgUrl} alt="" />
                                                                <div className="proj-txtx">
                                                                <h4>{item.title}</h4>
                                                                <span>{item.description}</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                        {
                                                project.map((item) => {
                                                    return (
                                                        <Col size={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src={item.imgUrl} alt="" />
                                                                <div className="proj-txtx">
                                                                <h4>{item.title}</h4>
                                                                <span>{item.description}</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                               {
                                                project.map((item) => {
                                                    return (
                                                        <Col size={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src={item.imgUrl} alt="" />
                                                                <div className="proj-txtx">
                                                                <h4>{item.title}</h4>
                                                                <span>{item.description}</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
export default Project;