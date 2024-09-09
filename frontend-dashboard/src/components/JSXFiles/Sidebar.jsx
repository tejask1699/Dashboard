import React from 'react'
import '../CSSFiles/sidebar.css'

import navPages from './data/navpages'
import navUiElements from './data/navuielements'
import navOthers from './data/navothers'



export default function Sidebar() {
  return (
    <aside id='sidebar' className='sidebar'>
      <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
          <a className='nav-link' href='' />
          <i className='bi bi-grid'></i>
          <span>Dashboard</span>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link collapsed'
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href='#'
          >
            <i className='bi bi-menu-button-wide'></i>
            <span>Documents</span>
            <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul
            id='components-nav'
            className='nav-content collapse'
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Customer</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Supplier</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>

        <li className='nav-item'>
          <a
          className='nav-link collapsed'
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href='#'
          >
          <i className='bi bi-journal-text'></i>
          <span>Forms</span>
          <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul
           id='forms-nav'
           className='nav-content collapse'
           data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Application form</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Realease Form</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Cancellation Form</span>
              </a>
            </li>
          </ul>
        </li>

        <li className='nav-heading'>Apps & Pages</li>
        {navPages.map(nav=>(
          <li className="nav-item" key={nav._id}>
            <a href="" className="nav-link collapsed">
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>
          </li>
        )
      )}
      <li className='nav-heading'>UI Elements</li>
        {navUiElements.map(nav=>(
          <li className="nav-item" key={nav._id}>
            <a href="" className="nav-link collapsed">
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>
          </li>
        )
      )}
      <li className='nav-heading'>Apps & Pages</li>
        {navOthers.map(nav=>(
          <li className="nav-item" key={nav._id}>
            <a href="" className="nav-link collapsed">
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>
          </li>
        )
      )}
      </ul>
    </aside>
  )
}
