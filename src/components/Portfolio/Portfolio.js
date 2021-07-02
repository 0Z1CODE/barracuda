import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import king from "../../assets/img/king.png"

// import { getMediaByUsername } from 'nanogram.js'
class Portfolio extends Component {
  state = {};

  getPhotos() {
    const user = "35595565304";
    const token =
      "IGQVJVZA1lqUENfdGloSWtTR2xkNHhTT2RtWjBFbkRFR2RMb2ZAlVVJQODVBOUM5bm9iZAU92dVlaMENNbTZA6bVVadXhZAMTZAwNzlQS19nY205NnJiVDRibFM4NmlBUms0UDg0YUx1b1BWakh2WlpvekhxMAZDZD";
    const response = axios.get(
      `https://api.instagram.com/v1/users/${user}/media/recent`,
      { data: { access_token: token } }
    );
    console.log("photos", response);
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    return (
      <>
        <Container className="Custom__Container Portfolio" bg="dark">
          <div className="portfolioHeader row">
            <div className="portfolioHeaderLeft col-md-6">
              <div className="cursive-title ">Мы всегда в тренде</div>
              <div className="big-title mt-1 mb-2">Наши работы</div>
              <a
                className="link link--blue"
                href="https://www.instagram.com/_barracuda_barbershop_/"
                target="_blank"
              >
                посмотреть наш инстаграм >>
              </a>
            </div>
            <div className="portfolioHeaderRight d-flex col-md-6 justify-content-end align-items-center">
              <img src={king} alt="king"/>
              <div className="cursive-title ml-2">У нас в кармане награда за Лучшее Королевское Бритье в США</div>
            </div>
          </div>
        </Container>
        <div className="Slider-insta"></div>
      </>
    );
  }
}

export default Portfolio;
