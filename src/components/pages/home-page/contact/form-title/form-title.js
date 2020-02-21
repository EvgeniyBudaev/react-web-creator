import React, { Component } from 'react';
import { connect } from "react-redux";
import './form-title.css';
import { formTitleLoaded } from '../../../../../actions';
import { withGithubService } from '../../../../hoc';

class FormTitle extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      const formTitle = form.title;
      this.props.formTitleLoaded(formTitle);
    });
  }

  render() {
    const { formTitle } = this.props;
    // console.log(formTitle);
    return (
     <div className="contact__title">{formTitle}</div>
    )
  };
};

const mapStateToProps = ({ formTitle }) => {
  console.log(formTitle);
  return {
    formTitle
  };
};

const mapDispatchToProps = {
  formTitleLoaded
};

export default withGithubService()(connect(mapStateToProps, mapDispatchToProps)(FormTitle));