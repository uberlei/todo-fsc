import "./App.css";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  console.log(tasks);

  function onTaskClick(taskId) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function onTaskDeleteClick(taskId) {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  function onAddTaskClick(title, description) {
    setTasks((tasks) => [
      ...tasks,
      { id: v4(), title, description, isCompleted: false },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //     );
  //     const data = await response.json();
  //     setTasks(data.map((task) => ({ ...task, id: v4() })));
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de tarefas</Title>
        <AddTasks onAddTaskClick={onAddTaskClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDeleteClick={onTaskDeleteClick}
        />
      </div>
    </div>
  );
}

export default App;
