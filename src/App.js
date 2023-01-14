import { TextField, Box } from '@mui/material'
import React, { useState } from 'react'


function App() {
  let [val, setVal] = useState()

  return (
    <>
      <Box sx={{ borderRadius: 10, display: 'flex', justifyContent: 'center', marginTop: 5 }}>
        <TextField variant='standard' label='Add Todo' sx={{ width: '70%',  paddingY: 0 }} onChange={(e) => setVal(e.target.value)} />
      </Box>
    </>
  )
}

export default App