import './h&nTemplate.css';
import { Outlet } from 'react-router-dom'
import React from 'react'
import Left from '../../component/leftbar/homeLeftBar'

function Template() {
  return (
    <>
      <div className='bg-light d-flex justify-content-center zBack'>
        <div className='contentWrap'>
          <div className='fixed' >
          <Left/>

          </div>

          <div className='centerConts'>
            <Outlet />
          </div>
          <div className='rightCont'>

          </div>
        </div>
      </div>
    </>
  )
}

export default Template