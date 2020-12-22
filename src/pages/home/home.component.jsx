import React from 'react';
import "./home.styles.scss"
import Hero from "../../assets/hero.png"
import CustomButton from '../../components/custom-button/custom-button.component';

const Home = () => {
    return (<div className="homepage">

        <img className="hero-img" src={Hero} alt="homepage" />

        <div className="content">
            <div className="container">
                <div className="text">
                    Hey i'm <span>Naman Hajela</span>,<br />
                    Nice to meet you <br />
                    Let's do great things together.
                </div>
                <div className="button">
<CustomButton >Hire Me</CustomButton>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;
