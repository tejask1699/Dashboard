import React from 'react'
import '../CSSFiles/main.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'

export default function Main() {
  return (
    <main id='main' className='main'>
      <PageTitle page = 'Dashboard'/>
     <Dashboard />
    </main>
  )
}
