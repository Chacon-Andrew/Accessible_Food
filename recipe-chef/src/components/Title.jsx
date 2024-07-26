import React, { useState } from 'react'

function Title() {
    const [title, setTitle] = useState("NAME OF FOOD")

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <input type='text' style={{border: 'none', width: '45vw', height: '10vh', fontSize: '24px'}} value={title} onChange={e => setTitle(e.target.value)} />
        <div className="gcse-search" data-enableImageSearch="true" data-defaultToImageSearch="true" data-disableWebSearch={true}></div>
    </div>
  )
}

export default Title