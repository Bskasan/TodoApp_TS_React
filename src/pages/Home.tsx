import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://64dcff14e64a8525a0f77a87.mockapi.io/:endpoint";

interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }),
    [];

  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
