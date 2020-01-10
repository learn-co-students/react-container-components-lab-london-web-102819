import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    fetchMovies = query => {
        fetch(URL + `&query=${query}`)
            .then(data => data.json())
            .then(data => data.results)
            .then(reviews => this.setState({ reviews }))
    }

    componentDidMount() {
        this.fetchMovies("die");
    }


    handleSubmit = () => {
        this.fetchMovies(this.state.searchTerm)
    }

    render() {
        return (<div className = "searchable-movie-reviews">
            <form onSubmit = {this.handleSubmit}>
                <input type="text" onChange = {e => this.setState({searchTerm: e.target.value})}></input>
            </form>
            <MovieReviews reviews = {this.state.reviews}/>

        </div>)
    }
}


export default SearchableMovieReviewsContainer;