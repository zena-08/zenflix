import React, { PureComponent, lazy, Fragment } from "react";
import ReactDOM from "react-dom";
import Main from "./Main/main.js";
import Header from "./Header/header.js";
import Menu from "./Header/menu.js";
import Footer from "./Footer/footer.js";
import './app.scss';

class App extends PureComponent {




    render() {
        return (
        <>
            <Main />
            <Footer />
        </>);

    }
}

export default App;
