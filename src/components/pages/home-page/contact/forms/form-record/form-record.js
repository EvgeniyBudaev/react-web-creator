import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";

import './form-record.css';

import { formFieldsLabelRecordLoaded } from '../../../../../../actions';
import { withGithubService } from '../../../../../hoc';

class FormRecord extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      let formFieldsLabelRecord = form.fields[3].label;
      this.props.formFieldsLabelRecordLoaded(formFieldsLabelRecord);
    });
  }

  
  render() {
    const { formFieldsLabelRecord } = this.props;
    return (
      <div className="col-md-4">
          <Col-md-4 className="contact__forms-col">
            <div className="contact__forms-title">
              {formFieldsLabelRecord}
            </div>
            <Form.Control />
          </Col-md-4>
      </div>
    )
  };
};

const mapStateToProps = ({ formFieldsLabelRecord }) => {
  return {
    formFieldsLabelRecord
  };
};

const mapDispatchToProps = {
  formFieldsLabelRecordLoaded
};

export default withGithubService()(
  connect(mapStateToProps, mapDispatchToProps)(FormRecord)
);

