import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'


function Header() {
    const [ inputSearch, setInputSearch ] = useState('');

    return (
        <div className='header' >
            <div className="header__left">
                <MenuIcon />
                <Link to='/' >
                    <img
                        className='header__logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="header__input">
                <input
                    type="text"
                    placeholder='Search'
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                />
                <Link to={`/search/${inputSearch}`} >
                    <SearchIcon className='header__inputButton' />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar
                    className='header__avatar'
                    alt='avatar'
                    src='https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'
                />
            </div>

        </div>
    )
}

export default Header