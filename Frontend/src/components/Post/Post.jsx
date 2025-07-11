import React from 'react'

function Post({post}) {
  return (
    <div className='w-full m-2 p-2 pb-3 border-2 rounded-md'>
        <h1 className='font-bold text-center text-2xl'>{post.title}</h1>
        <p className='text-right text-sm font-black'>
            {post.user?.name ? post.user?.name : null}
        </p>
        <p className='text-lg'>
            {post.description}
        </p>

    </div>
  )
}

export default Post
