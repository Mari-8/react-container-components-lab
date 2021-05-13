import React from 'react' 

const MovieReviews = props => <div className="review-list"> 
{props.reviews.map(review => {
    return(
    <div className="review"> 
        <h2>Title: {review.display_title}</h2> 
        <h3>By: {review.byline} </h3>
        <p>{review.summary_short}</p>
        <br />
    </div>
    )
})}
</div>

export default MovieReviews