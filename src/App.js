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
import HomeContainer from './containers/HomeContainer'
import {connect} from 'react-redux'

class App extends Component {

  render(){
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/podcasts' component={PodcastsContainer} />
          <Route path='/podcasts/:podcastid' component={PodcastContainer} />
        </div>
      </Router>
    )
  }
}



export default App;
