import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FormLogin } from '../../containers';


export default function SignInPage({ history }) {
    const {
        user
    } = useSelector(state => state.users)

    useEffect(() => {
        if (user && user.hasOwnProperty('id')) {
            history.push('/home/dashboard', {});
        }
    }, [user]);

    return (
        <FormLogin />
    );
}