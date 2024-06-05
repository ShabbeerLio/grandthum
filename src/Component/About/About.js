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
                <span>Office Space and Retail Shop in Greater Noida West</span>
                <h4>Office Space: ₹7,000/sqft | Retail Shop: ₹30,000/sqft</h4>
            </div>
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            {/* <h3>FAIRFOX EON NOIDA, Sector 140 Noida Expressway</h3> */}
                            <p>Welcome to Bhutani Grandthum, a landmark development located in Greater Noida West, at the heart of growth and opportunity. This premier destination offers state-of-the-art workspaces that present new opportunities, fostering creativity and productivity in a vibrant environment.</p>
                            <p>At Bhutani Grandthum, life elevates as spaces create endless possibilities. Whether you're looking for dynamic office spaces, diverse retail options, or world-class amenities, Bhutani Grandthum provides everything you need in one place, making it the ultimate hub for both work and leisure.</p>
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
