import  {useRef, useContext} from 'react';
import { FilterValue } from '../context/NotificationFilterContext';

function NotifyFliter() {
    const value = useContext(FilterValue);
    let inputRef = useRef();

    const filterNotifyData = (e) => {
        for (let i = 0; i < inputRef.current.children.length; i++) {
            inputRef.current.children[i].classList.remove('alert-danger');
        }
        e.target.classList.add('alert-danger');
        if(e.target.innerText === 'All Notification') {
            value.setNotificationFilter('');
        }else{
            value.setNotificationFilter(e.target.innerText)
        }
        
    }
    return (

        <>
            <div className='homeleftbar'>
                <h6 className='h5'>Filters</h6>
                <hr />
                <ul className='list-unstyled' ref={inputRef}>
                    <li className='rounded alert-danger' onClick={filterNotifyData}>
                        All Notification
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                        Stories
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                        Question
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                        Spaces
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                        People updates
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                        Comments and mentions
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                        Up vote
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                        Your content
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                       Your profile
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                        Announcements
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                       Earnings
                    </li>
                    <li className='rounded' onClick={filterNotifyData}>
                        Subscribtion
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NotifyFliter