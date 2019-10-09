import baseUrl from '../fetchUrl'

const postEpisode=(episode)=>{
  // const episode_details=episode
  return dispatch =>{
    fetch(baseUrl+'/episodes',{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(episode)
    })
    .then(resp=>resp.json())
    .then(json=>console.log(JSON.parse(json.episode)))
  }
}


export default postEpisode
