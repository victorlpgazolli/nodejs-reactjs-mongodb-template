import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/modules/';
import { Header } from '../../containers';
export default function HomePage({ history }) {
    return (
        <div>
            <Header />
            <h1>dashboard</h1>
        </div>
    );
}
