import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";

import './form-name.css';

import { formFieldsLabelNameLoaded } from '../../../../../../actions';
import { withGithubService } from '../../../../../hoc';

class FormName extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      let formFieldsLabelName = form.fields[0].label;
      this.props.formFieldsLabelNameLoaded(formFieldsLabelName);
    });
  }

  
  render() {
    const { formFieldsLabelName } = this.props;
    return (
      <div className="col-md-4">
          <Col-md-4 className="contact__forms-col">
            <div className="contact__forms-title">
              {formFieldsLabelName}
            </div>
            <Form.Control />
          </Col-md-4>
      </div>
    )
  };
};

const mapStateToProps = ({ formFieldsLabelName }) => {
  return {
    formFieldsLabelName
  };
};

const mapDispatchToProps = {
  formFieldsLabelNameLoaded
};

export default withGithubService()(
  connect(mapStateToProps, mapDispatchToProps)(FormName)
);

