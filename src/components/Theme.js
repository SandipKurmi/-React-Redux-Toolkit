import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {changeTheme} from '../features/theme'

const Theme = () => {
    const dispatch = useDispatch()

    const [color, setColor] = useState("")
  return (
    <div>
        <input type="text" onChange={(e) => setColor(e.target.value)} /><br />
        <button 
        onClick={() => {
            dispatch(changeTheme(color))
        }}
        >Change Color</button>
    
    </div>
  )
}

export default Theme