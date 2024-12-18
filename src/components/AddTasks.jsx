import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddTasks({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha todos os campos!");
            return;
          }

          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar tarefa
      </Button>
    </div>
  );
}

export default AddTasks;
