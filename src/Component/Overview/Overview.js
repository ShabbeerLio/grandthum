import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import imag1 from "../../Assets/CAtegory/Warehouse-Gym_17f1c9ca3a7_large.jpg"
import imag2 from "../../Assets/CAtegory/Kids Play Area.jpeg"
import imag3 from "../../Assets/CAtegory/SeniorCitizens.jpg"
import imag4 from "../../Assets/CAtegory/Flower Garden.jpg"
import imag5 from "../../Assets/CAtegory/Jogging.jpeg"
import imag6 from "../../Assets/CAtegory/Salon.jpeg"
import imag7 from "../../Assets/CAtegory/CCTV Surveillance.jpeg"
import imag8 from "../../Assets/CAtegory/24X7 Security.jpg"
import imag9 from "../../Assets/CAtegory/Swimming Pool.jpg"
import imag10 from "../../Assets/CAtegory/banquet.jpg"
import imag11 from "../../Assets/CAtegory/badminton.jpeg"
import imag12 from "../../Assets/CAtegory/Pharmacy.jpg"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>Bhutani Grandthum boasts state-of-the-art office spaces and retail spaces designed to cater to your business needs. The Bhutani Grandthum office space is crafted to inspire creativity and productivity, making it the perfect place to elevate your work life.</p>
                            <p>Explore a world of retail at our expansive Shopping Arcade. Here, you can find a diverse range of stores offering everything from daily necessities to luxury items, ensuring a convenient and satisfying shopping experience.</p>
                            <p>Indulge in culinary delights at our Food Court and fine dining establishments. Whether you're grabbing a quick bite or enjoying a gourmet meal, Bhutani Grandthum offers a variety of dining options to satisfy every palate.</p>
                            <p>Get ready to move into Bhutani Grandthum in 2024. Whether you're looking for premium office spaces or vibrant retail spaces, this is where your future begins.</p>
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={imag1} alt="grandthum bhutani" />
                                    <p>Fully Equipped Gym</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag2} alt="grandthum bhutani group" />
                                    <p>Kids Play Area</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag3} alt="grandthum office space" />
                                    <p>Senior Citizens’ Pavilion</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag4} alt="bhutani grandthum office space" />
                                    <p>Flower Garden</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag5} alt="bhutani grandthum possession" />
                                    <p>Jogging/Walking Track</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag6} alt="bhutani grandthum construction update" />
                                    <p>Salon/Spa</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag7} alt="bhutani grandthum price" />
                                    <p>CCTV Surveillance</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag8} alt="bhutani grandthum price list" />
                                    <p>24X7 Security</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag9} alt="bhutani grandthum" />
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag10} alt="grandthum bhutani" />
                                    <p>Multipurpose Hall</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag11} alt="grandthum bhutani group" />
                                    <p>Badminton Court</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag12} alt="grandthum office space" />
                                    <p>Pharmacy</p>
                                </div>
                            </ReactOwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
