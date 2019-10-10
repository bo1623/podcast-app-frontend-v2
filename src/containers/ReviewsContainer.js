import React,{Component} from 'react'
import {connect} from 'react-redux'
import addReview from '../actions/addReview'

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
    console.log(this.state.review)
  }

  render(){
    const {isLoggedIn} = this.props

    return(
      <div>
        <h3>Reviews Container</h3>
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
  addReview: (review,username,podcast_id) => dispatch(addReview(review,username,podcast_id))
})

const mapStateToProps = state => {
  return{
    username: state.user.username,
    isLoggedIn: state.user.isLoggedIn,
    reviews: state.reviews,
    podcast_id: state.podcast.podcast_id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
