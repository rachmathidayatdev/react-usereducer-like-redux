import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({ match, history, location, children }) => {
    return (
        <>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/hooks/use-reducer'>Use Reducer</Link></li>
                </ul>
            </div>
            <div>{ children }</div>
            <div>Footer</div>
        </>
    )
}

export default Main;