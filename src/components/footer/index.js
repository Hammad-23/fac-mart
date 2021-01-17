import React from 'react'
import {Row,Col} from 'antd'


function Footer() {
    return(
        <>

       {/* footer starts */}
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#ededed",
          height: "25rem",
        }}
      >
        <Col>
          <h1>Get to know bloom's tea is Better.</h1>
          <p>Shop</p>
          <p>Extras</p>
          <p>About</p>
          <p>Contact</p>
          <Col style={{ marginTop: "5rem" }}>
            <h4>
              <u>Visit Stores</u>
            </h4>
            <p>Customer Service: 9234455</p>
          </Col>
        </Col>
        <Col>
          <Col style={{ borderBottom: "1px solid grey" }}>
            <h2>help</h2>
          </Col>
          <p>FAQ</p>
          <p>Shipping & Returns</p>
          <p>Store Policy</p>
          <p>Payment Methods</p>
          <Col style={{ marginTop: "5rem" }}>
            <input type="text" style={{ height: "2rem", width: "300px" }} />
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                height: "2.5rem",
                width: "150px",
                border: "1px solid grey",
              }}
            >
              Subscribe
            </button>
          </Col>
        </Col>
        <Col>
          <Col style={{ borderBottom: "1px solid grey" }}>
            <h2>Follow Us</h2>
          </Col>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </Col>
      </Row>

      <Row
        style={{
          backgroundColor: "#ededed",
          height: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col>
          <p>Developed By Syed Hammad</p>
        </Col>
      </Row>
      {/* footer ends */}









        </>
    )
}
export default Footer