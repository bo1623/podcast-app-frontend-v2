import React,{Component} from 'react';
import {connect} from 'react-redux'
import fetchSavedEpisodes from '../actions/fetchSavedEpisodes'


class PlaylistContainer extends Component{

  componentDidMount(){
    this.props.fetchPlaylist(this.props.username)
  }

  render(){
    return(
      <h1>Playlist Container</h1>
    )
  }

}


const mapStateToProps=state=>{
  return{
    playlist: state.playlist,
    username: state.user.username
  }
}

const mapDispatchToProps=dispatch=>({
  fetchPlaylist: username=>dispatch(fetchSavedEpisodes(username))
})

export default connect(mapStateToProps,mapDispatchToProps)(PlaylistContainer)
