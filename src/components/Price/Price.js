import React, { Component } from "react";
import { Container } from "react-bootstrap";
import data from "./priceData.json";

class Price extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="PrticeTable Price">
          <div className="preiceHeader">
            <div className="big-title mt-1 mb-2 text-center">Наши работы</div>
          </div>
          <Container>
            <div className="table-border">
              <table className="w-100 ">
                {data.map((x) => (
                  <>
                    <tr className="dushed-tb d-flex align-items-center row ">
                      <td className="tb-white col-4">{x.name}</td>
                      <td className="tb-dur col-4 text-center">{x.duration}</td>
                      <td className="tb-white col-4 text-right">{x.price} грн</td>
                    </tr>
                  </>
                ))}
              </table>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Price;
