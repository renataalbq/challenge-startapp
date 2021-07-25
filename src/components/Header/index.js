import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const Header = (props) => {

    return (
        <div className="container">
             <Link to='/'  style={{textDecoration: 'none'}}>
                <h1 className="title">{props.title}</h1>
            </Link>
        </div>
    )
}

export default Header;