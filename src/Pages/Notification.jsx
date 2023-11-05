import React, { useState } from 'react'
import Templates from '../Component/notification/Templates'
import Post from '../Component/notification/Post'
import Notifications from '../Component/notification/Notifications'
import Groups from '../Component/notification/Groups'
import SelectUser from '../Component/notification/SelectUser'
import { NOTIFICATION_TEMPLATES,USERS,USER_GROUPS } from '../assets/constants'

const Notification = () => {

  const [templates,setTemplates] = useState(NOTIFICATION_TEMPLATES)
  const [addTemplate,setAddTemplate] = useState(false)
  const [groups, setGroups] = useState(USER_GROUPS)
  const [users,setUsers] = useState(USERS)
  const [notification,setNotification] = useState({
    title:"",
    message:"",
    users:[]
  })

  const addTemplateHandler=()=>setAddTemplate(!addTemplate)
  const setTitle=(title)=>{
    setNotification({...notification,title:title})
  }

  const setMessage=(message)=>{
    setNotification({...notification,message:message})
  }

  const setTemplate=(title,message)=>{
    setNotification({...notification,title:title,message:message})
  }

  const setGroup=(users)=>{
    setNotification({...notification,users:users})
  }

  const setNotificationUsers=(users)=>{
    setNotification({...notification,users:users})
  }

  const sendNotificationHandler=()=>{
    if(!notification.title || !notification.message || notification.users.length<=0 ){
      console.log("all fields are required")
      return
    }

    if(addTemplate){
      setTemplates([{ title:notification.title,message:notification.message}, ...templates ])
      console.log("adding template ....")
    }
    console.log(notification)
  }


  return (
    <div className='mx-4'>
        <div className="M-login-header">
          <h2>Notification</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/Notification</span>
          </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 ">
                    <Templates templates={templates} setTemplate={setTemplate} />
                    <Groups setGroup={setGroup} groups={groups} />

                </div>
                <div className="col-md-6 bg-white p-4 ">
                  <h3 className='mb-3'>NEW NOTIFICATION</h3>
                    <SelectUser users={users} setUsers={setGroup} />
                    <Post notification={notification} setTitle={setTitle} setMessage={setMessage} sendNotification={sendNotificationHandler} addTemplate={addTemplate} addTemplateHandler={addTemplateHandler}  />
                    
                </div>
                <div className="col-md-3">
                    <Notifications setTemplate={setTemplate} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification