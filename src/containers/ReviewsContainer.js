import React,{Component} from 'react'
import {connect} from 'react-redux'
import addReview from '../actions/addReview'
import fetchReviews from '../actions/fetchReviews'
import Review from '../components/Review'

class ReviewsContainer extends Component{

  state={
    review: ''
  }

  handleOnChange = event => {
    this.setState({
      review: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state.review,this.props.username,this.props.podcast_id)
    this.setState({
      review:''
    })
  }

  handleShowReviews = event => {
    this.props.fetchReviews(this.props.podcast_id)
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
    const {isLoggedIn,reviews} = this.props

    return(
      <div>
        <h3>Reviews</h3>
        <button onClick={this.handleShowReviews} className="show-reviews">Show Reviews</button>
        {reviews.map(review=><Review review={review} />)}
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
  fetchReviews: podcast_id => dispatch(fetchReviews(podcast_id))
})

const mapStateToProps = state => {
  return{
    username: state.user.username,
    isLoggedIn: state.user.isLoggedIn,
    reviews: state.reviews,
    podcast_id: state.podcast.podcast_id,
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
