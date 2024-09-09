import React from 'react'
import '../CSSFiles/navigation.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavAvatar from './NavAvatar'
export default function Navigation() {
  return (
    <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
        <NavNotice/>
        <NavMessage/>
        <NavAvatar/>
        </ul>
    </nav>
  )
}
