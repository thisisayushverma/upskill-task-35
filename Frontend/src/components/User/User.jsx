import React, { useState, useEffect } from 'react'
import { getPostByUserApi } from '../../api/post.api'
import Post from '../Post/Post';
import useUser from '../../context/user.context';

function User() {
  const {user} = useUser();
  console.log(user);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [myFeed, setMyFeed] = useState([]);

    const fetchMyFeed = async () => {
      try {
        setError(null);
        setLoading(false);
        const data = await getPostByUserApi()
        console.log(data);
        setMyFeed(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    useEffect(() => {
      fetchMyFeed()
    }, [])
    return (
      <div className='w-full min-h-screen'>
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

export default User
