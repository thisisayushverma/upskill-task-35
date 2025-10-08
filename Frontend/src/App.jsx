import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { UserProvider } from './context/user.context.js'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header/Header.jsx'

function App() {
  const [user,setUser] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const loginHandle = async (credentials)=>{
    console.log(credentials);
    try {
      const res = await fetch(`${backendUrl}/api/user/login`,{
        method:"POST",
        credentials:"include",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(credentials)
      })
      const data = await res.json();
      if(res.ok || data.success === true){
        setUser(data.data);
        navigate('/')
      }
      else{
        throw new Error(data.message)
      }
    } catch (error) {
      throw error
    }
  }


  const registerHandle = async (credentials)=>{
    try {
      const res = await fetch(`${backendUrl}/api/user/register`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(credentials)
      })
      const data = await res.json();
      if(res.ok || data.success === true){
        setUser(data);
      }
      else{
        throw new Error(data.message)
      }
    } catch (error) {
      throw error
    }
  }

  const verifyUser = async ()=>{
    try {
      const res = await fetch(`${backendUrl}/api/user/verify`,{
        method:"GET",
        credentials:"include",
        headers: {
          "content-type":"application/json"
        }
      })
      const data = await res.json();
      if(data.success === true){
        console.log("verify data",data.data);
        setUser(data.data);
      }
      else{
        navigate('/login')
      }
    } catch (error) {
      navigate('/login')
    }
  }

  useEffect(()=>{
    verifyUser();
  },[])



  return (
    <>
    <UserProvider value={{user,loginHandle,registerHandle}}>
      <Header/>
      <Outlet/>
    </UserProvider>
    </>
  )
}

export default App
