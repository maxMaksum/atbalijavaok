import React from 'react'
import Footer from './MyFooter'
import Navbar from './Navbar'
import MyFooter from './MyFooter'


function Layout({children}) {
    return (
        <div className="relative mt-20">
            <div className="absolute">
                <Navbar/>
            </div>
           
                {children}

            <MyFooter/>
            
        </div>
    )
}

export default Layout
