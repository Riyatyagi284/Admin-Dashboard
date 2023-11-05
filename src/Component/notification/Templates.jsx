import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import "../../assets/css/notification.css"

const Templates = ({templates ,setTemplate}) => {
    const [active , setActive] = useState(1)

    const templateHandler=(index,title,message)=>{
        setActive(index)
        setTemplate(title,message)
    }



  return (
    <div className="card rounded-3 shadow-sm">
                        <div className="card-body">
                            <h2>Templates</h2>
                            <div className='template-box'>

                            <List sx={{maxWidth: 360, bgcolor: 'background.paper' }}>
                                {
                                    templates.map((temp,index)=>(
                                        <Box onClick={()=>templateHandler(index,temp.title,temp.message)} className={`cursor-pointer ${active==index?'bg-light':''}`} >
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                    className='fs-1'
                                    primary={
                                        <Typography
                                            className='fs-2'
                                            variant='h6'>
                                                {temp?.title}
                                        </Typography>
                                    }
                                    secondary={
                                           <p className='fs-4'>{temp?.name} <span className='fs-5'>
                                           - {temp?.message}</span>
                                        </p> 
                                    }
                                    />
                                
                                </ListItem>
                                <Divider sx={{width:"100%"}} variant="" component="li" />
                                </Box>
                                    ))
                                }
                                
                            </List>
                            </div>
                            <div className="text-end">
                            <a href="#" className='fs-5' >View All ...</a>
                            </div>
                        </div>
    </div>
  )
}

export default Templates