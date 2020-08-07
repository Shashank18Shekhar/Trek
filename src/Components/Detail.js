import React, { Component } from 'react';
import './Detail.css'

class   Detail extends Component{
render(){
    return (
        <div>
          
          <main>
            <div className="contact_info">
              <div className="container-fluid">
                <ul className="clearfix">
                  <li>
                    <i className="pe-7s-map-marker" />
                    <h4>Address</h4>
                    <span>Singh Home, Rajeev Nagar</span><br />
                    <span>Patna, Bihar</span><br />
                    <span>India</span>
                  </li>
                  <li>
                    <i className="pe-7s-mail-open-file" />
                    <h4>Email address</h4>
                    <span>contact@gmail.com</span>
                  </li>
                  <li>
                    <i className="pe-7s-phone" />
                    <h4>Contacts info</h4>
                    <span><a target="_blank" href="tel:+918789888463">+ 91 8789888463 </a></span>
                  </li>
                  <li>
                    <i className="fa fa-whatsapp" />
                    <h4>Chat on Whats App</h4>
                    <span> <a target="_blank" href="http://web.whatsapp.com/send?phone=918800554855&text=Hello Trekmunk" data-action="share/whatsapp/share">+ 91 9805103350</a></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg_color_1">
              <div className="container margin_80_55">
                <div className="row justify-content-between">
                  <div className="col-lg-12 pad-lr-130 plr-25-mobile">
                  </div></div></div></div></main></div>
      );
}
}

export default Detail;
