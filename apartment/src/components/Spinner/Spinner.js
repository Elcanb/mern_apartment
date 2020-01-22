import React from 'react'

import './spinner.scss';

const Spinner = (props) => {
    return (
        <div style={{ minHeight: props.height, width: '100%' }}>
            <div className="loader" style={{top: props.top}}>
                Loading...
        </div>

        </div>
    )
}

export default Spinner
