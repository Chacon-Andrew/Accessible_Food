import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function Ingredients() {
    const [images, setImages] = useState([])

    const handleImageDrop = (e, i) => {
        const newImages = [...images]
        newImages[i] = e
        setImages(newImages)
    }

    const handleImageAdd = () => {
        const newImages = [...images]
        newImages.push("")
        setImages(newImages)
    }

    const handleImageRemove = (i) => {
        const newImages = images.filter((e, index) => index !== i)
        setImages(newImages)
    }

  return (
    <div >
        <Grid container spacing={2} columns={12}>
            {images.map((element, index) => {
                return(
                    <Grid item xs={12} sm={3} key={index}>
                        <div onDragOver={e => e.preventDefault()} onDrop={e => handleImageDrop(e.dataTransfer.mozSourceNode.src, index)} style={{padding: '1em', backgroundColor: 'gray', display: 'flex', flexDirection: 'column'}}>
                            <div style={{position: 'relative'}}>
                                <IconButton onClick={() => handleImageRemove(index)}><CloseIcon /></IconButton>
                            </div>
                            <img src={element} alt='Drag in Ingredient image' />
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

export default Ingredients