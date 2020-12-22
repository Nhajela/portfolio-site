
import { React, Component } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./footer.styles.scss";

class Footer extends Component {
 openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
      }
    render() {
        return (
            <div className="footer">
                <hr />
                < span className="icons">
                    <FontAwesomeIcon className="icon" icon={faInstagram} onClick={() => {
                        this.openInNewTab("www.instagram.com")
                    }} > </FontAwesomeIcon>
                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </span>
                <hr />
            </div >
        )
    }
}


export default Footer;
