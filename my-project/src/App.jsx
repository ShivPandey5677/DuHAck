import Navbar from './components/Navbar' 
import Home from './pages/Home';
import LoginRegisterPopup from './pages/LoginRegisterPopup'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Psych from './pages/Psych';

function App() {
  const currentUser=true;
  const Layout=()=>{
    return (
       <div>
      <Navbar/>
        <Outlet/>
        
        </div>
    );

  };
  const ProtectedRoute=({children})=>{
    if(!currentUser){
    return <Navigate to="/login"/>}
    return children

  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <ProtectedRoute>
      <Layout/>
      </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
        {
          path: "/psychiatrist",
          element: <Psych/>,
        },
       
      ]
    },
    {
      path: "/login",
      element: <LoginRegisterPopup/>,
    },
    {
      path: "/register",
      element: <SignUp/>,
    },
    
   
  ]);
 
    return <div >
       <RouterProvider router={router} />
    </div>;
  }
  
  export default App;
