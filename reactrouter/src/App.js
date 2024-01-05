import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from "./components/Layout"
import About from "./components/About/About";


const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
    // <Home>  </Home>
  );
}

export default App;
