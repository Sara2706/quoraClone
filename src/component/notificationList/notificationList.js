import './notificationList.css'
import { useContext } from 'react';
import Notification from '../notification/notification'
import NotificationData from '../../json/notification.json'
import { FilterValue } from '../context/NotificationFilterContext';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';

function NotificationList() {
    const value = useContext(FilterValue);
    const filterNotify = value.notificationFilter.toLowerCase();

    const notiData = () => {
        if (NotificationData.filter(data => data.type.toLowerCase().includes(filterNotify)).length === 0) {
            return (<div className='noCont'>
                <h1><NotificationsOffIcon className='noIcon' /></h1>
                <h4>No New Notifications</h4>
                <p>Notifications you received in the last 30 days will show up here.
</p>
            </div>)
        }
    }

    return (
        <>
            <div className='wrapper d-flex justify-content-between'>
                <h5>
                    Notification
                </h5>
                <div className='left d-flex justify-content-between'>
                    <p className='mx-1'>Mark All As Read</p><span className='mx-1'>.</span>
                    <a href='/notification' className='text-dark'>Settings</a>
                </div>
            </div>
            <div className='noti'>
                {
                    NotificationData.filter(data => data.type.toLowerCase().includes(filterNotify)).map(data => {
                        return (
                            <Notification data={data} key={data.notificationId}/>
                        )
                    })
                }
                {notiData()}
            </div>
        </>
    )
}

export default NotificationList