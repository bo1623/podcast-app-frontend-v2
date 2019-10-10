import baseUrl from '../fetchUrl'

const deleteFromPlaylist = (episode_id,username) =>{
  return dispatch => {
    fetch(baseUrl+'/savedepisodes/delete',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({episode_id: episode_id, username: username})
    })
    .then(resp=>resp.json())
    .then(json=>dispatch({type:"REMOVE_FROM_PLAYLIST",playlist:json}))
  }
}

export default deleteFromPlaylist
