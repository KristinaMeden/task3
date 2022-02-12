import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <nav className='flex justify-between align-center p-8 bg-gray-400 mb-8'>
            <div id='repository-name'>Name of Repository: {props.repo || props.username}</div>
            <div className='flex'>
                <Link to="/" id='go-back' className='mx-[5px]'>Go to Main</Link>
                <Link to={`/${props.username}`} id='go-repository-list' className='mx-[5px]'>Go to repos</Link>
            </div>
        </nav>
    )
}

Header.propTypes = {
}

export default Header
