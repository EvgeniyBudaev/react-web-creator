import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import { formTitleLoaded, submitButtonTextLoaded } from "../../../../actions";
import "./contact.css";
import { withGithubService } from "../../../hoc";

class Contact extends Component {
  componentDidMount() {
    const { githubService } = this.props;

    githubService.getAll().then(data => {
      const { form } = data;
      let formTitle = form.title;
      let submitButtonText = form.submit_button.text;
      console.log(formTitle, submitButtonText);
      this.props.formTitleLoaded(formTitle);
      this.props.submitButtonTextLoaded(submitButtonText);
    });
  }

  render() {
    const { formTitle, submitButtonText } = this.props;
    console.log(formTitle, submitButtonText);
    return (
      <section className="contact">
        <div className="col-md-12">
          <div className="contact__wripper">
            <div className="contact__inner">
              <div className="contact__title">{formTitle}</div>
              <div className="contact__forms">
                <Form>
                  <Form.Row>
                    <div className="col-md-4">
                      <Col-md-4 className="contact__forms-col">
                        <div className="contact__forms-title">Имя</div>
                        <Form.Control />
                      </Col-md-4>
                    </div>
                    <div className="col-md-4">
                      <Col-md-4>
                        <div className="contact__forms-title">Телефон</div>
                        <Form.Control />
                      </Col-md-4>
                    </div>
                  </Form.Row>

                  <Form.Row>
                    <div className="col-md-4">
                      <Col-md-4 className="contact__forms-col ">
                        <div className="contact__forms-title">E-mail</div>
                        <Form.Control />
                      </Col-md-4>
                    </div>
                    <div className="col-md-4">
                      <Col-md-4>
                        <div className="contact__forms-title">Дата записи</div>
                        <Form.Control />
                      </Col-md-4>
                    </div>
                  </Form.Row>

                  <div className="contact-textarea">
                    <div className="col-md-4">
                      <div className="contact__forms-title">
                        Комментарий (не обязательно)
                      </div>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5.0"
                      ></textarea>
                    </div>
                  </div>
                </Form>
              </div>

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

const mapStateToProps = ({ formTitle, submitButtonText }) => {
  return {
    formTitle,
    submitButtonText
  };
};

const mapDispatchToProps = {
  formTitleLoaded,
  submitButtonTextLoaded
};

export default withGithubService()(
  connect(mapStateToProps, mapDispatchToProps)(Contact)
);
