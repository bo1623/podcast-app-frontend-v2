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
      <div className="homepage-podcast">
        <button onClick={this.handleOnClick} className="random-episode-button">Listen Now</button>
        {episodeComponent}
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
    randomEpisode: state.randomEpisode
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
