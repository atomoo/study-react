/**
 * @file 搜索框
 * @author yangpei
 * Created by yangpei on 2016/7/14.
 */
import React from 'react';
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            htmlContent: '<strong>asdfsa</strong>'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSearch() {
        console.log(this);
        alert(this.state.value);
    }

    render() {
        let value = this.state.value;
        return (
          <div>
              <input {...this.props} type="text" value={value} data-max={this.props.maxLoops} onChange={this.handleChange} placeholder="input something"/>
              {/* 注释注释 */}
              <button onClick={this.handleSearch}>click</button>
              <span dangerouslySetInnerHTML={{__html: this.state.htmlContent}}></span>
          </div>
        );
    }
}
export default SearchBox;