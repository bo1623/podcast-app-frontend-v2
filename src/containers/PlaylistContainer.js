import React,{Component} from 'react';
import {connect} from 'react-redux'
import fetchSavedEpisodes from '../actions/fetchSavedEpisodes'
import Episode from '../components/Episode'


class PlaylistContainer extends Component{

  componentDidMount(){
    this.props.fetchPlaylist(this.props.username)
  }

  render(){
    const {playlist} = this.props

    return(
      <div>
        {playlist.map(episode=><Episode isPlaylist={true} episode={episode} />)}
      </div>
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
