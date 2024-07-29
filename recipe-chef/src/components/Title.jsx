import React, { useState } from 'react'

function Title() {
    const [title, setTitle] = useState("NAME OF FOOD")
    const [image, setImage] = useState("")

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <input type='text' style={{border: 'none', width: '20vw', height: '10vh', fontSize: '24px'}} value={title} onChange={e => setTitle(e.target.value)} />
        <div onDragOver={e => e.preventDefault()} onDrop={e => setImage(e.dataTransfer.mozSourceNode.src)} style={{width: '20vw', height: '10vh', backgroundColor: 'gray'}}><img src={image} alt='food' /></div>
    </div>
  )
}

export default Title