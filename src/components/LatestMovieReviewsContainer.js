import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {

    state = {
        reviews: []
    }

    fetchMovieReviews = () => {
        fetch(URL)
            .then(data => data.json())
            .then(data => data.results)
            .then(reviews => this.setState({ reviews }))
    }

    componentDidMount() {
        this.fetchMovieReviews();
    }
    render() {
        //console.log(this.state.reviews)
        return (<div className="latest-movie-reviews">
            <MovieReviews reviews = {this.state.reviews}/>
        </div>)
    }
}


export default LatestMovieReviewsContainer;