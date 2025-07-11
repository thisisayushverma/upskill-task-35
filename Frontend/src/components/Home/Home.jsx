import React, {useState, useEffect, use } from 'react'
import { getPostsApi } from '../../api/post.api';
import Post from '../Post/Post.jsx';
import { useNavigate } from 'react-router-dom';
import useUser from '../../context/user.context.js';

function Home() {
  const navigate = useNavigate();
  const {user} = useUser();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [myFeed, setMyFeed] = useState([]);

  const fetchMyFeed = async () => {
    try {
      setError(null);
      setLoading(false);
      const data = await getPostsApi()
      console.log(data);
      setMyFeed(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if(!user){
      setLoading(true);
    }
    else{
      setLoading(false);
    }
    fetchMyFeed()
  }, [user])
  return (
    <div className='w-full min-h-screen flex justify-center'>
      {
        loading ? <h1 className='text-3xl text-green-600'>Loading...</h1> : 
        (error ? <h1 className='text-3xl text-red-600'>{error}</h1> : 
          (
            <div className='w-[50vw]'>
              {
                myFeed.map((post)=>{
                  return <Post key={post._id} post={post} />
                })
              }
            </div>
          )
        )
      }
    </div>
  )
}

export default Home
