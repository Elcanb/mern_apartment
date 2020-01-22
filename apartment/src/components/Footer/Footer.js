import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import Logo from '../Logo/Logo'
import './footer.scss';
import { ReactComponent as Facebook } from '../../assets/images/facebook-logo.svg';
import { ReactComponent as Twitter } from '../../assets/images/twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/images/pinterest.svg';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md="6">
                        <Logo />
                    </Col>
                    <Col md="6">
                        <div className="social">
                            <a href="www.facebook.com"><Facebook /></a>
                            <a href="www.twitter.com"><Twitter /></a>
                            <a href="www.pinterest.com"><Pinterest /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
