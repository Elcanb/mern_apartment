import React from 'react'
import { Link } from 'react-router-dom'

import './advert.scss'
import propertyImage from '../../../assets/images/property-image.jpg'


const Advert = ({ advert }) => {
    return (
        <div className="col-3">
            <Link to={'/advert/' + advert._id}>
                <div className="advert">
                    <div className="advert__image">
                        <img src={propertyImage} alt="" />
                        <div className="tag_sale">sale</div>
                        <div className="tag_price">{advert.price}</div>
                    </div>
                    <div className="advert__detail">
                        <div className="advert__detail-content">
                            <h5>{advert.location}</h5>
                        </div>
                        <ul>
                            <li><span>Floor:</span>{advert.floor}</li>
                            <li><span>Room:</span>{advert.room}</li>
                            <li><span>Square:</span>{advert.square} m <sup>2</sup></li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Advert
