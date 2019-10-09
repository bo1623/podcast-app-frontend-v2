import baseUrl from '../fetchUrl'

const postEpisode=(episode,username)=>{
  const episode_details={episode,username:username}
  return dispatch =>{
    fetch(baseUrl+'/episodes',{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(episode_details)
    })
    .then(resp=>resp.json())
    .then(json=>console.log(json))
  }
}


export default postEpisode
