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
            alert('click ok111')
        };
        this.setState({
                layerOptions: {
                    layerContent: (
                        <div>
                            <div className="layer-body">
                                <span>弹层</span>
                            </div>
                            <div className="layer-btn">
                                <button className="sure">确认</button>
                            </div>
                        </div>),
                    layerOnOk: layerOnOk
                },
                layerShow: true
            });
    }
    handleClick2() {
        let that = this;
        let layerOnOk = function() {
            alert('click ok222');
            that.setState({
                layerShow: false
            });
        };
        this.setState({
            layerOptions: {
                layerContent: (
                    <div>
                        <div className="layer-body">
                            <span>弹层2</span>
                        </div>
                        <div className="layer-btn">
                            <button className="sure">确认2</button>
                        </div>
                    </div>),
                layerOnOk: layerOnOk
            },
            layerShow: true
        });
    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>23423</h1>
                <button onClick={this.handleClick}>layer1</button>
                <button onClick={this.handleClick2}>layer2</button>
                {this.state.layer}
            </div>
        );
    }
}

const app = document.querySelector('#main');
ReactDOM.render(
    <Header/>,
    app
);