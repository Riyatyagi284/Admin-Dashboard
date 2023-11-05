
import { FormControl, FormHelperText, FormLabel, Textarea, Input, Button } from '@mui/joy'
import { Checkbox, Chip, FormControlLabel, Stack } from '@mui/material'

import React, { useState } from 'react'

const Post = ({notification,setTitle,setMessage,sendNotification,addTemplate, addTemplateHandler}) => {
  
  
  

  return (
    <div className='card mt-3'>
        <div className="card-body shadow-sm">
            <h4>Notification</h4>
            <div>
                <form action="">
                    <div className="" style={{}} >
                        
                        {/* <Input  placeholder='Title' variant="outlined" sx={{width:'100%',fontSize:'1.5rem'}} />
                       
                        <Textarea minRows={3} /> */}

                        <FormControl className="mb-2">
                        <Textarea onChange={(event)=>setTitle(event.target.value)} value={notification.title} minRows={2} sx={{fontSize:'1.5rem'}} placeholder="Notification Title" variant="outlined" />
                        </FormControl>
                        <FormControl className="mb-2">
                          <Textarea onChange={(event)=>setMessage(event.target.value)} value={notification.message} className="shadow-none" sx={{fontSize:'1.5rem',}} placeholder="Notification Text" minRows={6} />

                        </FormControl>
                        <div className="">
                          <div className="card-body">
                            <Stack direction="row" spacing={1}>
                              {
                                notification?.users[0] && (<Chip sx={{fontSize:"1.2rem"}} label={notification?.users[0]?.name} />)
                              }

                              {
                                notification?.users[1] && (<Chip sx={{fontSize:"1.2rem"}} label={notification?.users[1]?.name} />)
                              }

                              {
                                notification?.users[2] && (<Chip sx={{fontSize:"1.2rem"}} label={`+ ${notification?.users?.length-2}`} />)
                              }
                              
                              
                              
                            </Stack>
                          </div>
                        </div>
                        <div className='text-end'>
                        <FormControlLabel className='fs-5' control={<Checkbox checked={addTemplate} onChange={addTemplateHandler} />} label="Save as template" />
                        <Button onClick={sendNotification} variant="soft" className='fs-5' >Send</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Post