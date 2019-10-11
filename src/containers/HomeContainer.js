import React,{Component} from 'react'
import fetchRandomEpisode from '../actions/fetchRandomEpisode'
import {connect} from 'react-redux'
import Episode from '../components/Episode'


class HomeContainer extends Component{

  handleOnClick = event => {
    this.props.fetchRandomEpisode()
  }


  render(){
    let randomEpisode
    let episodeComponent
    if(this.props.randomEpisode.length!==0){
      randomEpisode=this.props.randomEpisode
      episodeComponent= <Episode episode={randomEpisode} />
    }
    return(
      <div className="homepage-container">
        <div className="homepage-details">
          <div className="homepage-details-children">
            <h1>Welcome To The Podcast App</h1>
            <p>Find all the podcasts you need to stay updated on global issues and your interests.
            Click on the "podcast" link above to filter your podcasts by genre</p>
            <p>Log in with a username and you can save your favorite episodes to a personalized playlist!</p>
            <p>Not sure what to listen to? Click on the "Just Listen" button below for a random episode</p>
            <p id="random-quote">"Life is like a box of chocolates. You never know what you're gonna get.” - Forrest Gump</p>

            <button onClick={this.handleOnClick} className="random-episode-button">Listen Now</button>
          </div>

        </div>
        <div className="homepage-podcast">
          {episodeComponent}
        </div>
      </div>
    )
  }

}

// <Episode episode={episode} />

const mapDispatchToProps = dispatch => ({
  fetchRandomEpisode: () => dispatch(fetchRandomEpisode())
})

const mapStateToProps = state => {
  return{
    randomEpisode: state.randomEpisode,
    // podcast: state.randomEpisode.
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
