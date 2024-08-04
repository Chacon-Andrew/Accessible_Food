import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'

function Title() {
    const [title, setTitle] = useState("NAME OF FOOD")
    const [image, setImage] = useState("")

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
        <input type='text' style={{border: 'none', width: '20vw', height: '10vh', fontSize: '24px'}} value={title} onChange={e => setTitle(e.target.value)} />
        <div onDragOver={e => e.preventDefault()} onDrop={e => setImage(e.dataTransfer.mozSourceNode.src)} style={{padding: '1em', backgroundColor: 'gray', display: 'flex', flexDirection: 'column'}}>
          <div style={{position: 'relative'}}>
            <IconButton onClick={() => setImage("")}><CloseIcon /></IconButton>
          </div>
          <img src={image} alt='Drag in food image' />
        </div>
    </div>
  )
}

export default Title