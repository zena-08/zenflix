import React, { PureComponent } from "react";
import Movies from '../movies.js';
import Header from '../../../Header/header.js';
import {getPopularMovies, getHighestRatedMovies} from '../../../api/movie.js';

class PopularMovies extends PureComponent {

    state={
        movies: [],
        loading: true 
    }

    async componentDidMount() {
       const json = await getPopularMovies();
       this.setState({
           movies: json.results,
           loading: false
       });
    }

    render() {
        return (
            <>
            <Header />
            <Movies movieList={this.state.movies} loading={this.state.loading} title={"Popular"} />
            </>
        )

    }
}

export default PopularMovies;
