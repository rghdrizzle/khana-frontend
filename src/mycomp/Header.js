import { render } from '@testing-library/react';
import React from 'react';
import './Min.css'
import { Link } from "react-router-dom";

export default function Header() {
    
    return (
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/searchl'>KHANA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/searchl">&nbsp;&nbsp;Reservation&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/vlogs">&nbsp;&nbsp;&nbsp;&nbsp;Vlog&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/abouts">&nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/mybook">&nbsp;&nbsp;&nbsp;&nbsp;My Bookings&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            </li>
            </ul>
          </div>
        </div>
    </nav>
           )
}
