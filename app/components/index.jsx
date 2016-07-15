import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './searchBox'
class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>首页</h1>
                <SearchBox />
            </div>
        );
    }
}
const app = document.querySelector('#main');
ReactDOM.render(
    <Header/>,
    app
);