import './leftbar.css';
import React from 'react'
import filterDatas from '../../json/homeFilter.json';
import { NavLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import ExploreIcon from '@mui/icons-material/Explore';

export default function Left() {
    const filters = filterDatas.map(item => {
        return (

            <NavLink className='navlink' target='_blank' to={`/topic/${item.filterName.toLowerCase()}`} key={item.id}>
                <li className='rounded' key={item.id}>
                    <img src={item.image} className='rounded' />
                    <p>{item.filterName}</p>
                </li>
            </NavLink>
        )
    })

    return (
        <>
            <div className='homeleftbar'>
                <ul className='list-unstyled'>
                    <li className='rounded'>
                        <AddIcon style={{width:'35px'}}/>
                        <p className='mx-1'>Create Space</p>
                    </li>
                    {filters}
                    <li className='rounded'>
                        <ExploreIcon style={{width:'35px'}}/>
                        <p className='mx-1'>Discover space</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

