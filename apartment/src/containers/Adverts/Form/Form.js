import React from 'react'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import '../../Auth/Login/login.scss'
import { addAdvert } from '../../../store/action/advert'

const errorMsg = 'This field is required';

const RegistrationSchema = Yup.object().shape({
    location: Yup.string().required(errorMsg),
    price: Yup.string().required(errorMsg),
    room: Yup.string().required(errorMsg),
    floor: Yup.string().required(errorMsg),
    square: Yup.string().required(errorMsg)
})

const Registration = ({ addAdvert, isAuthenticated, history }) => {

    if (!isAuthenticated) {
        return <Redirect to='/login' />
    }

    return (
        <Formik
            initialValues={{
                location: '',
                price: '',
                room: '',
                floor: '',
                square: ''
            }}
            validationSchema={RegistrationSchema}
            onSubmit={(values, { setSubmitting }) => {
                addAdvert(values);
                setSubmitting(false);
                history.push('/');
            }}
        >
            {({ isSubmitting, isValid }) => (
                <div className="form-wrapper">
                    <div className="form">
                        <span className="form__title" > Add your advert </span>
                        <Form>
                            <div className="input-wrapper">
                                <Field type='text' name='location' placeholder='Location' />
                                <ErrorMessage name='location'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="input-wrapper">
                                <Field type='text' name='price' placeholder='Price' />
                                <ErrorMessage name='price'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="input-wrapper">
                                <Field type='text' name='room' placeholder='Room' />
                                <ErrorMessage name='room'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="input-wrapper">
                                <Field type='text' name='floor' placeholder='Floor' />
                                <ErrorMessage name='floor'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="input-wrapper">
                                <Field type='text' name='square' placeholder='Square' />
                                <ErrorMessage name='square'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="button-wrapper">
                                <button disabled={!isValid} type='submit' className='form__btn'>Submit</button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addAdvert })(Registration)
