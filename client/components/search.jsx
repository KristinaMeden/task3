import React, { useState } from 'react'
import  { history } from '../redux' 

const Search = () => {
  const [username, setUsername] = useState('');

  const handlerOnChange = (e) => {
    setUsername(e.target.value);
  }

  const handlerSend = () => {
    if(username !== '') {
      history.push(`/${username}`);
    }   
  }

  return (
    <div>
      <label htmlFor="input-field">Введите имя пользователя: </label>
      <input 
        type='text' 
        id="input-field" 
        className='p-[5px] border mx-[10px]' 
        value={username} 
        onChange={handlerOnChange} />
      <button 
        id='search-button' 
        type='button' 
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={handlerSend}
        >
          Получить
      </button>
    </div>
  )
}

Search.propTypes = {}

export default Search
