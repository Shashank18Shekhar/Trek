import React, { Component } from 'react';
import './Card.css';
import classes from '../Components/BackgroundVideo.module.css'


 class Card extends React.Component {
  render() {
  return (
   
    <div className='tc grow bg-light-green br3 pa3 ma1 dib bw2 shadow-5'>
      <img className ="de" alt='robots' src={this.props.url} />
      <div>
        <h2>{this.props.name}</h2>
        <h3>{"Location : "+this.props.loc}</h3>
        <p>{this.props.days +" Days"}</p>
        <p>
          {"USD" +this.props.pay+  " / INR"+this.props.rs +"/-"}
        </p>
        <p>
          {"Difficulty : " +this.props.dif}
        </p>
        <p>
          {"Best-Time : " +this.props.time}
        </p>
        <a className="btn1 " href={this.props.url2}><button type="button" className="btn btn-outline-dark">More Information</button></a>
      </div>
    </div>
  );
}
}


export default Card;