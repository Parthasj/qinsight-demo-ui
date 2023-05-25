import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../_container/header/index';
import { DataTable } from '../DataTable/index';

import { userActions } from '../_actions';

function HomePage() {
    // const users = useSelector(state => state.users);
    // const user = useSelector(state => state.authentication.user);
  
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(userActions.getAll());
    // }, []);

    return (
        <div className="dashboard-wrapper">
           <Header></Header>  
           <DataTable /> 
        </div>
    );
}

export { HomePage };