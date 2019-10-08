const fetchPodcastShow = (id) => {
  return dispatch => {
    // dispatch({type:"LOADING_CATS"})
    fetch(`https://listen-api.listennotes.com/api/v2/podcasts/${id}?sort=recent_first`,{
      method: 'GET',
      headers: {
        'X-ListenAPI-Key':'b5ad33b748ea42279366ccafabbd2d87'
      }
    }).then(resp=>resp.json())
  .then(json=>dispatch({type:"SHOW_PODCAST", podcast: json}))
  }
}


export default fetchPodcastShow;
