import React from 'react';

import TodoItem from './TodoItem/TodoItem';
import AddInput from '../AddInput/AddInput';
import './TodoList.scss';

class TodoList extends React.Component {


        elements(){
            let element = this.props.todos.map((item) => {
                const { id, ...itemProps } = item;
                return (
                    <TodoItem
                     {...itemProps}
                    key={id}
                    onDelete={()=>this.props.onDelete(id)}
                    onToggle={()=>this.props.onToggle(id)}
                    onFavor={()=>this.props.onFavor(id)}
                    />
                )
})
return element}


    render(){
        return (
            <div className='content'>
               <ul className="tasks">
               {this.elements()}
               </ul>
                <AddInput
                onAdded={this.props.onAdded}/>
            </div>
        )
    }
}

export default TodoList;
