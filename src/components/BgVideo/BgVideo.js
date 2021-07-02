import React, { Component } from 'react';
import video_desctop from './../../assets/video/bg_video_desctop.mp4';
import video_tablet from './../../assets/video/bg_video_tablet.mp4';
import video_mob from './../../assets/video/bg_video_mob.mp4';
import biglogo from './../../assets/img/logo_big..svg'

class BgVideo extends Component {
  state = { 
    screenResolution: null,
    introVideo: null,
   }
componentDidMount() {
  let screen = window.innerWidth
  
  if(screen >= 1200) {
    this.setState({introVideo: video_desctop})
  }
  else if (screen <= 1200 && screen >= 411) {
    this.setState({introVideo: video_tablet})

  }
  else {
    this.setState({introVideo: video_mob})
  }
}  
  render() { 
    return ( 
      <>
      <div className="Holder">
       <div className="Video__Holder">
          <div className="b_logo_holder">
          <img src={biglogo} alt='hero logo' className="bigLogo"  />
        </div>
       <video className="VideoBG" autoPlay={true} muted loop src={this.state.introVideo} type="video/mp4" />
       </div>
      </div>
      </>
     );
  }
}
 
export default BgVideo;