import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";

const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}` + "&query=";

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then(resp => resp.json())
      .then(resp => this.setState({ reviews: resp.results }));
  };
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form
          className="search-form"
          onChange={this.updateSearchTerm}
          onSubmit={this.onSubmit}
        >
          <label> Search for: </label>
          <input id="search-input" type="text"></input>
          <input type="submit" value="Find" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
