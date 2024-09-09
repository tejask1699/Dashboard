import React from 'react'

export default function NavNotice() {
    return (
        <li className="nav-item dropdown">
            <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className='badge bg-primary badge-number'>4</span>
            </a>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notification'>
                <li className='dropdown-header'>
                    You have 4 new notification
                    <a href='#'>
                        <span className='bagde rounded-pill bg-primary p-2 ms-2'>
                            View all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Tejas Kelaskar</h4>
                        <p>Last seen 30 min. ago</p>
                        <p>30 min. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Tejas Kelaskar</h4>
                        <p>Last seen 30 min. ago</p>
                        <p>30 min. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>  <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Tejas Kelaskar</h4>
                        <p>Last seen 30 min. ago</p>
                        <p>30 min. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>  <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Tejas Kelaskar</h4>
                        <p>Last seen 30 min. ago</p>
                        <p>30 min. ago</p>
                    </div>
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
