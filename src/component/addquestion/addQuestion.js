import React, { useState } from 'react';
import './addquestion.css';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PeopleIcon from '@mui/icons-material/People';

function AddQuestion(props) {
  const [addQues, setAddQues] = useState(true);


  return (props.trigger) ? (
    <>
      <div className='bg-bark fullWidth' onClick={() => props.setTrigger(false)}>

      </div>
      {addQues ?
        <div className='quesCcont'>
          <div className='quesTop'>
            <div className='quesHeadClose'>
              <button className='closeBtn' onClick={() => props.setTrigger(false)}><CloseIcon /></button>
            </div>
            <div className='quesHeader d-flex justify-content-around'>
              <button className='btn bottom' onClick={() => setAddQues(true)}><h4>Add question</h4></button>
              <button className='btn' onClick={() => setAddQues(false)}><h4>Create question</h4></button>
            </div>
            <div className='quesTopAcc my-2'>
              <a href='/'><AccountCircleIcon /></a>
              <ArrowRightIcon />
              <button className='setBtn'>
                <PeopleIcon />
                <select className='select'>
                  <option className='option'>Public</option>
                  <option className='option'>Friends</option>
                </select>
              </button>
            </div>
            <div className='quesInput'>
              <input type='text' placeholder='Start your question with "what", "Why" and How' />
            </div>
            <hr></hr>
          </div>
          <div className='quesBottom'>
            <hr></hr>
            <div className='quesBtn d-flex'>
              <button className='btn' onClick={() => props.setTrigger(false)}>Cancel</button>
              <button className='btn btn-primary rounded-pill'>Add question</button>
            </div>
          </div>
        </div> :
        <div className='quesCcont'>
          <div className='quesTop'>
            <div className='quesHeadClose'>
              <button className='closeBtn' onClick={() => props.setTrigger(false)}><CloseIcon /></button>
            </div>
            <div className='quesHeader d-flex justify-content-around'>
              <button className='btn' onClick={() => setAddQues(true)}><h4>Add question</h4></button>
              <button className='btn bottom' onClick={() => setAddQues(false)}><h4>Create question</h4></button>
            </div>
            <div className='quesTopAcc my-2'>
              <a href='/'><AccountCircleIcon className='profileIcon' /></a>
              <div>
                Saravanan
                <button className='setBtn'>Choose credential<ArrowRightIcon /></button>
              </div>
            </div>
            <div className='quesInput'>
              <input type='text' placeholder='Say something' />
            </div>
            <hr></hr>
          </div>
          <div className='quesBottom'>
            <hr></hr>
            <div className='quesBtn d-flex'>
              <button className='btn btn-primary rounded px-3'>Post</button>
            </div>
          </div>
        </div>
      }

    </>
  ) : '';
}

export default AddQuestion;