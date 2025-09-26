export interface TaskProps {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskItemProps {
    task: TaskProps;
    onToggleComplete: (taskId: number) => void;
}

export const TaskItem = ({ task, onToggleComplete }: TaskItemProps) => {
    return (
        <div className="border border-purple-700 p-2 rounded-md flex gap-2 max-w-2xl items-center">
            <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />
            <p className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
            </p>
        </div>
    )
}