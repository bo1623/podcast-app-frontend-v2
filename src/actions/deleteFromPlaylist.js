import baseUrl from '../fetchUrl'

const deleteFromPlaylist = (episode_id,username) =>{
  return dispatch => {
    dispatch({type:"REMOVE_FROM_PLAYLIST",episode_id: episode_id})
    //dispatch above is for immediately removing the deleted episode from playlist state
    fetch(baseUrl+'/savedepisodes/delete',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({episode_id: episode_id, username: username})
    })
  }
}

export default deleteFromPlaylist
