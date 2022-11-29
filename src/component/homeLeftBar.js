import '../App.css';
import React, { useContext } from 'react'
import filterDatas from './json/homeFilter.json';
import { FilterValue } from './context/QuestionFilterContext.js'

export default function Left() {
    const { getFilters, setGetFilters } = useContext(FilterValue);

    console.log(getFilters)
    const aaa = (e) => {
        console.log(getFilters)
        setGetFilters('e.target.innerText');
        console.log(getFilters)
    }

    const filters = filterDatas.map(item => {
        return (

            <li className='d-flex align-items-center rounded' onClick={aaa}>
                <img src={item.image} className='rounded' />
                <p>{item.filterName}</p>
            </li>
        )
    })

    return (
        <>
            <div className='homeleftbar'>
                <ul className='list-unstyled'>
                    {filters}
                </ul>
            </div>
        </>
    )
}

