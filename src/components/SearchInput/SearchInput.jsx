import React from 'react';
import './SearchInput.scss';

class SearchInput extends React.Component{
    onChange = (e) => {
        this.props.searchValue(e.target.value)
      };
    render(){
        return (
                <input type="text" placeholder="Search task" className="search" onChange={this.onChange}/>
        )
    }
}

export default SearchInput;
