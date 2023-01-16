import './App.css'
import React, { useState } from 'react'
import { TextField, Box, Typography, Checkbox } from '@mui/material'
import SMButton from './components/SMButton'
import 'font-awesome/css/font-awesome.min.css';


function App() {
  let [val, setVal] = useState()
  let [indexNum, setIndexNum] = useState()
  let [todos, setTodos] = useState([])
  let [btn, setBtn] = useState(false)

  let add = () => {

    if (indexNum == null) {
      let newTodo = {
        text: val,
        isChecked: false,
      }
      setTodos([...todos, newTodo])
      setVal('')
    }
    else {
      todos[indexNum] = {
        text: val,
        isChecked: false
      }
      setVal('')
      setTodos([...todos])
      setIndexNum(null)
      setBtn(false)
    }
  }

  let edit = (e, i) => {
    console.log(i)
    setBtn(true)
    setVal(e.text)
    setIndexNum(i)
  }

  let deleted = (i) => {
    let del = todos.filter((e, index) => {
      return index !== i
    })
    setTodos(del)
  }

  let deleteAll = () => {
    setTodos([])
    setVal('')
  }

  let check = (bool, e, i) => {
    console.log(bool)
    todos[i] = {
      text: e.text,
      isChecked: bool,
    }
    setTodos([...todos])
  }


  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', bgcolor: '#243763' }}>
        <Box sx={{ width: '40%', bgcolor: 'white' }}>

          {/* TextField and Add Button  */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
            <TextField value={val} variant='standard' label='Add Todo' sx={{ width: '70%' }} onChange={(e) => setVal(e.target.value)} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <i onClick={add} className={btn ? "fa fa-pencil" : "fa fa-plus"} style={{ color: 'green', fontSize: 25 }}></i>
              {/* <img alt='Add' src={{ uri: 'https://cdn-icons-png.flaticon.com/128/1688/1688988.png' }} style={{ height: 25, width: 25 }} /> */}
              {/* <SMButton onClick={update} value='Update' style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', fontSize: 22, border: 'none', borderRadius: 5, marginLeft: 10 }} /> */}
            </Box>
          </Box>


          {/* Todos Count */}
          {todos.length > 0 ? (
            <>
              <Typography sx={{ fontSize: 30, fontWeight: 'bold', marginTop: 3, textAlign: 'center', color: '#243763' }}>{todos.length}</Typography>
            </>
          )
            :
            <Typography sx={{ fontSize: 30, fontWeight: 'bold', marginTop: 3, textAlign: 'center', color: '#243763' }}>No Todos to display</Typography>
          }


          {/* All Todos */}
          <Box sx={{ marginTop: 5 }}>
            {todos && todos.length > 0 && todos.map((e, i) => (
              <Box key={i} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
                <Box className={e.isChecked ? 'done' : ''} sx={{ borderBottom: '1px solid black', width: '70%', display: 'flex', alignItems: 'center' }}>
                  <Checkbox checked={e.isChecked} onClick={(mark) => check(mark.target.checked, e, i)} />
                  <Typography sx={{ width: '90%' }}>{e.text}</Typography>
                  <Box sx={{ width: '10%', display: 'flex', justifyContent: 'flex-end' }}>
                    <i onClick={() => edit(e, i)} className="fa fa-pencil" style={{ color: '#439A97', fontSize: 25, marginRight: 25 }}></i>
                    <i onClick={() => deleted(i)} className="fa fa-trash" style={{ color: 'red', fontSize: 25 }}></i>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>


          {/* Delete Button */}
          <Box sx={{ width: '40%', display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 15 }}>
            {todos.length > 0 ?
              <SMButton onClick={deleteAll} value='Delete All' style={{ padding: '10px 0px', backgroundColor: 'crimson', color: 'white', fontWeight: 'bold', fontSize: 22, width: '80%', border: 'none', borderRadius: 5 }} />
              :
              ''
            }
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App