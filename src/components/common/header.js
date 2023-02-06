import React, {useState} from 'react';
import {Link} from 'react-router-dom';
//import logo from './../../logo.svg';
import './../../App.css';

export default function Header (props) {

    const [activeLink, setActiveLink] = useState(props.activeLink);
    
    return(
        <header className="border-bottom"> 
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand ps-4" to="/">
                        <p className="lh-1">Tarrant<br/>countywide</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                            <li className="nav-item">
                                <Link id="1" className={activeLink === "1" ? "nav-link active" : "nav-link"}  onClick={(event)=>{setActiveLink(event.target.id)}}  to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link id="2" className={activeLink === "2" ? "nav-link active" : "nav-link"} onClick={(event)=>{setActiveLink(event.target.id)}} to="/speakers">Speakers</Link>
                            </li>
                            <li className="nav-item">
                                <Link id="3" className={activeLink === "3" ? "nav-link active" : "nav-link"} onClick={(event)=>{setActiveLink(event.target.id)}} to="/service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link id="4" className={activeLink === "4" ? "nav-link active" : "nav-link"} onClick={(event)=>{setActiveLink(event.target.id)}}  to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link id="5" className={activeLink === "5" ? "nav-link active" : "nav-link"} onClick={(event)=>{setActiveLink(event.target.id)}} to="/contact">Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link id="6" className={activeLink === "6" ? "nav-link active" : "nav-link"} onClick={(event)=>{setActiveLink(event.target.id)}} to="/admin">Admin</Link>
                            </li>
                        </ul> 
                    </div>
                </div>
                </nav>
        </header>
    );
}