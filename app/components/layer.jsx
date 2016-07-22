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

    render() {
        return (
            <div>
                <div>
                    {this.props.content}
                </div>
                <div className='btn-group'>
                    <button onClick={this.props.onOk}>{this.props.okText}</button>
                </div>
            </div>
        )
    }

}

export default Layer