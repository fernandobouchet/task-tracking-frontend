import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const TaskLists = () => <h1>Tasks Lists</h1>;
const CreateUpdateTaskListScreen = () => <h1>Create / Update Task List</h1>;
const TaskListScreen = () => <h1>Tasks</h1>;
const CreateUpdateTaskScreen = () => <h1>Create / Update Task</h1>;

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Task Lists</Link> |{" "}
        <Link to="/new-task-list">Create task list</Link>
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
