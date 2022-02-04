import React from "react";
import "../css/Navigation.scss"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { USER_LOGOUT } from "../store/actions/constants";

const Navigation = ({ profile }) => {
    const dispatch = useDispatch();
    const history = useNavigate();

    function handleLogout(){
        dispatch({
            type: USER_LOGOUT,
            payload: {}
        });
        localStorage.removeItem('jwt');
        history.push('/');
    }

    return (
        <>
        <nav className="main-nav">
            <Link to='/' className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={`${window.location.origin}/img/argentBankLogo.png`}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                { profile && <Link to='/user' className="main-nav-item"><i className="fa fa-user-circle"></i> {profile.firstName} {profile.lastName}</Link> }
                { !profile && <Link to='/signin' className="main-nav-item"><i className="fa fa-user-circle"></i> Sign In</Link> }


                { profile && 
                    <Link to='/' className="main-nav-item" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i> 
                        Sign Out
                    </Link> 
                }
            </div>
        </nav>
        </>
    )
}

export default Navigation;