import React from 'react';
import { FaHome, FaBookOpen, FaTeamspeak, FaBars } from "react-icons/fa";
import { IoColorFilterSharp, IoCode } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { NavLink } from "react-router-dom";


const SideBar = ({ children }) => {
    const menuItem = [
        {
            path: "/uniqueCustom",
            name: "Unique Custom",
            icon: <FaHome />,
        },
        {
            path: '/NoteS',
            name: "NoteS",
            icon: <FaBookOpen />,
        },
        {
            path: '/AboutUs',
            name: "About Us",
            icon: <IoColorFilterSharp />,
        },
        {
            path: '/Team',
            name: "Team",
            icon: <IoCode />,
        },
        {
            path: '/Graph',
            name: "Graph",
            icon: <FaTeamspeak />,
        },
        {
            path: '/Messages',
            name: "Messages",
            icon: <BiMessageRounded />,
        }]
    return (
        <div className='conteiner'>
            <div className='sibeBar'>
                <div className='top_section'>
                    <h1 className='logo'>logo</h1>
                    <div className='bars'> <FaBars />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link"
                            activeclassname="active">
                            <div className='icon'>{item.icon}</div>
                            <div className="link-text">{item.name}</div>

                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}


export default SideBar;