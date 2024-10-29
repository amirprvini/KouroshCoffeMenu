import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const LayOut: React.FC = (): JSX.Element => {
  return <div className='layOutWrapper flex flex-col justify-between items-center h-full'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}

export default LayOut