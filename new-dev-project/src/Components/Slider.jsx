import React from "react";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { Col,Row ,Container, Carousel} from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import '../styles/slider.css'
const Slider = () => {
    const item  = [
        {
            id:1,
            img:'https://picsum.photos/200/300',
            title:'Web Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id:2,
            img:'https://picsum.photos/200/300',
            title:'Web Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id:3,
            img:'https://picsum.photos/200/300',
            title:'Web Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id:4,
            img:'https://picsum.photos/200/300',
            title:'Web Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id:5,
            img:'https://picsum.photos/200/300',
            title:'Web Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        }
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <div>
            <section className="skill" id="skills">
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-bx">
                                <h2>
                                    Skill
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ratione ipsam itaque voluptatum explicabo omnis eligendi! Doloribus dicta ipsa accusamus soluta deserunt qui veniam eligendi cumque excepturi. Corporis, doloremque ea? </p>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    
                                        {
                                            item.map((val,ind)=>{
                                                return(
                                                    <div className="item" key={ind}>
                                                        <img src={val.img} alt="" />
                                                        <h3>{val.title}</h3>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                   
                                </Carousel>
                                {/* <img src={colorSharp} alt="" /> */}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </div>
    )

}
export default Slider;