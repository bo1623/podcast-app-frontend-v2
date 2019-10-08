import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from 'react-redux';
import Episode from '../components/Episode'
import fetchPodcast from '../actions/fetchPodcast'

class EpisodesContainer extends Component {

  componentDidMount(){
    this.props.addEpisodes(this.props.podcastId)
  }

  render(){
    let episodes
    if(!!this.props.episodes.episodes){
      episodes=this.props.episodes.episodes.map(episode=><Episode episode={episode}/>)
    }
    return(
      <div>
        <h1>Podcast episodes</h1>
        {episodes}
      </div>
    )
  }

}


const mapDispatchToProps = dispatch => ({
  addEpisodes: id => dispatch(fetchPodcast(id))
})

const mapStateToProps = state => {
  return {
    episodes: state.episodes
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(EpisodesContainer)
