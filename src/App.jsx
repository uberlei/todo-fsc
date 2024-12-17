import "./App.css";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "asda asdas d asdasdqweqwe qeqweqwe",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar programação 1",
      description: "asda asdas d asdasdqweqwe qeqweqwe",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar programação 2",
      description: "asda asdas d asdasdqweqwe qeqweqwe",
      isCompleted: false,
    },
  ]);

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

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks />
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
