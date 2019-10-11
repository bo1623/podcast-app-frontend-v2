import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from 'react-redux'
import fetchPodcast from '../actions/fetchPodcast'
import Tooltip from 'react-png-tooltip'
import {Markup} from 'interweave';


class Podcast extends Component{

  render(){
    const {podcast} = this.props
    return(
        <div className='podcast'>
          <Tooltip className="tooltip-box" tooltip={<img src={podcast.image}/>}>
            Description: <Markup content={podcast.description}/>
          </Tooltip>
          <div className='podcast-details' >
            <Link
              key={podcast.podcast_id}
              to={`/podcasts/${podcast.podcast_id}`}
              onClick={() => this.props.addEpisodes(podcast.podcast_id)}
            >{podcast.title}</Link>
            <br></br>
            <span>Total Episodes: {podcast.total_episodes}</span>
          </div>
          <br></br>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addEpisodes: id => dispatch(fetchPodcast(id))
})

export default connect(null,mapDispatchToProps)(Podcast);
