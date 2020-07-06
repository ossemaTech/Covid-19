import React from 'react';
import {Col, Form, Button, InputGroup } from 'react-bootstrap';
import {Formik} from 'formik';
import * as yup from 'yup';

import styles from './formContact.module.css';

function FormContact() {

  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const schema = yup.object({
      firstName: yup.string().required(),
      email: yup.string()
                  .required()
                  .email('Email Not Valid ')
                  .trim('Not Valid With Espace'),
      country: yup.string()
                  .required("Select Choose Countries is Required"),
      phone: yup.string()
                .matches(phoneRegExp, "Phone nNumber is Not Valid")
                .required("Phone Number is Required *"),

      message: yup.string()
                  .required('Please Writing Your Message Befor Send :)')
    });

    return (
        <div className={styles.sectionContact}>
            <div className={styles.formContact}>
                <h2 className={styles.titleContact}>Contact Us</h2>
                <Formik
                validationSchema={schema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true);

                    resetForm();

                    setSubmitting(true);
                }}
                initialValues={{
                    firstName: 'Mark'
                }}
                >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                    values,
                    touched,
                    errors,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="5" controlId="validationFormik101">
                        <Form.Label className={styles.label}>Name</Form.Label>
                        <Form.Control
                            size='lg'
                            type="text"
                            name="Full Name"
                            value={values.firstName}
                            onChange={handleChange}
                            isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationFormikUsername2">
                        <Form.Label className={styles.label}>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            size='lg'
                            type="text"
                            placeholder="Your Email"
                            aria-describedby="inputGroupPrepend"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                            {errors.email}
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="5" controlId="validationFormik104">
                        <Form.Label className={styles.label}>Phone:</Form.Label>
                        <Form.Control
                            size='lg'
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            onChange={handleChange}
                            value={values.phone}
                            isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.phone}
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect1">
                            <Form.Label className={styles.label}>Country of Travel</Form.Label>
                            <Form.Control 
                            size='lg'
                            as="select"
                            name="country"
                            value={values.country}
                            custom
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.country}
                            >
                                <option value=''>Choose...</option>
                                <option value='13'>Asia</option>
                                <option value='2'>Australia</option>
                                <option value='3'>Canada</option>
                                <option value='4'>China</option>
                                <option value='5'>Europian</option>
                                <option value='6'>Saudi Arabic</option>
                                <option value='7'>South African</option>
                                <option value='8'>South American</option>
                                <option value='9'>North African</option>
                                <option value='10'>North American</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid" tooltip>
                            {errors.country}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="11" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={styles.label}>Messages</Form.Label>
                            <Form.Control 
                            name='message'
                            value={values.message} 
                            as="textarea" 
                            rows="3" 
                            placeholder="Send Your Message..."
                            onChange={handleChange}
                            isInvalid={!!errors.message}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                            {errors.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="5" controlId="validationFormik101">
                        <Form.Label className={styles.numPhone}>
                            For Emergency
                            <h4 className={styles.phone}>+216 5244 6832</h4>
                        </Form.Label>
                        </Form.Group>
                        <Form.Group className={styles.blockBtn} as={Col} md="6" controlId="validationFormikUsername2">
                        <Button className={styles.btnMessage} type="submit" disabled={isSubmitting}>Send Message</Button>
                        </Form.Group>
                    </Form.Row>                        
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default FormContact;