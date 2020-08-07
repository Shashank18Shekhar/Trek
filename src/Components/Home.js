import React from 'react';
//import '.. /App.css';
import classes from './BackgroundVideo.module.css';
import BackgroundVideo from './BackgroundVideo';
import Buttons from './Buttons';
import Services from './Services.js';


function Home() {
  return (
    < div >
        <div className={classes.Container} >
      <BackgroundVideo/>
      <Buttons />
      
    </div>
 
    </ div>

  );
}

export default Home;
