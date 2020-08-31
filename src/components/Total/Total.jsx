import React from 'react';

class Totals extends React.Component{
  render(){
    let favor = this.props.favor;
    let done = this.props.done;
    return(
      <div className="totals">
        <div className="total">Total favorites: <span className="bookmarks-number">{favor}</span></div>
    <div className="total">Total comletes: <span className="complete-number">{done}</span></div>
		  </div>
    )
  }
}

export {Totals};
