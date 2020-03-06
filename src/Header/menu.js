import React, { PureComponent } from "react";

import {
    Link
  } from "react-router-dom";

class Menu extends PureComponent {
    render() {
        return (
                <div className="menu">
                    <ul>
                        <li className="active">
                            <Link
                                    to="/"
                                    className=""
                                >Home
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                    to="/popular"
                                    className=""
                                >Popular
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                    to="/high-rated"
                                    className=""
                                >Highest Rated
                            </Link>
                        </li>
                    </ul>
                
                </div>);
    }
}

export default Menu;