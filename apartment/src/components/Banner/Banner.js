import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { search } from '../../store/action/advert'

import './banner.scss';

class Banner extends Component {

    state = {
        location: '',
        price: '',
        room: '',
        floor: '',
        square: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const advert = this.state;
        this.props.isAuthenticated ?
            (this.props.search(advert)) : (window.alert("Please login for searching..."));
        this.setState({
            location: '',
            price: '',
            room: '',
            floor: '',
            square: ''
        })
        this.props.history.push('/search-result')
    }

    render() {
        return (
            <div className="banner">
                <div className="banner__overlay"></div>
                <div className="search">
                    <div className="search__title">Find Your Dream Home</div>
                    <div className="search__content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <Col md="6">
                                    <input type="text"
                                        name="location"
                                        placeholder="location"
                                        value={this.state.location}
                                        onChange={this.handleChange} required />
                                </Col>
                                <Col md="6">
                                    <input type="text"
                                        name="price"
                                        placeholder="price"
                                        value={this.state.price}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col md="4">
                                    <input type="text"
                                        name='room'
                                        placeholder="room"
                                        value={this.state.room}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col md="4">
                                    <input type="text"
                                        name='floor'
                                        placeholder="floor"
                                        value={this.state.floor}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col md="4">
                                    <input type="text"
                                        name='square'
                                        placeholder="square"
                                        value={this.state.square}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col md="12">
                                    <div className="button">
                                        <button>Search</button>
                                    </div>
                                </Col>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { search })(withRouter(Banner))
