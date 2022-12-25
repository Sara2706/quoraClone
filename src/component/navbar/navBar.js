import './navbar.css';
import React, { useState, useContext } from 'react';
import AddQuestion from '../addquestion/addQuestion';
import HomeIcon from '@mui/icons-material/Home';
import MarginIcon from '@mui/icons-material/Margin';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SearchFilterValue } from '../context/SearchFiltr';

function Nav() {
    const [openQues, SetOpenQues] = useState(false);
    const value = useContext(SearchFilterValue);

    const search = (e) => {
        value.setSearchValue(e.target.value);
    }

    return (
        <>
            <header>
                <nav className='d-flex justify-content-between align-items-center'>
                    <div className='logo'>
                        <a href='/' className='text-decoration-none'><h3 className=' font-weight-bolder'>Quora</h3></a>
                    </div>
                    <div className='navitems d-flex justify-content-between align-items-center'>
                        <div className='navitem d-flex flex-column position-relative'>
                            <a href='/' className='text-decoration-none text-dark p-2'><HomeIcon /></a><span className='position-absolute'>Home</span>
                        </div>
                        <div className='navitem d-flex flex-column position-relative'>
                            <a href='/follow' className='text-decoration-none text-dark p-2'><MarginIcon /></a><span className='position-absolute'>Follow</span>
                        </div>
                        <div className='navitem d-flex flex-column position-relative'>
                            <a href='/' className='text-decoration-none text-dark p-2'><BorderColorIcon /></a><span className='position-absolute'>Answer</span>
                        </div>
                        <div className='navitem d-flex flex-column position-relative'>
                            <a href='/' className='text-decoration-none text-dark p-2'><FamilyRestroomIcon /></a><span className='position-absolute'>Spaces</span>
                        </div>
                        <div className='navitem d-flex flex-column position-relative'>
                            <a href='/notification' className='text-decoration-none text-dark p-2'><NotificationsIcon /></a><span className='position-absolute'>Notifications</span>
                        </div>
                        <div className='navitem search p-1 d-flex'>
                            <button className='searchBtn'><SearchIcon /></button>
                            <input type='text' placeholder='Search..' onChange={search}/>
                        </div>
                        <div className='navitem try'>
                            <button>Try Quora+</button>
                        </div>
                        <div className='navitem nav-btn'>
                            <button><AccountCircleIcon /></button>
                        </div>
                        <div className='navitem nav-btn'>
                            <button><LanguageIcon /></button>
                        </div>
                        <div className='addQues'>
                            <button className='text-decoration-none text-white' onClick={() => SetOpenQues(true)}>Add a question</button>
                            <button className='text-decoration-none text-white'><ArrowDropDownIcon /></button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='popUpWrap'>
                <AddQuestion trigger={openQues} setTrigger={SetOpenQues} />
            </div>
        </>
    )
}

export default Nav