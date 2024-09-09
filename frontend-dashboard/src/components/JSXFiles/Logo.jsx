import React from 'react'
import '../CSSFiles/logo.css'
export default function Logo() {
        const handleToogleSideBar = () =>{
            document.body.classList.toggle('toggle-sidebar')
        }
  return (
        <div className='d-flex align-items-center justify-content-between'>
            <a href='/' className='logo d-flex align-items-center'>
                {/* <img src="" alt="" /> */}
                <span className='d-none d-lg-block'>Dashboard</span>
            </a>
            <i 
            className='bi bi-list toggle-sidebar-btn'
            onClick={handleToogleSideBar}
            ></i>
        </div>
  )
}
