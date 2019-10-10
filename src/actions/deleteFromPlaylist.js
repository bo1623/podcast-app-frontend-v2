import baseUrl from '../fetchUrl'

const deleteFromPlaylist = (episode_id) =>{
  return dispatch{
    fetch(baseUrl+'/savedepisodes',{
      method:'DELETE',
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(episode_id)
    })
    .then(resp=>resp.json())
    .then(json=>dispatch({type:"REMOVE_FROM_PLAYLIST",playlist:json}))
  }
}
