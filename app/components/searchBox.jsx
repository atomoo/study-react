/**
 * @file 搜索框
 * @author yangpei
 * Created by yangpei on 2016/7/14.
 */
import React from 'react';
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSearch() {
        alert(this.state.value)
    }

    render() {
        let value = this.state.value;
        return (
          <div>
              <input type="text" value={value} onChange={this.handleChange} placeholder="input something"/>
              <button onClick={this.handleSearch}>click</button>
              <span>{value}</span>
          </div>
        );
    }
}
export default SearchBox;