import {combineReducers} from 'redux';
import uuid from 'uuid';


const rootReducer=combineReducers({
  podcasts: podcastsReducer,
  playlist: playlistReducer,
  episodes: episodesReducer,
  podcast: podcastReducer,
  user: userReducer
})

export default rootReducer;

function podcastsReducer(state=[],action){ //renders list of podcasts

  switch(action.type){
    case "ADD_PODCAST":
      console.log(action)
      const podcasts = action.podcasts.map(podcast => {
        return {
          podcast_id: podcast.id,
          title: podcast.title,
          thumbnail: podcast.thumbnail,
          image: podcast.image,
          total_episodes: podcast.total_episodes,
          latest_publication: podcast.latest_pub_date_ms
        }
      })
      return {
        podcasts
      }

    default:
      return state
  }
}

function podcastReducer(state=[],action){ //use to set state of podcast key for the podcast show page
  switch(action.type){
    case "SHOW_PODCAST":
      console.log(action)
      const podcast={
        description: action.podcast.description,
        podcast_id: action.podcast.id,
        image: action.podcast.image,
        total_episodes: action.podcast.total_episodes,
        title: action.podcast.title
      }
      return podcast

    default:
      return state
  }
}

function episodesReducer(state=[],action){ //takes json data returned from API fetch request returning a specific episode based on id
  switch(action.type){
    case "ADD_EPISODES":
      console.log(action)
      const episodes=action.podcast.episodes.map(episode=>{
        return{
          title: episode.title,
          audio_url: episode.listennotes_url,
          podcast_id: action.podcast.id,
          episode_id: episode.id,
          audio_length: episode.audio_length_sec,
          description: episode.description,
          published_date: episode.pub_date_ms
        }
      })
      return{
        episodes
      }
    default:
      return state
  }
}

function userReducer(state={isLoggedIn: false,username:''},action){

  switch(action.type){
    case "LOG_IN":
      return{
        ...state,
        isLoggedIn: true,
        username: action.username
      }
    default:
      return state
  }

}


function playlistReducer(state=[],action){

  switch(action.type){
    case "ADD_TO_PLAYLIST":
      return [...state,action.podcast]

    case "REMOVE_FROM_PLAYLIST":
      return state.filter(podcast=>podcast.id!==action.id)

    default:
      return state
  }

}
