import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { TaskListFormPage } from "./pages/task-list-form-page";
import { Toaster } from "./components/ui/toaster";
import { Text } from "@chakra-ui/react";
import { TaskListPage } from "./pages/task-list-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NewTaskPage } from "./pages/new-task-page";
import { MdHome } from "react-icons/md";

const TaskLists = () => <Home />;
const CreateUpdateTaskListScreen = () => <TaskListFormPage />;
const TaskListScreen = () => <TaskListPage />;
const CreateUpdateTaskScreen = () => <NewTaskPage />;

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Toaster />
        <nav className="nav">
          <Link to="/">
            <Text fontWeight={500} fontSize={{ base: "2xl" }}>
              <MdHome size="2rem" />
            </Text>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<TaskLists />} />
          <Route
            path="/new-task-list"
            element={<CreateUpdateTaskListScreen />}
          />
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
    </QueryClientProvider>
  );
}

export default App;
