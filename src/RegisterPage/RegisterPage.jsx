import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function RegisterPage() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        employeeid: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.username && user.email && user.password && user.employeeid) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="bg-wrapper">
        <div className="card-mid">
            <h4 className="text-mid">Register</h4>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Full Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Employee ID</label>
                    <input type="text" name="employeeid" value={user.employeeid} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.employeeid &&
                        <div className="invalid-feedback">Employee ID is required</div>
                    }
                </div>
               
                <div className="row">
                    <div className="col-12 form-group">
                        <button className="col-12 btn btn-primary">
                            {registering && <span className="spinner-border spinner-border-sm"></span>}
                            Sign-Up
                        </button>
                        <Link to="/login" className="col-12 btn btn-link text-mid">Go to Login</Link>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}

export { RegisterPage };