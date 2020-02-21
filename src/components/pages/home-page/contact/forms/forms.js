import React from 'react';
import Form from "react-bootstrap/Form";

import './forms.css';
import FormName from './form-name';
import FormPhoneNumber from './form-phone-number';
import FormEmail from './form-email';
import FormRecord from './form-record';
import FormPolitic from './form-politic';

const Forms = () => {
  return (
    <div className="contact__forms">
    <Form>
      <Form.Row>
        <FormName />
        <FormPhoneNumber /> 
      </Form.Row>

      <Form.Row>
        <FormEmail />
        <FormRecord />
      </Form.Row>

      <FormPolitic />
    </Form>
  </div>
  )
};

export default Forms;