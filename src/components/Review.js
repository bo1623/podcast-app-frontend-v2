import React, {Component} from 'react'


export default class Review extends Component{

  render(){
    const {review} = this.props

    return(
      <div className="individual-reviews">
        <span className="review-username">{review.username} commented: </span>
        <span className="review-text">{review.text}</span>
      </div>
    )
  }

}
