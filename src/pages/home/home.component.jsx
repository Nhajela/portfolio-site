import React from 'react';
import "./home.styles.scss"
import {ReactComponent as Hero} from "../../assets/hero.svg"
const Home = () => {
    return (<div className="homepage">

<Hero className="hero-img" />

<div className="content">
 <div className="text">
Hey i'm <span>Naman Hajela</span>,<br />
Nice to meet you <br />
Let's do great things together.
 </div>
<div className="button"></div>

</div>
        </div>
    );
}

export default Home;
