import React, { useState } from 'react'

import {BsPeople} from 'react-icons/bs'
import { NOTIFICATIONS } from '../../assets/constants'



const Notifications = ({setTemplate}) => {
    const [notifications,setNotifications] = useState(NOTIFICATIONS)
    const [active,setActive] = useState(1)

    const notificationHandler=(index,temp)=>{
        setActive(index)
        setTemplate(temp.title,temp.message)
    }

  return (
    <div className='card shadow-sm'>

        <div className="card-body">
            <h2>Notifications</h2>
            <div className='notification-box p-2'>
                {
                    notifications.map((noti,index)=>(
                        <div onClick={()=>notificationHandler(index,noti.notification)} className={`cursor-pointer notification ${active==index?'border m-1 p-2':''}`} key={index}>
                <div className="row me-0">
                    <div className="col-sm-9">
                        <h4>{noti.notification.title}</h4>
                        <p className='fs-5 text-secondary'>{noti.notification.message}</p></div>
                    <div className="col-sm-3">
                        <p className='fs-5 mb-0 text-secondary'>Today, 9:52pm</p>
                        <p className='fs-6 text-secondary'><BsPeople className='fs-5' />(24)</p>

                    </div>

                </div>
                <hr className='bg-secondary' />
                </div>

                    ))
                }
 
            </div>

            <div className="text-end">
                            <a href="#" className='fs-5' >View All ...</a>
                            </div>

        </div>

    </div>
  )
}

export default Notifications