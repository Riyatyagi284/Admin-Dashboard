import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/css/Chats.css'
import {GrAttachment,GrDocumentVerified} from 'react-icons/gr'
import {BsSend} from 'react-icons/bs'
import {MdCall,MdMarkEmailRead, MdMobileFriendly} from 'react-icons/md'
import { CHAT } from '../assets/chat'
import {HiOutlineMail} from "react-icons/hi"
import {CiClock2} from "react-icons/ci"
import {GiCheckMark} from "react-icons/gi"
import {AiFillStar} from "react-icons/ai"

import Message from './Message'
import { Box, Button, FormControl, Input, InputAdornment, InputLabel, Modal, listItemButtonClasses } from '@mui/material'
import { Header } from 'antd/es/layout/layout'
import { IMAGE_PREVIEW_STYLE } from '../assets/constants'
import Query from './Query'




const UserChats = ({userId}) => {

  const [chat,setChat]= useState(CHAT.messages)
  const [open, setOpen] = React.useState(false);
  const [selectedFile,setSelectedFile]= useState()
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);setSelectedFile("")};
  const [message, setMessage] = useState({
    user:{name:"Agent 1",role:"agent"},
    date: "4 Sep 2023",
    time:"4:10 PM",
    text:""
  })

  let msgDate =""

  const scrollToBottom=()=>{
    let msgBox = document.querySelector(".message-box")
    setTimeout(() => {
      msgBox.scrollTop = msgBox.scrollHeight;
  }, 0);
}

  useEffect(()=>{
    setChat(CHAT.messages)
  },[])

  const sendMessage=()=>{
    
    console.log(message)
    setChat([...chat,{...message,file:undefined}])
    scrollToBottom()

  }

  const handleFileChange=(event)=>{
    setSelectedFile(event.target.files[0])
    handleOpen()
  }

  const markAsSolved=()=>{
    setChat([...chat,{query:{status:"solved",rating:0},date:"3 Sep 2023",time:"02:00 PM",user:{name:"User 1",role:"user"}}])
    scrollToBottom()
  }

  useEffect(()=>{
    
  },[message])

  const sendFile=()=>{

    let textMessage= document.querySelector("#text-message").value

    handleClose()
    let msg ={...message,text:textMessage, file:{URL:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg"}} 
    setChat([...chat,msg])
    scrollToBottom()
    
  


    
    // let form = document.getElementById("message-form")
    // let formData = new FormData(form)

    // let inputFile = formData.get("attach_file")
    // console.log("file handler")
    
    //   console.log("file name "+inputFile.name+"file type +"+inputFile.type +" url ="+fileURL)

  }


  return (
    <div className='border border-gray'>

      <div className="chat-header card">
        <div className="card-body">
        <div className="row">
          <div className="col-sm-1">
            <div className='bg-secondary rounded-circle p-3 text-white text-center' style={{height:"40px",width:"40px"}} >
                    <h2 >{message?.user?.name?.substring(0,1)}</h2>
            </div>
          </div>
          <div className="col-sm-5">
          <h2>User Name {userId}</h2>
          <div className="flex">
           <a className='fs-5' href="#"> <MdCall className='fs-3' /> +91 8285482825</a>
          <a className='fs-5' href="#"> <span className='mx-2'> | </span> <HiOutlineMail className='fs-3' />  ermaanish@gmail.com</a>
          </div>
          </div>
          <div className="col-sm-3 my-auto">
          <Button onClick={markAsSolved} variant="outlined" color='secondary' style={{borderColor:"red"}}>Mark As Resolved</Button>
          </div>
          <div className="col-sm-3">
            
            
            <a className='fs-5'><CiClock2 className='fs-3' /> last seen Aug 17, 2023</a>
            <div className='d-flex text-align-center mt-2'>
                <MdMarkEmailRead className='fs-3 ' />
                <span className='fs-4 mx-4'> | </span>

                <MdMobileFriendly className="fs-3" />
                <span className='fs-4 mx-4'> | </span>
                <GrDocumentVerified className='fs-3 text-success' />

            </div>
          
          </div>
        </div>
        </div>

      </div>

      <div className='card message-box'>

        


        {
          
          chat.map((obj,key)=>{
            let item = null
            let date =null
            if(msgDate !=obj.date){
              date=(<div className='date-box mx-3'><hr /><span > {msgDate}</span></div>) 
              msgDate = obj.date
            }
            if(obj.query){
              item = <Query time={obj.time} rating={obj.query.rating} status={obj.query.status} />
            }else{
              item = <Message message={obj} key={key} />
            }    
            return (<>{date} {item} </>)
            
        })
        }

        
        


      </div>

      <div className='card'>
        <div className="card p-4 ">
        <form encType='multipart/form-data' method="post" id="message-form" name="message-form" >
          <textarea style={{paddingRight:"100px"}} onChange={(event)=>setMessage({...message,'text':event.target.value})} placeholder='Type your message here ...' className='form-control text-box rounded-pill pr-5' name="" id="" cols="5" rows="1"></textarea>
          
          
          <div className='text-box-buttons flex align-items-center'>
          <input onChange={handleFileChange} type="file" name="attach_file" id="attach_file" hidden />
          < label  for="attach_file" ><GrAttachment className='cursor-pointer'   size={25} /></label>
          <a onClick={()=>sendMessage()} style={{marginLeft:"10px"}} className='pe-auto p-3 text-center rounded-circle bg-primary'>
          <BsSend color='white' size={25} />
          </a>
          
          </div>
        </form>
        </div>

      </div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={IMAGE_PREVIEW_STYLE}>

          {
            selectedFile && (
              <div className='container text-right'>
                {
                  selectedFile.type.startsWith("image/")?(
                    <img width={400}  src={URL.createObjectURL(selectedFile)} alt=" File Preview" />
                  ) : (
                    <iframe 

                    
                    width={'600'}
                    height={400}
                    style={{overflow:"hidden"}}
                    
                    title='File Preview'
                    src={URL.createObjectURL(selectedFile)}>

                    </iframe>
                  )
                }
                <br />
                
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="text-message">Write your message here ...</InputLabel>
          <Input
            id="text-message" name="text-message"

            
          />
        </FormControl>
               
                {/* <div class="form-group" style={{width:"100% !important"}}>
                  <input id='text-message' name='text-message' style={{width:"100% !important"}} type="text" class="form-control" placeholder="Write your message here ..." />
                </div> */}
            
                
                <div className="container-fluid text-center">
               
                <Button onClick={sendFile} variant='contained' className='mt-2 text-right'> Send File</Button>
                
                </div>
              </div>
            )
          }
          
          
        </Box>
      </Modal>


      
      
    </div>
  )
}

export default UserChats




//https://github.com/optivisioinfotech/Whishyo-Panel.git