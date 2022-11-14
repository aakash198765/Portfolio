import React from 'react'
import * as animationData from './pinjump.json'
import * as messageSent from './message_sent.json'
 
export default class Animation extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  getDefaultOptions = () => {
    return  {
        loop: true,
        autoplay: true, 
        animationData: messageSent,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
  }
 
  render() { 
    return(
    <div>
        {/* <Lottie 
            options={this.getDefaultOptions()}
            height={500}
            width={500}
        /> */}
    </div>
    )
  }
}