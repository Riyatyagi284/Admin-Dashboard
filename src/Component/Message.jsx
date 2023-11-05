import React, { useState } from 'react'
import { isImage } from '../services/chat-service'
import { Box, Modal } from '@mui/material';
import { IMAGE_PREVIEW_STYLE } from '../assets/constants';
import {AiOutlineFile} from "react-icons/ai"
import {BsDownload} from "react-icons/bs"

const Message = ({message}) => {

    const [open, setOpen] = useState(false);
    const [image,setImage] = useState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    const showImage=(url)=>{
        setImage(url)
        handleOpen()

    }

//${message.user.role=="agent"?'float-right':''}
//message.user.role=="agent"?{float:"right"}:{}

  return (
    <div className='m-2'>
          <div className='card-body'>
            <div className={`${message.user.role=="agent"?'message-container':''}`} style={{}}>
                <div className='mb-2' style={{}} >
                <div className='d-flex'>
                  <div className={`${message.user.role=='agent'?'bg-success':'bg-secondary'} rounded-circle p-3 text-white text-center`} style={{height:"40px",width:"40px"}} >
                    <h2 >{message?.user?.name?.substring(0,1)}</h2>
                  </div>
              
             
                  <div className='d-flex align-items-center py-2'>
                  
                  <h2 style={{marginLeft:"5px"}}>{message?.user?.name}</h2>
                  <h4 style={{marginLeft:"7px",fontStyle:"italic",fontWeight:"normal"}}>{message?.time}</h4>
                  </div>
                </div>
                </div>               

                <div className={`${message.user.role=='agent'?'margin-left-150':'margin-right-150'}`} >
                {
                    message.text && (<p className='fs-4'> {message?.text}</p>)
                }

                {
                    message.file && (<div>
                        {
                          isImage(message.file.URL)? (
                            <a href="#">
                              <img onClick={(event)=>showImage(event.target.src)} className='pe-auto' width={80} src={message?.file?.URL} alt="Image file" />
                            </a>
                          ): (
                            <AiOutlineFile size={40} />
                          )

                        }
                        
                    <a className='p-2' href={message.file.URL} download >
                        <BsDownload size={20} />
                    </a>  
                    </div>)
                }
                
              </div>

              </div>
          </div>

          <Modal
        open={open}
        onClose={()=>handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={IMAGE_PREVIEW_STYLE}>
          <img width={400} src={image} alt="image" />
          <div className="container p-2 text-center">
          <a className='p-2' href={image} download >
                        <BsDownload size={20} />
          </a> 
          </div>
          
        </Box>
      </Modal>

    </div>
  )
}

export default Message