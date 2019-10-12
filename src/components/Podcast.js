import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from 'react-redux'
import fetchPodcast from '../actions/fetchPodcast'
import Tooltip from 'react-png-tooltip';
import Popover from 'react-tiny-popover';
import {Markup} from 'interweave';


class Podcast extends Component{

  state={
    isPopoverOpen: false
  }

  render(){
    const {isPopoverOpen} = this.state
    const {podcast} = this.props
    return(
        <div className='podcast'>
        <Popover
          isOpen={isPopoverOpen}
          containerClassName="popup-container"
          position={'right'} // preferred position
          content={(
              <div>
                  <p id="podcast-description-popup">Description:</p>
                  <Markup content={podcast.description}/>
              </div>
          )}
        >
        <img
          src={podcast.image}
          onMouseLeave={() => this.setState({ isPopoverOpen: false })}
          onMouseOver={() => this.setState({ isPopoverOpen: true })} />
        </Popover>

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

//
// <Tooltip className="tooltip-box" tooltip={<img src={podcast.image}/>}>
//   Description: <Markup content={podcast.description}/>
// </Tooltip>
