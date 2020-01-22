import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'

import { getAdvertById } from '../../store/action/advert'
import Spinner from '../Spinner/Spinner'
import './detail.scss';
import '../../assets/font/flaticon/flaticon.css';
import propertyImage from '../../assets/images/property-image.jpg';


class Detail extends Component {

    state = {
        location: '',
        price: '',
        room: '',
        floor: '',
        square: '',
    }

    componentDidMount() {
        let id = this.props.match.params.advert_id;
        this.props.getAdvertById(id);
    }

    render() {
        const { location, price, room, floor, square } = this.props.advert;
        return (
            <Container>
                <Row>
                    {this.props.loading ? (<Spinner top='25%' height='71vh' />) :
                        (<>
                            <Col md="12">
                                <div className="heading-wrapper">
                                    <div className="heading">
                                        <h3>{location}</h3>
                                        <h2><span>price - </span>${price}</h2>
                                        <ul className="facility">
                                            <li><i className="flaticon-set-square"></i>SQR: {square} m<sup>2</sup></li>
                                            <li><i className="flaticon-sofa"></i>Room: {room}</li>
                                            <li><i className="flaticon-stairs"></i>Floor: {floor}</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12">
                                <div className="detail-wrapper">
                                    <Row>
                                        <Col lg="6">
                                            <div className="property-image">
                                                <img src={propertyImage} alt="" />
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div className="property-post">
                                                <div className="property__post-detail">
                                                    <h5>Property Details</h5>
                                                    <p>A wonderful serenity has taken possession of my entire soul,
                                                        like these sweet mornings of spring which I enjoy with my whole
                                                        heart. I am alone, and feel the charm of existence in this spot,
                                                        which was created for the bliss of souls like mine. I am so happy,
                                                        my dear friend, so absorbed in the exquisite sense of mere tranquil
                                                existence, that I neglect my talents.</p>
                                                    <div className="property__post-ameneties">
                                                        <h5>ameneties</h5>
                                                        <Row>
                                                            <Col md="4">Garden</Col>
                                                            <Col md="4"> Swimming Pool </Col>
                                                            <Col md="4">Garrage</Col>
                                                            <Col md="4">24X7 Security</Col>
                                                            <Col md="4">Tennis Court</Col>
                                                            <Col md="4">Close to Hospital </Col>
                                                            <Col md="4">Laundry Service</Col>
                                                            <Col md="4"> Pet Friendly</Col>
                                                            <Col md="4">Club House</Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </>
                        )}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    advert: state.advert.advertById,
    loading: state.advert.loading
})

export default connect(mapStateToProps, { getAdvertById })(Detail)
