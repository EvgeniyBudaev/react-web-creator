import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";

import './form-email.css';

import { formFieldsLabelEmailLoaded } from '../../../../../../actions';
import { withGithubService } from '../../../../../hoc';

class FormEmail extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      let formFieldsLabelEmail = form.fields[2].label;
      this.props.formFieldsLabelEmailLoaded(formFieldsLabelEmail);
    });
  }

  
  render() {
    const { formFieldsLabelEmail } = this.props;
    return (
      <div className="col-md-4">
          <Col-md-4 className="contact__forms-col">
            <div className="contact__forms-title">
              {formFieldsLabelEmail}
            </div>
            <Form.Control />
          </Col-md-4>
      </div>
    )
  };
};

const mapStateToProps = ({ formFieldsLabelEmail }) => {
  return {
    formFieldsLabelEmail
  };
};

const mapDispatchToProps = {
  formFieldsLabelEmailLoaded
};

export default withGithubService()(
  connect(mapStateToProps, mapDispatchToProps)(FormEmail)
);

