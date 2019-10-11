const fetchRandomEpisode = () => {
  return dispatch => {
    // dispatch({type:"LOADING_CATS"})
    fetch('https://listen-api.listennotes.com/api/v2/just_listen',{
      method: 'GET',
      headers: {
        'X-ListenAPI-Key':'b5ad33b748ea42279366ccafabbd2d87'
      }
    }).then(resp=>resp.json())
    // .then(json=>console.log(json))
    .then(json=>dispatch({type:"RANDOM_EPISODE", episode: json}))
  }
}


export default fetchRandomEpisode;
