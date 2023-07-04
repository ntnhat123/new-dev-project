import React from "react";

import { Col,Row ,Container} from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
// import colorSharp from "../assets/img/color-sharp.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/slider.css'
const Slider = () => {
    const item  = [
        {
            id:1,
            img: meter1,
            title:'Web Design',
         
        },
        {
            id:2,
            img:meter2,
            title:'Web Design',
           
        },
        {
            id:3,
            img:meter3,
            title:'Web Design',
        
        },
       
        
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
                                    SKILL
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ratione ipsam itaque voluptatum explicabo omnis eligendi! Doloribus dicta ipsa accusamus soluta deserunt qui veniam eligendi cumque excepturi. Corporis, doloremque ea? </p>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    
                                        {
                                            item.map((val,ind)=>{
                                                return(
                                                    <div className="item" key={ind}>
                                                        <img src={val.img} alt="" />
                                                        <h3>{val.title}</h3>
                                                        
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