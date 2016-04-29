var React = require('react');
var ReactDOM = require('react-dom');
var Header = React.createClass({
    render: function () {
        return(
            <h1>React H1</h1>
        );
    }
});
ReactDOM.render(
    <Header/>,
    document.body
);