import React from 'react'

export default function NavMessage() {
  return (
    <li className="nav-item dropdown">
    <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className='badge bg-success badge-number'>4</span>
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
            You have 3 new messages
            <a href='#'>
                <span className='bagde rounded-pill bg-success p-2 ms-2'>
                    View all
                </span>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className="messages-item">
            <a href='#'>
                <img
                src=''
                alt=''
                className='rounded-circle'
                />
                <div>
                    <h4>Tejas Kelaskar</h4>
                    <p>
                        Dashboard is visually look good
                    </p>
                    <p>3 hrs. ago</p>
                </div>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>
       
        <li className="messages-item">
            <a href='#'>
                <img
                src=''
                alt=''
                className='rounded-circle'
                />
                <div>
                    <h4>Tejas Kelaskar</h4>
                    <p>
                        Dashboard is visually look good
                    </p>
                    <p>3 hrs. ago</p>
                </div>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>
        <li className="messages-item">
            <a href='#'>
                <img
                src=''
                alt=''
                className='rounded-circle'
                />
                <div>
                    <h4>Tejas Kelaskar</h4>
                    <p>
                        Dashboard is visually look good
                    </p>
                    <p>3 hrs. ago</p>
                </div>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>
        <li className='dropdown-footer'>
            <a href='#'>Show all notification</a>
        </li>
    </ul>
</li>
  )
}
