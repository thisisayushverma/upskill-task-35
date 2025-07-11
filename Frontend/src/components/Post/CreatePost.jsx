import React, { useState } from 'react'
import { createPostApi } from '../../api/post.api.js';
import Ok from '../Responses/Ok.jsx';

function CreatePost() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(false);



    const handleCreatePost = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const description = e.target[1].value;

        try {
            setResponse(null);
            setLoading(true);
            setError(null);
            const data = await createPostApi({ title, description });
            setLoading(false);
            console.log(data);
            setResponse(true);
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <form onSubmit={handleCreatePost} className='border-2 w-[50vw]  flex flex-col p-4 rounded-md' >
                {
                    response ?
                        <Ok title={"Post Created Successfully"} />
                        :
                        (
                            <div className='w-full h-full'>
                                <label className='m-2'>
                                    <p className='text-xl font-bold m-0'>Title :</p>
                                    <input type='text' placeholder='Title....' className='border w-full rounded-md text-xl font-bold p-2 my-1' />
                                </label>
                                <label className='m-2 '>
                                    <p className='text-xl font-bold m-0'>Description:</p>
                                    <textarea placeholder='Description....' className='border w-full min-h-[200px] resize-y rounded-md text-xl p-2 my-1' />
                                </label>
                                {
                                    error && <p className='text-red-500 font-bold'>{error}</p>
                                }
                                {
                                    loading && <p className='text-blue-500 font-bold'>Loading...</p>
                                }
                                <button className='bg-blue-500 w-full text-white p-2 rounded-md text-xl cursor-pointer my-2 font-bold'>
                                    Create Post
                                </button>
                            </div>

                        )
                }
            </form>
        </div>
    )
}

export default CreatePost
