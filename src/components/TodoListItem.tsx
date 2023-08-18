import React from "react";

interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFunc;
  deleteTodo: DeleteFunc;
}

const TodoListItem: React.FC<IListItem> = ({
  item,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      {item.isDone ? (
        <p className="checked" onClick={() => toggleTodo(item)}>
          {item.task}
        </p>
      ) : (
        <p onClick={() => toggleTodo}> {item.task} </p>
      )}
      <span className="task-icons" onClick={() => deleteTodo(item.id)}>✖️</span>
    </li>
  );
};

export default TodoListItem;
