import React,{useState} from 'react'
import useUser from '../../context/user.context.js';
import { Link } from 'react-router-dom';
function Login() {
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);

  const {loginHandle} = useUser();


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try {
      setError(null)
      setLoading(true);
      await loginHandle({email,password});
      setLoading(false);
      
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <div className='w-full h-screen flex-col flex wrap justify-center items-center'>
      <h1 className='text-3xl text-center font-bold m-2'>Login</h1>
      <div className='border rounded-md  p-5 '>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label className='m-2'>
            Email:
            <br/>
            <input type='email' placeholder='Enter your email' required className='border my-1 rounded-md p-1 text-lg'/>
          </label>
          <label className='m-2'>
            Password:
            <br/>
            <input type='password' placeholder='*********' required className='border my-1 rounded-md p-1 text-lg'/>
          </label>
          {
            //error || response
            error && <p className='text-red-600'>{error}</p>
            
          }
          {
            loading && <p>Loading...</p>
          }
          <button className='bg-blue-700 text-white px-5 py-2 rounded-md'>
            Submit
          </button>
          <p className='m-2'>Don't have Account? <Link className={'text-blue-600 font-bold m-1'} to='/signup'>Sign Up</Link></p>
        </form>  
      </div>
    </div>
  )
}

export default Login
