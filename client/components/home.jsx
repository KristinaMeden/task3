import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Header from './header';
import Repository from './repository';
import Search from './search';
import User from './user';

const Home = () => {

  const [userName, setUserName] = useState('')
  const [repoName, setRepoName] = useState('')

  const userNameChange = (value) => {
    setUserName(value)
    setRepoName('')
  }

  const repoNameChange = (value) => {
    setRepoName(value)
  }

  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header repo={repoName} username={userName} />}
      <div className='flex justify-center items-center h-screen'>
        <Switch>
          <Route path="/" exact component={() => <Search />} />
          <Route path="/:userName" exact component={()=> <User onChange={userNameChange} />} />
          <Route path="/:userName/:repositoryName" exact component={()=> <Repository onChange={repoNameChange} />} />
        </Switch>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
