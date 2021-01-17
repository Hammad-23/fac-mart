import React, { useEffect } from "react";
import { Row, Col } from "antd";
import "./style.css";
import Watch from "../../assets/product4.jpg";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../store/actions/userActions";

function ProductView(props) {
  let history = useHistory();
  const location = useLocation();
  let userid = localStorage.getItem("ID");
  console.log(location);
  useEffect(() => {}, [userid]);

  let allSelectedProducts = {
    productImg: location.state.image,
    productName: location.state.productName,
    productPrice: location.state.price,
  };

  const addToCart = () => {
    if (!userid) {
      alert("Login First");
    }
  };
  const buyNow = () => {
    if (!userid) {
      alert("Login First");
    } else {
      props.updateTheUser(allSelectedProducts);
      history.push("/checkout");
    }
  };

  return (
    <>
      <Row style={{ backgroundColor: "black", opacity: "0.9" }}>
        <NavBar />
      </Row>
      <Row className="top">
        <Col>
          <h1 style={{ color: "white" }}>View Your Product</h1>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "15rem",
        }}
      >
        <Col
          span={12}
          style={{
            backgroundColor: "#ededed",
            border: "1px solid grey",
          }}
        >
          <img src={location.state.image} height="350px" width="350px" />
        </Col>
        <Col span={12}>
          <Col>
            <h1>{location.state.productName}</h1>
          </Col>
          <Col>
            <p>{location.state.price}</p>
          </Col>
          <Col>
            <p>
              I am a product description. I'm great place to add more details
              about your product such as size.
            </p>
          </Col>
          <Col>
            <span>Size: </span>
            <span>
              <select style={{ width: "200px", height: "30px" }}>
                <option>125GR</option>
                <option>125GR</option>
                <option>125GR</option>
                <option>125GR</option>
              </select>
            </span>
          </Col>
          <Col style={{ marginTop: "2rem" }}>
            <span>Quantity:</span>
            <span>
              <input
                min={0}
                type="number"
                style={{ width: "80px", height: "50px" }}
              />
            </span>
          </Col>
          <Col style={{ marginTop: "2rem" }}>
            <button
              style={{
                backgroundColor: "white",
                border: "1px solid black",
                width: "250px",
                height: "40px",
              }}
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </Col>

          <Col style={{ marginTop: "1rem" }}>
            <button
              onClick={buyNow}
              style={{
                backgroundColor: "#222b38",
                border: "1px solid black",
                width: "250px",
                height: "40px",
                color: "white",
              }}
            >
              Buy Now
            </button>
          </Col>
        </Col>
      </Row>

      <Row style={{ marginTop: "12rem" }}>
        <Footer />
      </Row>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("state-->", state);
  return {
    userCode: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTheUser: (userId) => dispatch(updateUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
