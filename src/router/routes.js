import React from 'react'
import log from '../services/log-service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/home'
import Welcome from '../components/welcome'
import Officers from '../components/officers'
import Recordings from '../components/recordings'
import Speakers from '../components/speakers'
import Reports from '../components/reports'

export default function AppRoutes(){
    const name = AppRoutes.name
    log.info(`${name} component being creation`)
    log.info(`${name} component end creation`)
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="/" element={<Welcome />} />
                    <Route path="/officers" element={<Officers />} />
                    <Route path="/recordings" element={<Recordings />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/reports" element={<Reports />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}