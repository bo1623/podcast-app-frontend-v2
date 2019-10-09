import baseUrl from '../fetchUrl'

const fetchSavedEpisodes=(username)=>{
  return dispatch=>{
    fetch(baseUrl+'/savedepisodes',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username:username})
    })
    .then(resp=>resp.json())
    .then(json=>dispatch({type:"COMPLETE_PLAYLIST",playlist:json}))
  }
}

export default fetchSavedEpisodes
