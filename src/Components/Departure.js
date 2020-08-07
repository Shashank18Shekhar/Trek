import React, { Component } from 'react';
import './Departure.css'
import List from './List'

class   Departure extends Component{
   render(){
   return(
        <div >
        <div 
        style={{  
            backgroundColor:'whitesmoke',
            backgroundImage: "url(" + "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" + ")",
            height:window.innerHeight,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width:window.innerWidth
          }}>
            
       <h3 className="tw">Fixed Departure Adventures</h3>
        </div>
        <List />
          
        </div>
    )
}
}

    export default Departure;