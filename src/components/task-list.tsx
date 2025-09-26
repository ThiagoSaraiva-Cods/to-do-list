"use client"

import { TaskItem, TaskProps } from "./task-item"
import {useState} from 'react';

interface TaskListProps {
    tasks: TaskProps[];
}

export const TaskList = ({tasks}: TaskListProps) => {
    const [isCompletedTask, setIsCompletedTask] = useState(false)

    const handleToggleComplete = () => {
        setIsCompletedTask(!isCompletedTask)
    }
    
    return (
        <div className={`flex flex-col gap-4`}>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onToggleComplete={handleToggleComplete}/>
            ))}
        </div>
    )
}

