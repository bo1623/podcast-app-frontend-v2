import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from './containers/NavBar';
import PodcastsContainer from './containers/PodcastsContainer'
import PodcastContainer from './containers/PodcastContainer'
import EpisodesContainer from './containers/EpisodesContainer'
import {connect} from 'react-redux'

class App extends Component {

  // handleOnChange = () => {
  //   this.props.clearReviews()
  // }

  // browserHistory.listen(location =>  {
  //   this.props.clearReviews()
  // });

  render(){
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/podcasts' component={PodcastsContainer} />
          <Route path='/podcasts/:podcastid' component={PodcastContainer} />
        </div>
      </Router>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   clearReviews: () => dispatch({type:"CLEAR_REVIEWS"})
// })

export default App;
// export default compose(
//   withRouter,
//   connect(null, mapDispatchToProps)
// )(App);
