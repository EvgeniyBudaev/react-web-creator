import React, { Component } from "react";
import { connect } from "react-redux";

import { submitButtonTextLoaded } from "../../../../actions";
import "./contact.css";
import { withGithubService } from "../../../hoc";
import FormTitle from './form-title';
import Forms from './forms';

class Contact extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      const submitButtonText = form.submit_button.text;
      this.props.submitButtonTextLoaded(submitButtonText);
    });
  }

  render() {
    const { submitButtonText } = this.props;
    // console.log(formTitle);
    // console.log(submitButtonText);
    return (
      <section className="contact">
      <div className="col-md-12">
        <div className="contact__wripper">
          <div className="contact__inner">
            <FormTitle />

            <Forms />


            <div className="contact__politics">
              <div>
                <input type="checkbox" id="test1" />
                <label htmlFor="test1">
                  <span className="contact__politics-text">
                    Я даю согласие на обработку персональных данных согласно
                  </span>
                  <span className="contact__politics-greentext">
                    {" "}
                    политике конфиденциальности.
                  </span>
                </label>
              </div>
            </div>

            <div className="contact__button-send">
              <div className="contact__btn-container">
                <div className="btn-container">
                  <a href="#" className="btn" target="blank">
                    {submitButtonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

const mapStateToProps = ({ submitButtonText }) => {
  return {
    submitButtonText
  };
};

const mapDispatchToProps = {
  submitButtonTextLoaded
};

export default withGithubService()(
  connect(mapStateToProps, mapDispatchToProps)(Contact)
);

