import React from 'react'
import profile from './images/Tejas.jpg'

export default function NavAvatar() {
    return (
        <li className='nav-item dropdown pe-3'>
            <button
                className='nav-link nav-profile d-flex align-items-center pe-0'
                href='#'
                data-bs-toggle="dropdown"
            >
                <img src={profile} alt="" className='rounded-circle' />
                <span className='d-none d-md-block dropdown-toggle ps-2'></span>
                </button>
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
                <li className='dropdown-header'>
                    <h6>Tejas</h6>
                    <span>Web developer</span>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li>
                    <button
                        className='dropdown-item d-flex align-items-center'
                       
                    >
                        <i className='bi bi-person'></i>
                        <span>My Profile</span>
                    </button>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li>
                    <button
                    className='dropdown-item d-flex align-items-center'
                    
                    >
                        <i className='bi bi-gear'></i>
                        <span>Account Setting</span>
                    </button>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li>
                    <button
                    className='dropdown-item d-flex align-items-center'
                    href='#'
                    >
                        <i className='bi bi-question-circle'></i>
                        <span>Need help?</span>
                    </button>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li>
                    <button
                    className='dropdown-item d-flex align-items-center'
                    href='#'
                    >
                        <i className='bi bi-arrow-right'></i>
                        <span>Sign Out</span>
                    </button>
                </li>
            </ul>

        </li>
    )
}
