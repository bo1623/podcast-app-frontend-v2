import React,{Component} from 'react';
import {Markup} from 'interweave';
import {connect} from 'react-redux'
import postEpisode from '../actions/postEpisode'
import deleteFromPlaylist from '../actions/deleteFromPlaylist'


class Episode extends Component {


  handleOnClick=event=>{
    console.log(event.target.id)
    this.props.addToPlaylist(event.target.id)
  }

  handleOnClickDelete = event => {
    this.props.deleteFromPlaylist(event.target.id,event.target.getAttribute('username'))
  }

  render(){
    const {episode,isLoggedIn} = this.props
    const description=episode.description

    let obj= Object.assign({},{username: this.props.username,episode:episode,podcast:this.props.podcast}) //assign username attribute and podcast object here to be passed on to post fetch in postEpisode
    //we need this obj because we want to pass all this data to the backend

    //formatting url
    const url_split=episode.audio_url.split('/e/')
    const new_url=url_split[0]+'/embedded/e/'+url_split[1]

    const months=['January','February','March','April','May','June','July','August','September','October','November','December']
    const d=new Date(episode.published_date)
    const datestring= d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()


    return(
      <div className="episode">
        <div className="episode-title">{episode.title}
          {isLoggedIn ?( //conditional rendering of button based on whether user is logged in
            this.props.isPlaylist ? (
              <button onClick={this.handleOnClickDelete} id={episode.episode_id} username={this.props.username}>Remove from Playlist</button>
            ) : (
              <button onClick={this.handleOnClick} id={JSON.stringify(obj)}>Add to Playlist</button>
            )
          ) : (
            <div></div>
          )}
        </div>
        <Markup content={description}/>
        <p>Published: {datestring}</p>
        <p>Duration: {episode.audio_length}</p>
        <iframe src={new_url} height="300px" width="100%"></iframe>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username,
    podcast: state.podcast
  }
}

const mapDispatchToProps = dispatch =>({
  addToPlaylist: (episode) => dispatch(postEpisode(episode)),
  deleteFromPlaylist: (episode_id,username) => dispatch(deleteFromPlaylist(episode_id,username))
})

export default connect(mapStateToProps, mapDispatchToProps)(Episode)
