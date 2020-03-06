import React, { PureComponent } from "react";
import Movies from '../movies.js';
import Header from '../../../Header/header.js';
import {getHighestRatedMovies} from '../../../api/movie.js';

class HighRatedMovies extends PureComponent {

    state={
        movies: [],
        loading: true
    }

    async componentDidMount() {
       const json = await getHighestRatedMovies();
       this.setState({
           movies: json.results,
           loading: false
       });
    }

    render() {
        return (
            <>
            <Header />
            <Movies movieList={this.state.movies} loading={this.state.loading} title={"High Rated"} />
            </>
        )

    }
}

export default HighRatedMovies;
