import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';

class Search extends PureComponent {

    state = {
        searchText: this.props.match.params.query || ''
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.searchText) {
            this.props.history.push(`/search/${this.state.searchText}`);
        }
    
    }

    onChangeHandler = (e) => {
        this.setState({
            searchText: e.target.value
        });

    }

    clearSearch = (e) => {
        e.preventDefault();
        this.setState({
            searchText: ''
        });
        this.props.history.push('/');
    }

    render() {
        const {
            onChange
        } = this.props;

        
        return (
            <>
            <form className="search" onSubmit={this.onSubmitHandler} >
                <input type="text" onChange={this.onChangeHandler} value={this.state.searchText} />
                    
                    
            </form>
            {this.state.searchText.length > 0 ? (
                        <button onClick={this.clearSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 409.806 409.806">
                            <g>
                                <path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
                                    c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
                                    c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
                                    c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
                                    c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z" />
                            </g> 
                        </svg>

                        </button>
                        
                    ):(
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                            <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/>
                        </svg>)
                    }
            </>
        );
    }
}

export default withRouter(Search);
