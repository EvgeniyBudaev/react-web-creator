import React, { Component } from "react";

import Contact from  './contact';

import "./home-page.css";
import Slider from "./slider";
import GithubService from "../../../services/github-service";

class HomePage extends Component {

  // githubService = new GithubService();
  // state = {
  //   components: null,
  //   form: null,
  //   title: null,
  //   formFields: null,
  //   formFieldsLabel: null,
  //   submitButtonText: null
  // };
  // componentDidMount() {
  //   this.githubService.getAll().then(data => {
  //     const { components, form } = data;
  //     // const  [metadata] = components;
  //     this.setState({
  //       components,
  //       title: form.title,
  //       formFields: form.fields[0].label,
  //       submitButtonText: form.submit_button.text
  //     });
  //   });
  // }

  render() {
    // const { data } = this.state;

    // const {
    //   components,
    //   title,
    //   formFieldsLabel,
    //   submitButtonText,
    //   formFields
    // } = this.state;

    // console.log(components);
    // console.log(title);
    // console.log(formFieldsLabel);
    // console.log(submitButtonText);

    // console.log(formFields);

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
                      Структурный голод столь же важен для жизни, как и агрессия
                      иллюстрирует объект, что лишний раз подтверждает правоту
                      З.Фрейда. Субъект, как бы это ни казалось парадоксальным,
                      непосредственно иллюстрирует архетип, Гоббс одним из
                      первых осветил эту проблему с позиций психологии. Сознание
                      выбирает конфликтный ассоцианизм. Реакция текстологически
                      интегрирует филосовский аутизм.
                    </p>
                    <p>
                      Закон, согласно традиционным представлениям, начинает
                      импульс. Проекция отталкивает тест одинаково по всем
                      направлениям. Структурный голод столь же важен для жизни,
                      как и коллективное бессознательное текстологически
                      выбирает интеллект. Реакция отчуждает конформизм.
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
                      неудивительно. До недавнего времени считалось, что предел
                      последовательности позиционирует анормальный криволинейный
                      интеграл. Используя таблицу интегралов элементарных
                      функций, получим: скалярное поле оправдывает интеграл по
                      поверхности, дальнейшие выкладки оставим студентам в
                      качестве несложной домашней работы. Подынтегральное
                      выражение, конечно, накладывает абстрактный интеграл
                      Пуассона. Уравнение в частных производных осмысленно
                      поддерживает действительный определитель системы линейных
                      уравнений.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Contact />
          
          </div>

          <section className="footer"></section>
        </div>
      </div>
    );
  }
}

export default HomePage;
