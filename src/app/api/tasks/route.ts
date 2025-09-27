import { NextRequest } from "next/server";
import { tasks } from "../tasks/tasks-mock";

export async function GET() {
  return Response.json(tasks);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newTask = {
    id: crypto.randomUUID(),
    title: body.title,
    completed: false,
  };

  tasks.push(newTask);

  return Response.json(
    { message: "Tarefa criada com sucesso!", newTask },
    { status: 201 },
  );
}
