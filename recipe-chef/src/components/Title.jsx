import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'
import TextField from '@mui/material/TextField';

function Title() {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
        <TextField type='text' multiline sx={{border: 'none', fontSize: '24px', justifyContent: 'center', alignItems: 'center'}} value={title} onChange={e => setTitle(e.target.value)} placeholder='Enter Text Here'/>
        <div onDragOver={e => e.preventDefault()} onDrop={e => {setImage(e.dataTransfer.getData("text"))}} style={{padding: '1em', backgroundColor: '#D9D9D9', display: 'flex', flexDirection: 'row'}}>
          <img src={image} alt='Drag in food image' style={{width: '95%', height: '200px'}}/>
          <div style={{position: 'relative'}}>
            <IconButton onClick={() => setImage("")}><CloseIcon /></IconButton>
          </div>
        </div>
    </div>
  )
}

export default Title