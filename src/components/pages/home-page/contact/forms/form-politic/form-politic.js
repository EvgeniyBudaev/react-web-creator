import React, { Component } from "react";
import { connect } from "react-redux";

import "./form-politic.css";

import { formFieldsLabelPoliticLoaded } from "../../../../../../actions";
import { withGithubService } from "../../../../../hoc";

class FormPolitic extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      let formFieldsLabelPolitic = form.fields[5].label;
      this.props.formFieldsLabelPoliticLoaded(formFieldsLabelPolitic);
    });
  }

  render() {
    const { formFieldsLabelPolitic } = this.props;
    return (
      <div className="contact__politics">
        <div>
          <input type="checkbox" id="test1" />
          <label htmlFor="test1">
            <span className="contact__politics-text">
              {formFieldsLabelPolitic}
            </span>
            <span className="contact__politics-greentext">
              {" "}
              {/* политике конфиденциальности. */}
            </span>
          </label>
        </div>
      </div>
    );
  }
}

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
