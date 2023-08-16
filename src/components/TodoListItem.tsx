import React from 'react';

interface IListItem {
  item: TodoType;
}

const TodoListItem:React.FC<IListItem> = ({item}) => {
  return (
    <li>
      <p className='checked'>{item.id} </p>
      <p> {item.task} </p>
      <span className="task-icons" >✖️</span>
    </li>
  );
};

export default TodoListItem