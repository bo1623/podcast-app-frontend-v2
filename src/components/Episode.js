import React,{Component} from 'react';
import {Markup} from 'interweave';


export default class Episode extends Component {

  render(){
    const {episode} = this.props
    const description=episode.description

    //formatting url
    const url_split=episode.audio_url.split('/e/')
    const new_url=url_split[0]+'/embedded/e/'+url_split[1]

    const months=['January','February','March','April','May','June','July','August','September','October','November','December']
    const d=new Date(episode.published_date)
    const datestring= d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()

    return(
      <div className="episode">
        <div className="episode-title">{episode.title} <button>Add to Playlist</button> </div>
        <Markup content={description}/>
        <p>Published: {datestring}</p>
        <p>Duration: {episode.audio_length}</p>
        <iframe src={new_url} height="300px" width="100%"></iframe>
      </div>
    )
  }

}
