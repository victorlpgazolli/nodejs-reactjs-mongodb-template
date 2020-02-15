import React from 'react';
import { Button } from '../../components';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/modules'
export default function Header({ title }) {
    const dispatch = useDispatch();
    const logoutUser = () => dispatch(logout());

    return (
        <div >
            <h1>{title}</h1>
            <Button
                onClick={logoutUser}
                title={"logout"}
            />
        </div>
    );
}
