import React, { PureComponent } from "react";
import Movies from '../movies.js';
import Header from '../../../Header/header.js';
import {searchMovies} from '../../../api/movie.js';

class SearchMovies extends PureComponent {

    state={
        movies: [],
        loading: true 
    }

    async componentDidMount() {
        this.searchMovies(this.props.match.params.query);
     }

    async componentDidUpdate(prev) {
        if(prev.match.params.query !== this.props.match.params.query) {
            this.searchMovies(this.props.match.params.query);
        }
    }

    searchMovies = async(query) => {
        const json = await searchMovies(query);
        this.setState({
            movies: json.results,
            loading: false
        });
    }

    render() {
        return (
            <>
            <Header/>
            <Movies movieList={this.state.movies} loading={this.state.loading} title={"Search Results"} />
            </>
        )

    }
}

export default SearchMovies;
