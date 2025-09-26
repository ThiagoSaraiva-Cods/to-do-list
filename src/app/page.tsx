import { TaskList } from "@/components/task-list";

export default function Home() {
  const tasks = [{
    id: 1,
    title: 'Task 1',
    completed: false,
  }, {
    id: 2,
    title: 'Task 2',
    completed: true,
  }]

  return (
   <div className="p-5">
    <TaskList tasks={tasks} />
   </div>
  );
}
