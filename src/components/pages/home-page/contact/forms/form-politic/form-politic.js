import React, { Component } from 'react';
import { connect } from "react-redux";

import './form-politic.css';

import { formFieldsLabelPoliticLoaded} from '../../../../../../actions';
import { withGithubService } from '../../../../../hoc';

class FormPolitic extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      let formFieldsLabelPolitic = form.fields[4].label;
      this.props.formFieldsLabelPoliticLoaded(formFieldsLabelPolitic);
    });
  }

  
  render() {
    const { formFieldsLabelPolitic } = this.props;
    return (
      <div className="contact-textarea">
      <div className="col-md-4">
        <div className="contact__forms-title">
         { formFieldsLabelPolitic }
        </div>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5.0"
        ></textarea>
      </div>
    </div>
    )
  };
};

const mapStateToProps = ({ formFieldsLabelPolitic }) => {
  return {
    formFieldsLabelPolitic
  };
};

const mapDispatchToProps = {
  formFieldsLabelPoliticLoaded
};

export default withGithubService()(
  connect(mapStateToProps, mapDispatchToProps)(FormPolitic)
);

