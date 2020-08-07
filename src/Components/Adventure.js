import React, { Component } from 'react';
import './Departure.css'
import List1 from './List1'

class Adventure extends Component{
    render(){
        return(
           <div>
            <div 
            style={{  
                backgroundColor:'whitesmoke',
                backgroundImage: "url(" + "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/rscmi9kkdipgpjgwlqse/2D1N%20Kheerganga%20Trek%20&%20Camping%20from%20Kasol.jpg" + ")",
                height:window.innerHeight,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width:window.innerWidth
              }}>
                
           <h3 className="tw">All Adventures</h3>
            </div>
            <List1 />
            </div>
        )
    }
}

export default Adventure;