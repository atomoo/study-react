var React = require('react');
var ReactDOM = require('react-dom');
var Header = React.createClass({
    render: function () {
        return(
            <h1>首页</h1>
        );
    }
});
ReactDOM.render(
    <Header/>,
    document.body
);