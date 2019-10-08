const fetchPodcasts = (id) => {
  let url
  if(!!id){ //on first load when no id is passed
    url=`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${id}`
  }else{
    url='https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93'
  }
  return dispatch => {
    // dispatch({type:"LOADING_CATS"})
    fetch(url,{
      method: 'GET',
      headers: {
        'X-ListenAPI-Key':'b5ad33b748ea42279366ccafabbd2d87'
      }
    }).then(resp=>resp.json())
  .then(json=>dispatch({type:"ADD_PODCAST", podcasts: json.podcasts}))
  }
}


export default fetchPodcasts;
