import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import SubjectDetails from "./pages/SubjectDetails";
import Progress from "./pages/Progress";
import Tasks from "./pages/Tasks";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { StudyProvider } from "./context/StudyContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "subjects",
        element: <Subjects />,
      },
      {
        path: "subjects/:subjectId",
        element: <SubjectDetails />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <StudyProvider>
      <RouterProvider router={router} />
    </StudyProvider>
  );
}

export default App;
