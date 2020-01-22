import React from 'react'
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Advert from '../../containers/Adverts/Advert/Advert';

const Search = ({ isAuthenticated, searchResult }) => {
    if (!isAuthenticated) {
        return <Redirect to='/' />
    }
    return (
        <div style={{ height: '71vh', padding: '30px 0' }}>
            <Container>
                <Row>
                    {searchResult.length > 0 ?
                        (searchResult.map(advert => <Advert key={advert._id} advert={advert} />)) :
                        (<p style={{ fontSize: '28px', fontWeight: '600', color: '#ff7200' }}>Nothing Found...</p>)}
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    searchResult: state.advert.searchResult
})

export default connect(mapStateToProps)(Search)
