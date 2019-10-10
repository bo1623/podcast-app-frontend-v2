import React,{Component} from 'react';
import {Markup} from 'interweave';

export default class PodcastShow extends Component {

  render(){
    const {podcast} = this.props
    const description=podcast.description
    return(
      <div className='podcast'>
        <img src={podcast.image} />
        <div className='podcast-details' >
          <h3>{podcast.title}</h3>
          <h3>Description:</h3>
          <Markup content={description}/>
          <br></br>
          <span>Total Episodes: {podcast.total_episodes}</span>
        </div>
        <br></br>
      </div>
    )
  }

}
