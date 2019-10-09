import React,{Component} from 'react';
import fetchPodcasts from '../actions/fetchPodcasts'
import {connect} from 'react-redux'
import Podcast from '../components/Podcast'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import EpisodesContainer from './EpisodesContainer'
import genre_ids from '../genre_ids'
import PlaylistContainer from './PlaylistContainer'

class PodcastsContainer extends Component{

  state={
    keyword:''
  }

  componentDidMount(){
    console.log(this.props)
    this.props.clearEpisodes()
    this.props.fetchPodcasts()
  }

  handleOnChange = (event) =>{
    console.log('dropdown list is working')
    const genreId=event.target.value
    this.props.fetchPodcastsWithId(genreId)
  }

  handleOnChangeKeyword = event => {
    this.setState({
      keyword: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render(){
    const {isLoggedIn} = this.props
    const sorted_genres=genre_ids.sort((a, b) => (a.name > b.name) ? 1 : -1)
    let podcast
    if(!!this.props.podcasts.podcasts){ //if the podcasts have loaded onto the state successfully then only can we carry out the line below,
      //otherwise an error will be thrown saying map cannot be called on undefined
      podcast=this.props.podcasts.podcasts.map(podcast=><Podcast podcast={podcast}/>)
    }
    return (
      <div className='podcasts-container'>
        <div className='searched-podcasts'>
          <label>Filter by genre: </label>
          <select id="genre-search" onChange={this.handleOnChange}>
            <option select="selected"></option>
            {sorted_genres.map(genre=><option value={genre.id}>{genre.name}</option>)}
          </select>

          <form className="search-form" onSubmit={this.handleOnSubmit}>
            <label>Search by keyword: </label>
            <input
              type="text"
              placeholder="Enter search term"
              name="search-keyword"
              value={this.state.keyword}
              onChange={this.handleOnChangeKeyword}
            />
            <input type="submit" value="Search" />
          </form>

          <ul>
            {podcast}
          </ul>
        </div>
        <div className='playlist-container'>
          {isLoggedIn ? (
            <div>
              <div classname='title-container'>
                <h1>Playlist Container</h1>
              </div>
              <div className='playlist-episodes'>
                <PlaylistContainer />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    podcasts:state.podcasts,
    isLoggedIn: state.user.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPodcasts: () => dispatch(fetchPodcasts()),
  fetchPodcastsWithId: id => dispatch(fetchPodcasts(id)),
  clearEpisodes: () => dispatch({type: "CLEAR_EPISODES"})
})

export default connect(mapStateToProps,mapDispatchToProps)(PodcastsContainer)


// <Route path={`${match.url}/:podcastId`} render={routerProps => <PodcastEps {...routerProps} />}/>

//
// <ul>
//   {this.props.podcasts.map(podcast=><Podcast podcast={podcast} />)}
// </ul>

// <PodcastList podcasts={this.props.podcasts.podcasts}
