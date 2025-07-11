import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home, Login, User ,Signup} from './components'
import CreatePost from './components/Post/CreatePost.jsx'


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='user' element={<User/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='post' element={<CreatePost/>}/>
    </Route>
  ])
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
