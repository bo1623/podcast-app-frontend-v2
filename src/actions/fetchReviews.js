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
    .then(json=>dispatch({type:"ALL_REVIEWS",reviews:json}))
    .catch(dispatch({type:"ALL_REVIEWS",reviews:[]}))
    //in case this particular podcast hasn't been saved in the backend
    //in which case we wouldn't get a promise from this fetch request
    //hence why we need catch to dispatch an empty array
  }
}



export default fetchReviews
