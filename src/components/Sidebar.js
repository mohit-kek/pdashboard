import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { menuItems } from '../data/dummy';


const Sidebar = () => {
    return (
        <div className='container'>
            <div className="logo">
                <MdOutlineDashboard className='logo-icon' />
                <span>Dashboard</span>
            </div>

            <div className="menu">
                {
                    menuItems.map((item) => (
                        <Link to={`/${item.name}`} style={{ textDecoration: 'none' }} key={item.id} >
                            {
                                <div className="item"  >
                                    {item.icon}
                                    <h3> {item.title}</h3>
                                </div>
                            }
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}

export default Sidebar