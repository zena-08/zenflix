import React from "react";
import './main.scss';
import Routes from "./../router.js";

const Main = ({ searchResultText }) => (
    <div className="main">
        <div className="u-txt-c u-mt srch-results-text">{searchResultText ? ('Results for "'+ searchResultText +'"') : ""}</div>
        <Routes />
    </div>
);

export default Main;
