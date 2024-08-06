import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Login from "./components/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./components/dashboard/Home";
import ApplyLeave from "./components/leave/ApplyLeave";
import ViewLeaves from "./components/leave/ViewLeaves";

function App() {
  const myRouter = createBrowserRouter([
    {path:'', Component:Login},
    {path:'/login', Component:Login},
    {path:'/dashboard', Component:Dashboard, children:[
      {path:'home', Component:Home},
      {path:'apply-leave', Component:ApplyLeave},
      {path:'view-leaves', Component:ViewLeaves}
    ]}
  ])
  return (
    <>
      <RouterProvider router={myRouter}>
        <Login />
      </RouterProvider>
    </>
  );
}

export default App;
