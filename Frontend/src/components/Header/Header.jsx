import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='w-full p-3'>
            <ul className='flex gap-3 justify-center'>
                <li><NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : ''} to='/'>Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : ''} to='/user'>My Feed</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : ''} to='/post'>Create Post</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
