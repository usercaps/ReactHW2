import React from 'react';
import './tabs.scss'

class Tabs extends React.Component{

  render(){
    let classMain,
        classFavor,
        classComplete;
    if (this.props.howTab === 'main'){
      classMain = 'selected-tab'
    } else if (this.props.howTab === 'favor'){
      classFavor = 'selected-tab'
    } else {
      classComplete = 'selected-tab'
    }
    return(
      <div className="tabs">
        <button className={`tab all ${classMain}`}  onClick={()=>this.props.mainTab()}>Main</button>
        <button className={`tab favor ${classFavor}`} onClick={()=>this.props.favor()}>Favorite</button>
        <button className={`tab compl ${classComplete}`} onClick={()=>this.props.comleteTab()}>Complete</button>
		  </div>
    )
  }
}

export {Tabs};
