import React, { Component } from 'react';
import './Departure.css'
import Detail from './Detail'

class   Contact extends Component{
    render(){
    return(
        <div>
         <div >
         <div 
         style={{  
             backgroundColor:'whitesmoke',
             backgroundImage: "url(" + "https://trekmunk.b-cdn.net/contact.webp" + ")",
             height:window.innerHeight,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             width:window.innerWidth
           }}>
             
        <h3 className="tx">Contact Us</h3>
         </div>
          
         </div>
          <Detail /> 
          </div>
     )
 }
 }
 
     export default Contact;