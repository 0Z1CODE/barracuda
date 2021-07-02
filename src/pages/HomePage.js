import React, { Component } from 'react';
import{Container, Row} from 'react-bootstrap'
import BgVideo from '../components/BgVideo/BgVideo';
import Header from '../components/Layout/Header/Header';
import OurTeam from '../components/OurTeam/OurTeam';
import Portfolio from '../components/Portfolio/Portfolio';
import Price from '../components/Price/Price';
import AboutUs from './../components/AboutUs/AboutUs'


class HomePage extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <Container fluid/>
        <Header/>
        <BgVideo/>
        <AboutUs/>
        <OurTeam/>
        <Portfolio/>
        <Price/>
      <Container/>
      </>
     );
  }
}
 
export default HomePage;