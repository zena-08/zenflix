import React, { PureComponent } from "react";
import Card from '../Card/card.js';
import Loader from '../../Loader/loader.js';
import config from '../../../config/movie-provider.js';
import './movies.scss';

class Movies extends PureComponent {

    render() {
        const { movieList, loading, title } = this.props;
        return (
            <>
                {loading ? <Loader /> : (
                    <>
                        {title}
                        <div className="movies-container">
                            {movieList && movieList.map(movie => (
                                <Card key={movie.id} movie={movie} imgSrc={`${config.imagesBaseUrl}/w300${movie.poster_path}`} />
                            ))} 
                        </div>
                    </>
                )} 
            </>
        )

    }
}

export default Movies;
