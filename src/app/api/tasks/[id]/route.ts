import { NextRequest } from "next/server";
import { tasks } from "../tasks-mock";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return Response.json(
      { message: "Tarefa não encontrada!" },
      { status: 404 },
    );
  }

  task.completed = !task.completed;
  return Response.json(task);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const taskId = id;

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return Response.json(
      { message: "Tarefa não encontrada!" },
      { status: 404 },
    );
  }

  tasks.splice(taskIndex, 1);

  return new Response(null, { status: 204 });
}
