import React from 'react'
import Profile from './components/Profile';
import Login from './components/Login';
import Theme from './components/Theme';
import { useSelector } from 'react-redux'


const App = () => {
  const theme = useSelector((state) => state.theme.value)
 
  return (  

    <div className='App' align="center" style={{backgroundColor: theme.color}}>
      <Theme />
      <Profile />
      <Login />
    </div>
  )
}

export default App