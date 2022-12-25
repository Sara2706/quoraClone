import './notification.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Notification({ data }) {

    return (
        <>
            <div className='notificationContainer' key={data.notificationId}>
                <div className='first p-1'>
                    <img src={data.profile} alt='' />
                </div>
                <div className='second'>
                    <p className='d-flex'>
                        <span>{data.name}</span><span> </span>
                        <span className='mx-1'>Posted in a {data.type} you might like .</span>
                        <span>{data.date}</span>
                    </p>
                    <div className='cont'>
                        <h3>{data.title}</h3>
                        <p>{data.body}</p>
                    </div>
                </div>
                <div className='third m-1 p-1'>
                    <button className='btn p-1 rounded-pill'><MoreHorizIcon /></button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Notification