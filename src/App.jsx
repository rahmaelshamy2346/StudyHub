import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';

import Dashboard from './pages/Dashboard';
import Subjects from './pages/Subjects';
import SubjectDetails from './pages/SubjectDetails';
import Progress from './pages/Progress';

import { StudyProvider } from './context/StudyContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'subjects',
        element: <Subjects />,
      },
      {
        path: 'subjects/:subjectId',
        element: <SubjectDetails />,
      },
      {
        path: 'progress',
        element: <Progress />,
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