import React from 'react';

class AddInput extends React.Component {
  state = {
    label: "",
  };
  onChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      label: e.target.value,
    });
  };
  onAddedTask = (e) => {
    this.props.onAdded(this.state.label);
    this.setState({
      label: "",
    });
    e.preventDefault();
  };
  render(){
    return (
      <form className="input-block" onSubmit={this.onAddedTask}>
        <input type="text" id="enter-task" placeholder="Enter new task" value={this.state.label}
          onChange={this.onChange}/>
        <div className="s"></div>
      </form>
    )
  }
}

export default AddInput;
