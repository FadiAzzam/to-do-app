import { Suspense } from "react";

import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <header className="py-6 border-b mb-3 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          ToDo App
        </h1>
      </header>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <TaskList />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
