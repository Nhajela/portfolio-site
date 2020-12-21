import { React, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./header.styles.scss";

class Header extends Component {

    render() {
        const { location:{pathname} } = this.props;
        const classname  = (option,loc)=>{
        
            if (`/${option}`==loc){
                return (`option-colored`)
            }
            else{
                return("option")
            }

        }

        return (

            <div className='header'>
                <Link className='logo-container' to='/'>
                    <div className='logo' >NAMAN HAJELA</div >
                </Link>
                <div className='options'>
                    <Link className={`${classname("about",pathname)}`} to='/about'>
                        ABOUT
                 </Link>
                    <Link className={`${classname("projects",pathname)}`} to='/projects'>
                        WORK
                 </Link>
                 <Link className={`${classname("blog",pathname)}`} to='/blog'>
                        BLOG
                 </Link>
                  
                    <Link className={`${classname("contact",pathname)}`} to='/contact'>
                        CONTACT
                 </Link>

                </div>
            </div>
        );
    }
}


export default withRouter(Header);
