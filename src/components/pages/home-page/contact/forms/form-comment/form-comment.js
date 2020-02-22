import React, { Component } from "react";
import { connect } from "react-redux";

import "./form-comment.css";

import { formFieldsLabelCommentLoaded } from "../../../../../../actions";
import { withGithubService } from "../../../../../hoc";

class FormComment extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      let formFieldsLabelComment = form.fields[4].label;
      this.props.formFieldsLabelCommentLoaded(formFieldsLabelComment);
    });
  }

  render() {
    const { formFieldsLabelComment } = this.props;
    return (
      <div className="contact-textarea">
        <div className="col-md-4">
          <div className="contact__forms-title">{formFieldsLabelComment}</div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5.0"
          ></textarea>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ formFieldsLabelComment }) => {
  return {
    formFieldsLabelComment
  };
};

const mapDispatchToProps = {
  formFieldsLabelCommentLoaded
};

export default withGithubService()(
  connect(mapStateToProps, mapDispatchToProps)(FormComment)
);
