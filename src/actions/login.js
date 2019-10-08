import baseUrl from '../fetchUrl'

const login = (username) =>{
  return dispatch =>{
    dispatch({type: "LOG_IN",username:username})
    fetch(baseUrl+'/users',{
      method:'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username: username})
    })
  }
}

export default login
