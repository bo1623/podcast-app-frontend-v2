import React,{Component} from 'react'
import {connect} from 'react-redux'

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
    console.log(this.state.review)
  }

  render(){
    return(
      <div>
        <h3>Reviews Container</h3>
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
      </div>
    )
  }

}

export default ReviewsContainer
