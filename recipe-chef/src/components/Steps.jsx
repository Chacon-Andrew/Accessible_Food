import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

function Steps() {
    const [steps, SetSteps] = useState([])

    const handleStepAdd = () => {
        const newSteps = [...steps]
        newSteps.push([])
        SetSteps(newSteps)
    }

    const handleImageDrop = (e, i, index) => {
        const newSteps = [...steps]
        newSteps[i][index].img = e
        SetSteps(newSteps)
    }

    const handleImageRemove = (i, index) => {
        const newSteps = [...steps]
        newSteps[i] = steps[i].filter((e, ind) => ind !== index)
        SetSteps(newSteps)
    }

    const handleImageAdd = (i) => {
        const newSteps = [...steps]
        newSteps[i].push({
            img: "",
            name: ""
        })
        SetSteps(newSteps)
    }

    const handleNameAdd = (e, i, index) => {
        const newSteps = [...steps]
        newSteps[i][index].name = e
        SetSteps(newSteps)
    }

    const handleRemoveStep = () => {
        const newSteps = [...steps]
        newSteps.pop()
        SetSteps(newSteps)
    }

  return (
    <div>
        <Grid container spacing={2} padding={'1em'}>
            {
                steps.map((e, i) => {
                    return(
                        <Grid item container flexDirection={'row'} columns={12}>
                            <Grid item sm={1}><h1>{i + 1}</h1></Grid>
                            <Grid container item sm={12} columns={15} alignItems={'center'} spacing={4}>
                                {
                                    e.map((element, index) => {
                                        return(
                                            <Grid item xs={12} sm={4}>
                                                <div onDragOver={e => e.preventDefault()} onDrop={e => handleImageDrop(e.dataTransfer.mozSourceNode.src, i, index)} style={{padding: '1em', backgroundColor: '#D9D9D9', display: 'flex', flexDirection: 'column', gap: '1em'}}>
                                                    <div style={{position: 'relative'}}>
                                                        <IconButton onClick={() => handleImageRemove(i, index)}><CloseIcon /></IconButton>
                                                    </div>
                                                    <TextField type='text' multiline value={element.name} onChange={e => handleNameAdd(e.target.value, i, index)} style={{border: 'none', fontSize: '24px', textAlign: 'center', backgroundColor: '#D9D9D9', textWrap: 'nowrap', height: '100%'}} placeholder='Enter Text Here'/>
                                                    <img src={element.img} alt='Drag in Step image' />
                                                </div>
                                            </Grid>
                                        )
                                    })
                                }
                                <Grid item xs={12} sm={4}>
                                    <IconButton onClick={() => handleImageAdd(i)}><AddIcon /></IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
        <div>
            <IconButton onClick={() => handleStepAdd()}><AddIcon /></IconButton>
            <IconButton onClick={() => handleRemoveStep()}><CloseIcon /></IconButton>
        </div>
    </div>
  )
}

export default Steps