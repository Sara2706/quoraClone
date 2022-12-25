import './notification.css';
import React, { useState } from 'react'
import NotifyFliter from '../../component/notifyFilter/notifyFliter.js'
import NotificationList from '../../component/notificationList/notificationList';
import {FilterValue} from '../../component/context/NotificationFilterContext'

function Notification() {
  const [notificationFilter, setNotificationFilter] = useState('');
  return (
    <>
      <div className='bg-light d-flex justify-content-center'>
        <FilterValue.Provider value={{ notificationFilter, setNotificationFilter }}>
          <div className='notifContentWrap'>
            <NotifyFliter />
            <div className='notifCenterConts'>
              <NotificationList />
            </div>
            <div className='notifRightCont'>

            </div>
          </div>
        </FilterValue.Provider>
      </div>
    </>
  )
}

export default Notification