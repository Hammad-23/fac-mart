import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import { connect } from "react-redux";

function Checkout() {
  return (
    <>
      <Row className="checkbg">
        <Col>
          <h1 style={{ color: "white" }}>Checkout Your Product</h1>
        </Col>
      </Row>

      <Row className="one-row">
        <Col>
          <Row>
            <Col>
              <p>MY CART</p>
            </Col>
          </Row>
          <Row className="line"></Row>
          <Row>
            <Col>
              <h1>hello</h1>
            </Col>
          </Row>
          <Row className="line"></Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <p>Order Summary</p>
            </Col>
          </Row>
          <Row className="line"></Row>
          <Row>
            <Col>
              <h1>hello</h1>
            </Col>
          </Row>
          <Row className="line"></Row>
          <br />
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("Productss", state);
  return {
    userCode: state.user,
  };
};

export default connect(mapStateToProps)(Checkout);
