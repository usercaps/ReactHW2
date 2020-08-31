import React from 'react';

class TodoItem extends React.Component{
    onDelete(){
        this.props.onDelete();
    }
    onToggleDone(){
        this.props.onToggle();
    }
    onFavor(){
        this.props.onFavor();
    }

    render() {
        const { task, done, important } = this.props;
        let classNameText = "task-text";
        if (done) {
        classNameText += " task_is_done";
        }
        let classStar ='far fa-star to-favor';
        if (important) {
            classStar = "fas fa-star to-favor";
            }
        return (
                <li className="task" >
                    <p className={classNameText} onClick={()=>this.onToggleDone()}>{task}</p>
                    <div>
                        <i className="fas fa-trash-alt delete-task" onClick={()=>this.onDelete()}/>
                        <i className={classStar} onClick={()=>this.onFavor()}/>
                    </div>
                </li>
        )
    }
}

export default TodoItem;
