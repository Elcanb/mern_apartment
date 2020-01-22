import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import './navbar.scss'
import '../../assets/font/flaticon/flaticon.css';
import { logout } from '../../store/action/auth';

class Navbar extends Component {

    render() {

        const { isAuthenticated } = this.props.auth;

        const userLink = (
            <ul className="nav">
                <li className="nav__item">
                    <Link to='/add-advert'>
                        <button type="button" className="btn btn-outline-dark">Add advert</button>
                    </Link>
                </li>
                <li className="nav__item">
                    <button type="button" className="btn btn-outline-danger"
                        onClick={this.props.logout}>
                        Logout
                    </button>
                </li>
            </ul>
        )
        const guestLink = (
            <ul className="nav">
                <li className="nav__item">
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/register">Register</NavLink>
                </li>
            </ul>
        )
        return (
            <>
                {!isAuthenticated ? guestLink : userLink}
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
