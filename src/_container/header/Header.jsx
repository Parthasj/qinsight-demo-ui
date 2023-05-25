import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    
    return (       
      <div className="header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
              <a className="navbar-brand" href="#">QInsight</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  {/* <span className="navbar-toggler-icon">jhk</span> */}
                </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                  </ul>
                  <div className="">
                      <button type="button" class="btn btn-danger"><Link className="logout-container" to="/login">Logout</Link></button>
                  </div>
              </div>
          </nav>
        </div>
    );
}

export { Header };