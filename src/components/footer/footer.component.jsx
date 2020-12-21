import { React, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./footer.styles.scss";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr />
                < span className="icons">
                <FontAwesomeIcon className="icon" icon={faInstagram}  />
                <FontAwesomeIcon className="icon" icon={faLinkedinIn}  />
                <FontAwesomeIcon className="icon" icon={faGithub}  />
                </span>
                <hr />
            </div >
        )
    }
}


export default Footer;
