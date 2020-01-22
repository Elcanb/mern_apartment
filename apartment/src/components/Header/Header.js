import React from 'react'
import { Container, Row } from 'reactstrap'

import './header.scss'
import Logo from '../Logo/Logo'
import Navbar from '../Navigation/Navbar'
import '../../assets/font/flaticon/flaticon.css';

const Header = () => {
    return (
        <>
            <div className="upperHeader">
                <Container>
                    <Row>
                        <div className="location">
                            <i className="flaticon-placeholder"></i>
                            <p>Azerbaijan, Baku</p>
                        </div>
                        <div className="contactInfo">
                            <i className="flaticon-telephone"></i>
                            <p>mobile: 055 555 55 55</p>
                            <i className="flaticon-email phone"></i>
                            <p>mail: info@apartment.az</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <div className="mainHeader">
                        <Logo />
                        <Navbar />
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Header
