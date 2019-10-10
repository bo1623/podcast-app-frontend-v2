import React,{Component} from 'react'
import {connect} from 'react-redux'
import addReview from '../actions/addReview'
import fetchReviews from '../actions/fetchReviews'
import Review from '../components/Review'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux'

class ReviewsContainer extends Component{

  state={
    review: '',
  }

  componentDidMount(){
    //need to clear reviews in state otherwise they will remain even after going from one podcast show page to another
    this.props.clearReviews()
  }

  handleOnChange = event => {
    this.setState({
      review: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state.review,this.props.username,this.props.podcast)
    this.setState({
      review:''
    })
  }

  handleShowReviews = event => {
    this.props.logClick()
    this.props.fetchReviews(this.props.podcast_id)
    // const notice=document.querySelector('.no-reviews-yet')
    // if(notice!==null){
    //   notice.style.display="block"
    // }
    const reviews=document.querySelectorAll('.individual-reviews')
    if(event.target.innerText==="Show Reviews"){
      event.target.innerText="Collapse Reviews"
      for(let i=0;i<reviews.length;i++){
        reviews[i].style.display="block"
      }
    }else{
      event.target.innerText="Show Reviews"
      for(let i=0;i<reviews.length;i++){
        reviews[i].style.display="none"
      }
    }
  }

  render(){
    const {isLoggedIn,reviews,reviewButtonWasClicked} = this.props
    // const reviewsPresent = !!reviews
    function renderReviews(){
      if(reviews.length!==0){
        return reviews.map(review=><Review review={review} />)
      }else if(reviews.length===0 && reviewButtonWasClicked){
        const divStyle={display: 'block'}
        return(
          <div className='no-reviews-yet' style={divStyle}>
            <p>This podcast doesn't have any reviews yet. Be the first to leave one!</p>
          </div>
        )
      }
    }

    return(
      <div>
        <h3>Reviews</h3>
        <button onClick={this.handleShowReviews} className="show-reviews">Show Reviews</button>
        {renderReviews()}
        {isLoggedIn ? (
          <form className='review-form' onSubmit={this.handleOnSubmit}>
            <textarea
              id='review-input'
              rows='4'
              cols='70'
              onChange={this.handleOnChange}
              name="review"
              value={this.state.review}
              placeholder="Any comments on this podcast? Leave a review!"
            />
            <input type="submit" value="Submit Review" />
          </form>
        ) : (
          <p>Please log in to leave a review</p>
        )}
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  addReview: (review,username,podcast_id) => dispatch(addReview(review,username,podcast_id)),
  fetchReviews: podcast_id => dispatch(fetchReviews(podcast_id)),
  clearReviews: () => dispatch({type:"CLEAR_REVIEWS"}),
  logClick: () => dispatch({type:"CLICK_REVIEW"})
})

const mapStateToProps = state => {
  return{
    username: state.user.username,
    isLoggedIn: state.user.isLoggedIn,
    reviews: state.reviews,
    podcast_id: state.podcast.podcast_id,
    reviews: state.reviews,
    reviewButtonWasClicked: state.button.clicked,
    podcast: state.podcast
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewsContainer);
