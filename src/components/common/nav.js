import React from "react";
import { Link } from 'react-router-dom';

export default function Nav () {
    return (
        <div className="col-auto col-md-2 col-xl-2 px-sm-2 col-sm-2 px-0 bg-dark" style={{maxWidth: "200px"}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white " >
                
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/admin/officer" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Officers</span>
                        </Link>
                    </li>  
                    <li>
                        <Link to="/admin/committee" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Committee</span></Link>
                    </li>                  
                    <li>
                        <Link to="/admin/speaker" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Speakers</span></Link>
                    </li>           
                    <li>
                        <Link to="/admin/recording" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Recording</span> </Link>
                    </li>                             
                    <li>
                        <Link to="/admin/finance" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Finance</span> </Link>
                    </li>
                    <li>
                        <Link to="/admin/group" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Group</span> </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4" >
                    <Link to="/admin" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">TCw admin</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link className="dropdown-item" to="/admin">New project...</Link></li>
                        <li><Link className="dropdown-item" to="/admin">Settings</Link></li>
                        <li><Link className="dropdown-item" to="/admin">Profile</Link></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link className="dropdown-item" to="/admin">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>        
    );  
}
