import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import RockPaperScissors from './routes/rock-paper-scissors';
import About from './routes/about';
import NotFound from './components/not-found';

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
    errorElement: <NotFound />
  },
  {
    path: "/play",
    element: <RockPaperScissors />,
  },
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
