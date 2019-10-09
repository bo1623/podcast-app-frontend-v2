import React,{Component} from 'react';
import EpisodesContainer from './EpisodesContainer'
import PodcastShow from '../components/PodcastShow'
import {connect} from 'react-redux'
import fetchPodcastShow from '../actions/fetchPodcastShow'
import PlaylistContainer from './PlaylistContainer'

class PodcastContainer extends Component{

  componentDidMount(){
    this.props.showPodcast(this.props.match.params.podcastid)
  }

  render(){
    const {isLoggedIn} = this.props
    return(
      <div className="podcast-show-container">
        <div className="podcast-show">
          <PodcastShow podcast={this.props.podcast}/>
          <EpisodesContainer podcastId={this.props.match.params.podcastid}/>
        </div>
        <div className='playlist-container'>
          {isLoggedIn ? (
            <div>
              <div classname='title-container'>
                <h1>Playlist Container</h1>
              </div>
              <div className='playlist-episodes'>
                <PlaylistContainer />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
    </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  showPodcast: id => dispatch(fetchPodcastShow(id))
})

const mapStateToProps = state => {
  return{
    podcast: state.podcast,
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastContainer)
