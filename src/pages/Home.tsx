import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://64dcff14e64a8525a0f77a87.mockapi.io/todos";

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo: AddFunc = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };

    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {}
  };

  const toggleTodo: ToggleFunc = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, { ...item, isDone: !item.isDone });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default Home;
