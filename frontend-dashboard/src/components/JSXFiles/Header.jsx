import React from 'react'
import '../CSSFiles/header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Navigation from './Navigation'


export default function Header() {
    return (
        <header
            id='header'
            className='header fixed-top d-flex align-items-center'>
            {/* logo */}
            <Logo/>
            {/* SearchBar */}
            <SearchBar/>
            {/* navigation  */}
          <Navigation/>
        </header>

    )
}
