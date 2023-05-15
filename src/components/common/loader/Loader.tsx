import React from 'react';
import './Loader.module.scss';

function Loader() {
    return (
        <div className="loader">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;
