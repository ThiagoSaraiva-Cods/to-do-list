import { Trash } from "lucide-react";
import { Button } from "./button";

interface TaskListProps {
  tasks: TaskProps[];
  onToggleComplete: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  className?: string;
}

export interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
}

export const TaskList = ({
  tasks,
  onToggleComplete,
  onDeleteTask,
  className,
}: TaskListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className="flex w-full justify-between gap-2 rounded-md border border-purple-700 p-2"
          >
            <div className="flex items-center gap-2 truncate rounded-md p-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
              />
              <p
                className={`text-md truncate ${task.completed ? "text-gray-500 line-through" : ""} ${className}`}
              >
                {task.title}
              </p>
            </div>
            <Button onClick={() => onDeleteTask(task.id)} className="w-fit">
              <Trash />
            </Button>
          </div>
        ))
      ) : (
        <p className="text-md text-center text-gray-500">
          Nenhuma tarefa encontrada!
        </p>
      )}
    </div>
  );
};
