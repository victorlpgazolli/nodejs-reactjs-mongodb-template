import React, { useState } from 'react';
import { Input, Button } from '../../components';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../store/modules'
import styles from '../styles.js'
export default function FormLogin() {
    const dispatch = useDispatch();
    const { innerWidth: width, innerHeight: height } = window;
    const isFieldValid = (field) => field.length > 0 && field.length < 16;
    const [inputErrors, setInputErrors] = useState({ email: true, password: true });

    const checkValues = data => isFieldValid(data.password) && isFieldValid(data.email);

    const submitForm = async (data) => await dispatch(login(data))

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: data => {
            setInputErrors({
                email: !isFieldValid(data.email),
                password: !isFieldValid(data.password),
            })
        },
        onSubmit: values => checkValues(values) && submitForm(values)
    });

    return (
        <styles.formDefault onSubmit={formik.handleSubmit}
            width={width + "px"}
        >
            <Input

                hasErrors={inputErrors?.email}
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <Input

                hasErrors={inputErrors?.password}
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <Button
                type='submit'
                title={'Fazer login'}
            />
        </styles.formDefault>
    );
}
