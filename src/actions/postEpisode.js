import baseUrl from '../fetchUrl'

const postEpisode=(episode)=>{
  // const episode_details=episode
  return dispatch =>{
    const mod_episode=JSON.parse(episode) //converting stringified JSON to JSON
    dispatch({type:"ADD_TO_PLAYLIST", mod_episode})
    fetch(baseUrl+'/episodes',{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(episode)
    })
    .then(resp=>resp.json())
    .then(json=>console.log(json))
  }
}


export default postEpisode
