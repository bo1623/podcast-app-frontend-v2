import baseUrl from '../fetchUrl'

const fetchReviews = (podcast_id) =>{
  return dispatch => {
    fetch(baseUrl+'/reviews/fetch',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({podcast_id:podcast_id})
    })
    .then(resp=>resp.json())
    .then(json=>console.log(json))
  }
}
