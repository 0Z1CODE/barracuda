import React, { Component } from "react";
// import "./../../assets/scss/componentes/AboutUS.scss";
import ButtonTwoChewrone from './../Buttons/ButtonTwoChewrone'
import barbers from './../../assets/img/thom-holmes-Yb6tFZfh28Y-unsplash 1.png'
import sm1 from '../../assets/img/smoke_PNG55167 1.png'
import sm2 from '../../assets/img/smoke_PNG55243 1.png'
import sm3 from '../../assets/img/smoke_PNG55243 2.png'
import sm4 from '../../assets/img/smoke_PNG55243 3.png'
import fish from '../../assets/img/fish.svg'
import circle from '../../assets/img/circle.svg'

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <>
       <section className="AboutUs d-flex w-100">
        <div className="AnimationBarber d-flex w-50 justify-content-end">
          <div className="static">
            <img className="barbers" src = {barbers}/>
            <img className="smoke sm1" src={sm1}/>
            <img className="smoke sm2" src={sm2}/>
            <img className="smoke sm3" src={sm3}/>
            <img className="smoke sm4" src={sm4}/>
          </div>
        </div>
        <div className="TextInfo w-50 ml-5 mt-5 ">
          <div className="BigTitle">Немного о <br/> Barracuda</div>
          <div className="DescriptionTXT mb-5">
          Barracuda - новый современный барбершоп на ВДНХ.  Мы открылись в мае 2020, но уже успели собрать ТОП команду профессиональных барберов,  от которых ты получишь такую стрижку, которая придаст тебе уверенности  покорить любые вершины, , а также дадут наставления, как в кратчайшие сроки отрастить шикарную густую растительность на лице. 
          </div>
          <ButtonTwoChewrone text="услуги и цены"/>
          <div className="fishBlock">
            <img className="fish_about" src={fish} alt="barracuda" />
            <img className="circle_about" src={circle} alt="circle" />
          </div>
        </div>

       </section>
      </>
    );
  }
}

export default AboutUs;
