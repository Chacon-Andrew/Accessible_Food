import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function Tools() {
    const [images, setImages] = useState([])

    const handleImageDrop = (e, i) => {
        const newImages = [...images]
        newImages[i].img = e
        setImages(newImages)
    }

    const handleImageAdd = () => {
        const newImages = [...images]
        newImages.push({
            img: "",
            name: ""
        })
        setImages(newImages)
    }

    const handleImageRemove = (i) => {
        const newImages = images.filter((e, index) => index !== i)
        setImages(newImages)
    }

    const handleNameAdd = (e, i) => {
        const newImages = [...images]
        newImages[i].name = e
        setImages(newImages)
    }

  return (
    <div >
        <Grid container spacing={2} columns={12}>
            {images.map((element, index) => {
                return(
                    <Grid item xs={12} sm={3} key={index}>
                        <div onDragOver={e => e.preventDefault()} onDrop={e => handleImageDrop(e.dataTransfer.mozSourceNode.src, index)} style={{padding: '1em', backgroundColor: '#D9D9D9', display: 'flex', flexDirection: 'column', gap: '1em'}}>
                            <div style={{position: 'relative'}}>
                                <IconButton onClick={() => handleImageRemove(index)}><CloseIcon /></IconButton>
                            </div>
                            <input type='text' value={element.name} onChange={e => handleNameAdd(e.target.value, index)} style={{border: 'none', fontSize: '24px', textAlign: 'center', backgroundColor: '#D9D9D9'}} placeholder='Enter Text Here'/>
                            <img src={element.img} alt='Drag in Ingredient image' />
                        </div>
                    </Grid>
                )
            })}
            <Grid item xs={12} sm={3}>
                <IconButton onClick={() => handleImageAdd()}><AddIcon /></IconButton>
            </Grid>
        </Grid>
    </div>
  )
}

export default Tools