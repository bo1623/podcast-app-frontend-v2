import React,{Component} from 'react';
import EpisodesContainer from './EpisodesContainer'
import PodcastShow from '../components/PodcastShow'
import {connect} from 'react-redux'
import fetchPodcastShow from '../actions/fetchPodcastShow'

class PodcastContainer extends Component{

  componentDidMount(){
    this.props.showPodcast(this.props.match.params.podcastid)
  }

  render(){
    return(
      <div>
        <PodcastShow podcast={this.props.podcast}/>
        <EpisodesContainer podcastId={this.props.match.params.podcastid}/>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  showPodcast: id => dispatch(fetchPodcastShow(id))
})

const mapStateToProps = state => {
  return{
    podcast: state.podcast
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastContainer)
