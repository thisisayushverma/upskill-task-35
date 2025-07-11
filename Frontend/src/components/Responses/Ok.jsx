import React from 'react'

function Ok({ title }) {
    return (
        <div className='border-2 p-10 rounded-md '>
            <h1 className='text-4xl text-center'>✅</h1>
            <h1 className='text-2xl text-center font-bold text-green-600'>
                {title}
            </h1>
        </div>
    )
}

export default Ok
