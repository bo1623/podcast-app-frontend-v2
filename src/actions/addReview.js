import baseUrl from '../fetchUrl'


const addReview = (review,username,podcast) =>{
  return dispatch => {
    dispatch({type:"ADD_REVIEW",username: username, text:review})

    fetch(baseUrl+'/reviews',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username:username,review:review, podcast:podcast})
    })
  }
}

export default addReview
