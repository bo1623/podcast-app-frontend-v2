import baseUrl from '../fetchUrl'

const fetchSavedEpisodes=(username)=>{
  return dispatch=>{
    fetch(baseUrl+'/savedepisodes')
    .then(resp=>resp.json())
    .then(json=>console.log(json))
  }
}

export default fetchSavedEpisodes
