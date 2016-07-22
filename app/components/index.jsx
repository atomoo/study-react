import React from 'react';
import ReactDOM from 'react-dom';
import Layer from './layer'
class Header extends React.Component{
    constructor() {
        super();
        this.state = {
            layerOptions: {},
            layerShow: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick() {
        let layerOnOk = function() {
            alert('click ok')
        };
        this.setState({
                layerOptions: {
                    layerContent: (<span>弹层</span>),
                    okText: '确认',
                    layerOnOk: layerOnOk
                },
                layerShow: true
            });
    }

    handleClick2() {
        let layerOnOk = function() {
            alert('click ok!')
        };
        this.setState({
            layerOptions: {
                layerContent: (<span>弹层2</span>),
                okText: '确认2',
                layerOnOk: layerOnOk
            },
            layerShow: true
        });
    }
    render() {
        let layerEl = '';
        if(this.state.layerShow) {
            layerEl = <Layer content={this.state.layerOptions.layerContent} onOk={this.state.layerOptions.layerOnOk} okText={this.state.layerOptions.okText} />;
        }
        return (
            <div>
                <h1>首页asdf</h1>
                <button onClick={this.handleClick}>layer1</button>
                <button onClick={this.handleClick2}>layer2</button>
                {layerEl}
            </div>
        );
    }
}

const app = document.querySelector('#main');
ReactDOM.render(
    <Header/>,
    app
);