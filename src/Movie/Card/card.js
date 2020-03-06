import React, { PureComponent } from "react";
import {IconHeartFill, IconHeartLine} from '../../icons/index.js';
import { imagesBaseUrl } from '../../../config/movie-provider.js';
import './movie-card.scss';

const baseUrl = imagesBaseUrl + '/w300';



const Card = ({movie, imgSrc, liked}) => {
    return (
        <div className="movie-card" >
            <img src={imgSrc} />
            {movie.title}
            <IconHeartLine />
        </div>
    )
};

export default Card;