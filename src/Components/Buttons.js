import React from 'react';
import classes from './BackgroundVideo.module.css';
import { Link } from 'react-router-dom';



const Buttons = () => {
    return(
<div className={classes.Content}>
                <div className={classes.SubContent} >
                <img
                        src="https://i.pinimg.com/originals/e2/90/2d/e2902da53b54fed3157060fe99745319.png"
                        alt="Logo" 
                        width="10%"/>
                    <h4 className="coordinate">27°59'17.0"N 86°55'29.9"E</h4>
                    <h1>WELCOME TO HIMALAYAS</h1>
                    <Link to='/Departure'><button type="button" className="btn btn-outline-dark">Fixed Departure</button></Link>
                    <Link to='/Adventure'><button type="button" className="btn btn-outline-dark">Adventures</button></Link>
                    <Link to='/Contact'><button type="button" className="btn btn-outline-dark">Contact Us</button></Link>
                    </div>
                    </div>
                    ) 
                    }

                    export default Buttons;
