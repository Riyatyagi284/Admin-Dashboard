import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import {TiGroupOutline} from "react-icons/ti"
const Groups = ({setGroup,groups}) => {
    const [active,setActive] = useState(1)


    const listItemHandler=(index,users)=>{
        setActive(index)
        setGroup(users)
    }

    

  return (
    <div className='card shadow-sm mt-5'>
        <div className="card-body">
            <h2>Groups</h2>
            <div className="group-box">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {
                    groups?.map((grp,index)=>(
                        <ListItem onClick={()=>listItemHandler(index,grp.users)} className={`cursor-pointer ${active==index?'bg-light':''}`}>
                            <ListItemAvatar>
                            <Avatar>
                                <TiGroupOutline size={20} />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<span className='fs-5' >{grp.name} ({grp.users.length})</span>} secondary={<span className='fs-6' >Jan 9, 2014</span>} />
                        </ListItem>
                    ))
                }



                

                <ListItem className={`cursor-pointer ${active==1?'bg-light':''}`}>
                    <ListItemAvatar>
                    <Avatar>
                        <TiGroupOutline size={20} />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<span className='fs-5' >Group 1 (24)</span>} secondary={<span className='fs-6' >Jan 9, 2014</span>} />
                </ListItem>

                <ListItem className={`cursor-pointer ${active==2?'bg-light':''}`}>
                    <ListItemAvatar>
                    <Avatar>
                        <TiGroupOutline size={20} />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<span className='fs-5' >Group 1 (24)</span>} secondary={<span className='fs-6' >Jan 9, 2014</span>} />
                </ListItem>

                <ListItem className={`cursor-pointer ${active==3?'bg-light':''}`}>
                    <ListItemAvatar>
                    <Avatar>
                        <TiGroupOutline size={20} />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<span className='fs-5' >Group 1 (24)</span>} secondary={<span className='fs-6' >Jan 9, 2014</span>} />
                </ListItem>

                <ListItem className={`cursor-pointer ${active==4?'bg-light':''}`}>
                    <ListItemAvatar>
                    <Avatar>
                        <TiGroupOutline size={20} />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<span className='fs-5' >Group 1 (24)</span>} secondary={<span className='fs-6' >Jan 9, 2014</span>} />
                </ListItem>

                <ListItem className={`cursor-pointer ${active==5?'bg-light':''}`}>
                    <ListItemAvatar>
                    <Avatar>
                        <TiGroupOutline size={20} />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<span className='fs-5' >Group 1 (24)</span>} secondary={<span className='fs-6' >Jan 9, 2014</span>} />
                </ListItem>
      </List>
            </div>
            <div className="text-end">
                            <a href="#" className='fs-5' >View All ...</a>
                            </div>
        </div>

    </div>
  )
}

export default Groups