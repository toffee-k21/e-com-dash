import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <RouterProvider router={AppRouter}/>
  );
}

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/add",
    element: <Add />
  },
  {
    path:"/update",
    element: <div>update </div>
  },
  {
    path:"/profile",
    element: <div>profile </div>
  },
  {
    path:"/logout",
    element: <div>logout </div>
  },
])

export default App;
