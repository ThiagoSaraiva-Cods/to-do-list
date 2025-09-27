"use client";

import { TaskList, TaskProps } from "@/components/task-list";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/input";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";

const formSchema = z.object({
  taskTitle: z.string().trim().min(1, "O título da tarefa é obrigatório."),
});

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch("/api/tasks");
      const data = await response.json();

      setTasks(data);
    };

    getTasks();
  }, []);

  const handleCreateTask = async (data: z.infer<typeof formSchema>) => {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: data.taskTitle }),
    });

    const savedTask = await response.json();

    setTasks((currentTasks) => [...currentTasks, savedTask.newTask]);

    reset();
  };

  const handleToggleComplete = async (id: string) => {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
    });

    if (!response.ok) {
      console.error("Falha ao atualizar a tarefa.");
      return;
    }

    const updatedTask = await response.json();

    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? updatedTask : task)),
    );
  };

  const handleDeleteTask = async (id: string) => {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Falha ao excluir a tarefa.");
      return;
    }

    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="mx-auto max-w-2xl p-5">
      <form
        onSubmit={handleSubmit(handleCreateTask)}
        noValidate
        className="flex flex-col flex-wrap gap-2 space-x-2 md:flex-nowrap"
      >
        <div className="flex items-center gap-2">
          <Input
            type="text"
            {...register("taskTitle")}
            name="taskTitle"
            placeholder="Nova tarefa"
            className="w-full"
          />

          <Button type="submit" className="h-[40px] min-w-fit">
            Adicionar tarefa
          </Button>
        </div>
        {errors.taskTitle && (
          <p className="mt-1 text-sm text-red-500">
            {errors.taskTitle.message}
          </p>
        )}
      </form>
      <div className="py-5">
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}
