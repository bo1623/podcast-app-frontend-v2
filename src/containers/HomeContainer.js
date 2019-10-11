import React,{Component} from 'react'
import fetchRandomEpisode from '../actions/fetchRandomEpisode'
import {connect} from 'react-redux'


class HomeContainer extends Component{

  handleOnClick = event => {
    this.props.fetchRandomEpisode()
  }

  render(){
    return(
      <div className="homepage-podcast">
        <button onClick={this.handleOnClick} className="random-episode-button">Listen Now</button>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  fetchRandomEpisode: () => dispatch(fetchRandomEpisode())
})

export default connect(null,mapDispatchToProps)(HomeContainer)
