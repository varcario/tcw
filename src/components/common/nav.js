import React from "react";

export default function Nav () {
  
    return (
     
      
        <div className="col-auto col-md-2 col-xl-2 px-sm-2 col-sm-2 px-0 bg-dark" style={{maxWidth: "200px"}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100" >
                
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/admin/officer" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Officers</span>
                        </a>
                    </li>  
                    <li>
                        <a href="/admin/committee" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Committee</span></a>
                    </li>                  
                    <li>
                        <a href="/admin/speaker" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Speakers</span></a>
                    </li>           
                    <li>
                        <a href="/admin/recording" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Recording</span> </a>
                    </li>                             
                    <li>
                        <a href="/admin/finance" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Finance</span> </a>
                    </li>
                    <li>
                        <a href="/admin/group" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Group</span> </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">TCw admin</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>        
    );  
}
