import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const User = (props) => {
  const [repos, setRepos] = useState([])
  const [error, setError] = useState(null)

  const { userName } = useParams()

  useEffect(async () => {
      props.onChange(userName)

      try {
          const userRepos = await axios.get(`https://api.github.com/users/${userName}/repos`)
          setRepos(userRepos.data)
      } catch (err) {
            setError(err.message)
      }  
  }, [userName])

  if(error) {
      return (
          <div>
              <p className='text-red'>{error}</p>
          </div>
      )
  }

  return (
    <div className='p-8 bg-gray-300 flex flex-col'>
        {repos.map((repo, i) => 
            <Link 
                to={repo.full_name}
                key={repo.full_name}
            >{i + 1}. {repo.name}</Link>    
        )}
    </div>
  )
}

User.propTypes = {}

export default User