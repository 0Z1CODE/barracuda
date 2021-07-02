import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Mishel from "../../assets/img/team/mishel.jpg";
import Alex from "../../assets/img/team/Alex.jpg";
import Stas from "../../assets/img/team/Stas.jpg";
import ButtonTwoChewrone from "../Buttons/ButtonTwoChewrone";

class OurTeam extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="OurTeam">
          <Container>
            <div className="italick-title text-center">Наша команда</div>
            <div className="h3">
              Посещая нас, ты приходишь к своему старому другу, который
              чертовски хорошо знает свою работу и с которым у тебя строятся
              отношения на доверии и профессионализме.
            </div>
            <div className="Team row mt-5">
              <div className="col-lg-4 mt-lg-4">
                <div className="TeamCard">
                  <div className="image-holder im-mishel">
                    <img src={Mishel} alt="Mishel" />
                  </div>
                  <div className="teammember-name mt-3">Михаил</div>
                  <div className="teammember-desc mt-2">
                    Всегда готов предложить вам что-то индивидуальное и новое
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="TeamCard">
                  <div className="image-holder im-alex">
                    <img src={Alex} alt="Alex" />
                  </div>
                  <div className="teammember-name mt-3">Саша</div>
                  <div className="teammember-desc mt-2">
                    Со 100 метров видит изъяны причесок у прохожих, пластический
                    хирург ваших волосс
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-lg-5">
                <div className="TeamCard">
                  <div className="image-holder im-stas ">
                    <img src={Stas} alt="Stas" />
                  </div>
                  <div className="teammember-name mt-3">Стас</div>
                  <div className="teammember-desc mt-2">
                    Угнетало однообразие мужских стрижек в Киеве, решил
                    исправить ситуацию
                  </div>
                </div>
              </div>
            </div>
            <div className="OurTeam_footer">
              <div className="h2">Ну как, интересно?</div>
              <div className="teammember-desc mt-3">
                Наши ребята ответили, на удобные и неудобные вопросы о себе,<br/>
                прочитайте, чтобы узнать нас получше.
              </div>
              <div className="d-flex justify-content-center mt-3">
              <ButtonTwoChewrone text="читать интервью"/>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default OurTeam;
<></>;
