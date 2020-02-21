import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";

import './form-phone-number.css';

import { formFieldsLabelPhoneNumberLoaded } from '../../../../../../actions';
import { withGithubService } from '../../../../../hoc';

class FormPhoneNumber extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      let formFieldsLabelPhoneNumber = form.fields[1].label;
      this.props.formFieldsLabelPhoneNumberLoaded(formFieldsLabelPhoneNumber);
    });
  }

  
  render() {
    const { formFieldsLabelPhoneNumber } = this.props;
    return (
      <div className="col-md-4">
          <Col-md-4 className="contact__forms-col">
            <div className="contact__forms-title">
              {formFieldsLabelPhoneNumber}
            </div>
            <Form.Control />
          </Col-md-4>
      </div>
    )
  };
};

const mapStateToProps = ({ formFieldsLabelPhoneNumber }) => {
  return {
    formFieldsLabelPhoneNumber
  };
};

const mapDispatchToProps = {
  formFieldsLabelPhoneNumberLoaded
};

export default withGithubService()(
  connect(mapStateToProps, mapDispatchToProps)(FormPhoneNumber)
);

