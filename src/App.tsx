import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { TaskListFormPage } from "./pages/task-list-form-page";
import { Toaster } from "./components/ui/toaster";

const TaskLists = () => <Home />;
const CreateUpdateTaskListScreen = () => <TaskListFormPage />;
const TaskListScreen = () => <h1>Tasks</h1>;
const CreateUpdateTaskScreen = () => <h1>Create / Update Task</h1>;

function App() {
  return (
    <Router>
      <Toaster />
      <nav>
        <Link to="/">Task Lists</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskLists />} />
        <Route path="/new-task-list" element={<CreateUpdateTaskListScreen />} />
        <Route
          path="/edit-task-list/:listId"
          element={<CreateUpdateTaskListScreen />}
        />
        <Route path="/task-lists/:listId" element={<TaskListScreen />} />
        <Route
          path="/task-lists/:listId/new-task"
          element={<CreateUpdateTaskScreen />}
        />
        <Route
          path="/task-lists/:listId/edit-task/:taskId"
          element={<CreateUpdateTaskScreen />}
        />
      </Routes>
    </Router>
  );
}

export default App;
