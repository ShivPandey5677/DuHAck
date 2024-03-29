import Navbar from './components/Navbar' 
import Home from './pages/Home';
import Blog1 from './components/Blog1';
import LoginRegisterPopup from './pages/LoginRegisterPopup'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Psych from './pages/Psych';
import QuizPage from './pages/QuizPage';
import { AuthContext } from './context/authContext';
import { useContext } from 'react';
import NavBarL from './components/NavBarL';
import RegPsych from './pages/RegPsych';
import DepBlog from './components/DepBlog';
import StrBlog from './components/StrBlog';
import AnxBlog from './components/AnxBlog';
import TraBlog from './components/TraBlog';

function App() {
  const {currentUser}=useContext(AuthContext);
  const queryClient=new QueryClient();
  const Layout=()=>{
    return (
      <QueryClientProvider client={queryClient}>
       <div className="bg-[#86B6F6]">
       {!currentUser?
      <Navbar/>:<NavBarL/>}
        <Outlet/>
        </div>
        </QueryClientProvider>
    );

  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <Layout/>,
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
        {
          path:"/quiz",
          element:<QuizPage/>
        },
        {
          path:"/registerpsych",
          element:<RegPsych/>
        },
        {
          path:"/depblg",
          element:<DepBlog/>
        },
        {
          path:"/anxblg",
          element:<AnxBlog/>
        },
        {
          path:"/strblg",
          element:<StrBlog/>
        },
        {
          path:"/trablg",
          element:<TraBlog/>
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
