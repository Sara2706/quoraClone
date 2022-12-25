import React,{useState} from 'react';
import './singleQuestion.css';
import { ThumbUp, ThumbDown, ContactSupport, Cached } from '@material-ui/icons'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';


function SingleQuestion({data}) {
    const [viewCont, setViewCont] = useState(false);
    return (
        <>
            <div className='quesBox rounded bg-white mt-2 mb-2 p-2 border'>
                <div className='d-flex'>
                    <div className='profile m-1'>
                        <img src={data.profile} alt='user profile' />
                    </div>
                    <div className='d-flex userCont'>
                        <div>
                            <h6>{data.name} <span className='text-primary mx-1' style={{ cursor: 'pointer' }}>Follow</span></h6>
                            <p>{data.workedAt}</p>
                        </div>
                        <div className='d-flex quesTopBtn'>
                            <button className='aa'><MoreHorizIcon /></button>
                            <button><CloseIcon /></button>
                        </div>
                    </div>
                </div>
                <h4>{data.title}</h4>
                <p>
                    {data.smallBody} 
                    {viewCont?
                    '':
                    <span style={{cursor:'pointer'}} className='text-primary' onClick={()=>setViewCont(true)}>View More...</span>}
                </p>
                {viewCont && <p>{data.body}</p>}
                <img src={data.img} className='quesImg' alt='error' />
                <div className='d-flex align-items-center mt-2'>
                    <div className='likesetup d-flex align-items-center'>
                        <div className='mx-2'>
                            <button className='setitems d-flex align-items-center btn'>
                                <ThumbUp />
                                <p className='m-1'>{data.like}</p>
                            </button>
                        </div>
                        <span className='likedivider'></span>
                        <div className='mx-2'>
                            <button className='setitems d-flex align-items-center btn'>
                                <ThumbDown />
                                <p className='m-1'>{data.dislike}</p>
                            </button>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <button className='setitems d-flex align-items-center btn'>
                            <ContactSupport />
                            <p className='m-1'>{data.comments}</p>
                        </button>
                    </div>
                    <div className='mx-2'>
                        <button className='setitems d-flex align-items-center btn'>
                            <Cached />
                            <p className='m-1'>{data.share}</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleQuestion