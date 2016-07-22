/**
 * @file
 * @author
 * Created by yangpei on 2016/7/20.
 **/
import React from 'react';

class Layer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(document.querySelectorAll('.sure'));
        console.log(this.props.onOk);
        let onOk = this.props.onOk;
        document.querySelectorAll('.sure').forEach(function(el) {
            el.addEventListener('click', function(e) {
                onOk();
            });
        });

    }
    componentDidUpdate() {
        console.log(document.querySelectorAll('.sure'));
        console.log(this.props.onOk);
        let onOk = this.props.onOk;
        document.querySelectorAll('.sure').forEach(function(el) {
            el.addEventListener('click', function(e) {
                onOk();
            });
        });
    }
    render() {
        return (
            <div className="layer">
                {this.props.content}
            </div>
        )
    }

}

export default Layer