import React from "react";
import Search from './search.js';
import Menu from './menu.js';
import "./header.scss";
const Header = ({onChange}) => (
    <header className="header">
        <div className="title">Zenflix</div>
        <Menu />
        <Search onChange={onChange} />
    </header>
);


export default Header;