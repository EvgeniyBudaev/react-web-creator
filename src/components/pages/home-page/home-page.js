import React, { Component } from "react";
import "./home-page.css";
import Slider from "./slider";
import Form from "react-bootstrap/Form";
import GithubService from '../../../services/github-service';
class HomePage extends Component {
  githubService = new GithubService();
  state = {
    metadata : null
  };
  componentDidMount() {
    this.githubService
    .getAll()
    .then(data => {
      const { components } = data;
      const  [metadata] = components;
      this.setState({
        metadata 
      })
    })
  }

render() {
  // const { data } = this.state;
  const  {metadata} = this.state;
  console.log(metadata);

    return (
      
      <div className="container">
        <div className="row">

          <div className="col-md-12">
            <div className="homepage__header">
              <div className="homepage__header-text">Тестовое задание</div>
            </div>
          </div>
       
            <div className="container__wrapper">
              <section className="gallery">
                <div className="col-md-12">
                  <div className="gallery__wrapper">
                    <div className="gallery__inner">
                      <div className="gallery__inner-title">Галерея</div>
                      <div className="gallery__wrapper-slider">
                      <div className="gallery__inner-slider">
                        <Slider />
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="about">
                <div className="col-md-6">
                  <div className="about__inner">
                    <div className="about__inner-title">О нас</div>
                    <div className="about__inner-content">
                      <p>
                        Структурный голод столь же важен для жизни, как и
                        агрессия иллюстрирует объект, что лишний раз
                        подтверждает правоту З.Фрейда. Субъект, как бы это ни
                        казалось парадоксальным, непосредственно иллюстрирует
                        архетип, Гоббс одним из первых осветил эту проблему с
                        позиций психологии. Сознание выбирает конфликтный
                        ассоцианизм. Реакция текстологически интегрирует
                        филосовский аутизм.
                      </p>
                      <p>
                        Закон, согласно традиционным представлениям, начинает
                        импульс. Проекция отталкивает тест одинаково по всем
                        направлениям. Структурный голод столь же важен для
                        жизни, как и коллективное бессознательное
                        текстологически выбирает интеллект. Реакция отчуждает
                        конформизм.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about__inner">
                    <div className="about__inner-title">Важно знать </div>
                    <div className="about__inner-content">
                      <p>
                        Абсолютная погрешность, в первом приближении, проецирует
                        абстрактный интеграл по бесконечной области, что
                        неудивительно. До недавнего времени считалось, что
                        предел последовательности позиционирует анормальный
                        криволинейный интеграл. Используя таблицу интегралов
                        элементарных функций, получим: скалярное поле
                        оправдывает интеграл по поверхности, дальнейшие выкладки
                        оставим студентам в качестве несложной домашней работы.
                        Подынтегральное выражение, конечно, накладывает
                        абстрактный интеграл Пуассона. Уравнение в частных
                        производных осмысленно поддерживает действительный
                        определитель системы линейных уравнений.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="contact">
                <div className="col-md-12">
                  <div className="contact__wripper">
                    <div className="contact__inner">
                      <div className="contact__title">Свяжитесь с нами</div>
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
                                <div className="contact__forms-title">
                                  Телефон
                                </div>
                                <Form.Control />
                              </Col-md-4>
                            </div>
                          </Form.Row>


                          <Form.Row>
                            <div className="col-md-4">
                              <Col-md-4 className="contact__forms-col ">
                                <div className="contact__forms-title">
                                  E-mail
                                </div>
                                <Form.Control />
                              </Col-md-4>
                            </div>
                            <div className="col-md-4">
                              <Col-md-4>
                                <div className="contact__forms-title">
                                  Дата записи
                                </div>
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
                            <span className="contact__politics-text">Я даю согласие на обработку персональных данных согласно</span>
                            <span className="contact__politics-greentext"> политике конфиденциальности.</span>
                          </label>
                        </div>
                      </div>

                      <div className="contact__button-send">
                        <div className="contact__btn-container">
                          <div className="btn-container">
                             <a href="#" className="btn" target="blank">
                                Отправить заявку 
                             </a>
                          </div>
                          </div>  
                      </div>

                    </div>
                  </div>
                </div>
              </section>          
            </div>

            <section className="footer"></section>
          
        </div>
      </div>
    );
  }
}

export default HomePage;
