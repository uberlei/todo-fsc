import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTaskDeleteClick }) {
  const navidate = useNavigate();

  function onSeeTaskClick(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    });

    navidate(`/task?${query}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.length ? (
        tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-left text-white p-2 rounded-md w-full flex ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && (
                <CheckIcon className="text-green-400 mr-2" />
              )}
              {task.title}
            </button>
            <Button onClick={() => onSeeTaskClick(task)}>
              <ChevronRightIcon />
            </Button>
            <button
              onClick={() => onTaskDeleteClick(task.id)}
              className="bg-red-400 text-white p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </li>
        ))
      ) : (
        <h1 className="text-center font-medium">Crie uma tarefa</h1>
      )}
    </ul>
  );
}

export default Tasks;
