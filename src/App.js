import React from 'react';
import Menu from './component/Menu'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const App = () => {
  const [todos, setTodos] = React.useState([])
  const [text, setText] = React.useState('')

  const addData = () => {
    setTodos([...todos, text])
  }

  const handleClick = () => {
    addData()
  }

  return (
    <div >
      <Menu />
      <br />
      <div>
        <TextField id="outlined-basic" label="Add note ..." variant="outlined" onChange={(event) => setText(event.target.value)} />
        <Button variant="outlined" onClick={handleClick}>Add</Button>

        <ul> {
          todos.map((todo, index) => <li key={index}>{todo}</li>)

        }
        </ul>
      </div>
    </div >
  )
}

export default App