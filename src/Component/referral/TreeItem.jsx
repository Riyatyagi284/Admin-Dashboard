import React, { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
// import ReceiptLong from '@mui/icons-material/ReceiptLong';
// import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

// const STYLE ={
    
// }

const TreeItem=({user,level=0})=> {
  const [opens,setOpens] = useState([])
  const listItemToggle=(id)=>{
    // if(opens.includes(id)){
    //   console.log("if block ....")
    //   let old_opens = opens
    //   old_opens.pop(id)
    //   setOpens(old_opens)
    //   //console
    // }else{
    //   console.log("else block ....")
    //   setOpens([...opens,id])
    // }

    setOpens((prevOpens)=>prevOpens.includes(id)
      ? prevOpens.filter((item)=>item !== id)
      : [...prevOpens,id]
      ) 
      
  }


  useEffect(()=>{
    console.log("user = ",user)
  },[])

  return (

    

      <List
        size="sm"
        sx={(theme) => ({
          // Gatsby colors
          '--joy-palette-primary-plainColor': '#8a4baf',
          '--joy-palette-neutral-plainHoverBg': 'transparent',
          '--joy-palette-neutral-plainActiveBg': 'transparent',
          '--joy-palette-primary-plainHoverBg': 'transparent',
          '--joy-palette-primary-plainActiveBg': 'transparent',
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-text-secondary': '#635e69',
            '--joy-palette-primary-plainColor': '#d48cff',
          },
          '--List-insetStart': `${21+level*16}px`,
          '--ListItem-paddingY': '0px',
          '--ListItem-paddingRight': '16px',
          '--ListItem-paddingLeft': `${21+level*16}px`,
          '--ListItem-startActionWidth': '0px',
          '--ListItem-startActionTranslateX': '-50%',
          [`& .${listItemButtonClasses.root}`]: {
            borderLeftColor: 'divider',
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
            borderLeftColor: 'currentColor',
          },
          '& [class*="startAction"]': {
            color: 'var(--joy-palette-text-tertiary)',
          },
        })}
      >

       
       {
        user?.map((usr,index)=>(

        
        
        <ListItem
          nested
          sx={{ my: 1 ,px:'21px'}}
          key={usr.id}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => listItemToggle(usr.id)}
            >
              {/* <KeyboardArrowDown
                sx={{ transform: opens.includes(user.id) ? 'initial' : 'rotate(-90deg)' }}
              /> */}
              {/* this KeyboardArrowDown icon not working  */}
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={{
                fontWeight: opens.includes(usr.id) ? 'bold' : undefined,
                fontSize:'1.2rem',
                color: opens.includes(usr.id) ? 'text.primary' : 'inherit',
              }}
            >
              {usr?.name}
            </Typography>
            <Typography component="span" level="body-xs" sx={{ ml: 1,fontSize:'1.2rem' }}>
              {usr.persons.length}
            </Typography>
          </ListItem>
          {opens.includes(usr.id) && (
            <List sx={{ '--ListItem-paddingY': '8px'}}>
                <ListItem>
                  <ListItemButton>
                    <TreeItem  user={usr.persons} level={level+1} />
                    </ListItemButton>
                </ListItem>
              
                  
               
            </List>
          )}
        </ListItem>

      ))
      }




        
      </List>
    
  );
}

export default TreeItem
