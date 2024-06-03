import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about1.jpg"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
            <div className="about-title">
                <h1>GRANDTHUM</h1>
                <p>Rera No : UPRERAPRJ585534</p>
                <span>Office Space and Retail Shop Noida Sector 142</span>
                <h4>Office Space: ₹7,000/sqft | Retail Shop: ₹30,000/sqft</h4>
            </div>
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            {/* <h3>FAIRFOX EON NOIDA, Sector 140 Noida Expressway</h3> */}
                            <p>The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Its modern architecture and innovative design cater to the diverse needs of businesses, creating an ideal environment for corporate offices and retail outlets. The project also emphasizes sustainability with energy-efficient systems and lush green landscapes.</p>
                            <p> Its proximity to metro stations and major roadways ensures seamless connectivity, making it a preferred choice for entrepreneurs and established enterprises looking to establish a presence in Noida.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="grandthum bhutani" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
