import userUrl from '../fetchUrl'

const login = (username) =>{
  return dispatch =>{
    dispatch({type: "LOG_IN",username:username})
    fetch(userUrl,{
      method:'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(username)
    })
  }
}

export default login
