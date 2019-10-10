import baseUrl from '../fetchUrl'


const addReview = (review,username) =>{
  return dispatch => {
    fetch(baseUrl+'/reviews',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username:username,review:review})
    })
  }
}
