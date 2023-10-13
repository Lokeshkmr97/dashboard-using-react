import React from 'react'
import 
{BsCurrencyRupee, BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill}                                        
 from 'react-icons/bs'                                                                        
 import {MdSpaceDashboard} from 'react-icons/md';
 import {AiFillQuestionCircle} from 'react-icons/ai';
 import { LuBadgePercent } from "react-icons/lu";

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const logoStyle={
        color:"white",
    }
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <MdSpaceDashboard className='logo-icon' style={logoStyle}/> <span style={logoStyle}>Dashboard</span>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Product
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCurrencyRupee className='icon'/> Income
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="">
                    <LuBadgePercent className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <AiFillQuestionCircle className='icon'/> Help
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar
