import React from 'react'
import {BsJustify} from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
    {/* Here we use toggle button hide and show */}
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className="user-info">
            <h3>Hello Lokesh🖐️,</h3>
        </div>
        <div className="search-input">
            <input type="search" name="search" id="search" placeholder='search' />
        </div>
        
    </header>
  )
}

export default Header