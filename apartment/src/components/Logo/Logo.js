import React from 'react'
import { Link } from 'react-router-dom'

import './logo.scss'
import { ReactComponent as LogoIcon } from '../../assets/images/apartment-solid.svg'

const Logo = () => {
    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="logo" >
                <LogoIcon />
                <span>APARTMENT</span>
            </div>
        </Link>
    )
}

export default Logo
