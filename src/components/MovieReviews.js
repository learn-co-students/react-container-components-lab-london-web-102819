// Code MovieReviews Here
import React from 'react';


function MovieReviews(props) {
    return (
    <div className="review-list">
        {props.reviews.map((r, index) =>
            <div className = "review" key = {index}>
                <h2>{r.display_title}</h2>
                <p>{r.summary_short}</p>
            </div>
        )}
    </div>
    )
}


export default MovieReviews;