import React from 'react'
import { HashRouter } from 'react-router-dom'
 
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Message from "../common/msg/messages"

import Routes from './routes'

export default props => (
    <HashRouter>
        <div className="wrapper">
            <Header/>
            <SideBar/>
            <Routes />
            <Footer/>
            <Message />
        </div>
    </HashRouter>
)