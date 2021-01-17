import React, { useEffect, useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import Watch from "../../assets/product4.jpg";
import CustomDrawer from "../../components/drawer";
import Footer from "../../components/footer";
import Product4 from '../../assets/product5.jpg'
import Product6 from '../../assets/product6.jpg'
import Product7 from '../../assets/product7.png'
function Landing() {
  useEffect(() => {
    fetch("https://api.mocki.io/v1/b043df5a")
      .then((res) => res.json())
      .then((res) => console.log("res-->", res));
  }, []);
  const [login, setLogin] = useState(true);
  const [logout, setLogout] = useState(false);
  const cards = [
    {
      productName: "Himiscus Flower",
      price: "$7.00",
      image: Product4
    },
    {
      productName: "Dimiscus Flower",
      price: "$8.00",
      image: Watch
    },
    {
      productName: "Chimiscus Flower",
      price: "$10.00",
      image: Product6
    },
    {
      productName: "Chimiscus Flower",
      price: "$9.00",
      image: Product7
    },
    // {
    //   productName: "Chimiscus Flower",
    //   price: "$9.00",
    //   image: Product7
    // },
  ];
  let userId = localStorage.getItem("ID");

  useEffect(() => {
    if (!userId) {
      setLogin(true);
      setLogout(false);
    } else {
      setLogout(true);
      setLogin(false);
    }
  }, [userId]);
  let history = useHistory();
  const openDetailHandler=(data)=>{
    history.push({pathname:'/productview',state:data})
console.log(data)
  }
  return (
    <>
      <div className="container">
        <div className="navMain">
          <div className="logo">
            <h1 style={{ color: "white" }}>FacMart</h1>
          </div>
          <div className="headerLabel">
            <p style={{ color: "white", cursor: "pointer" }}>Teas</p>
          </div>
          <div className="headerLabel">
            <p style={{ color: "white", cursor: "pointer" }}>Extras</p>
          </div>
          <div className="headerLabel">
            <p style={{ color: "white", cursor: "pointer" }}>About</p>
          </div>
          <div className="headerLabel">
            <p style={{ color: "white", cursor: "pointer" }}>Contact</p>
          </div>
          <div className="headerLabel">
            {login && (
              <p
                onClick={() => {
                  history.push("/login");
                }}
                style={{ color: "white", cursor: "pointer", fontSize: "25px" }}
              >
                Log In
              </p>
            )}

            {logout && (
              <p
                onClick={() => {
                  localStorage.removeItem("ID");
                  setLogin(true);
                  setLogout(false);
                }}
                style={{ color: "white", cursor: "pointer", fontSize: "25px" }}
              >
                Log Out
              </p>
            )}
          </div>
          <div>
            <CustomDrawer />
          </div>
        </div>

        <div className="cent">
          <p className="centText">It's Always a Tea Time</p>
        </div>
        <div>
          <button className="btncent" style={{ color: "white" }}>
            Shop Now
          </button>
        </div>
      </div>
      {/* container finish */}

      <div className="middle">
        <div className="box"></div>
        <div>
          <p id="text">New Arrivals</p>
        </div>
        <div className="box"></div>
      </div>

      <div className="check">
        <p>hello! We have all types of fresh and organic teas, Check it out</p>
      </div>

      {/* cards row starts here */}
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "7rem",
        }}
      >
        {cards.map((item) => {
          return (
            <Col
              span={6}
              onClick={() =>openDetailHandler(item)}
              className="cards"
              style={{ border: "1px solid grey", backgroundColor: "#e3e3e3" }}
            >
              <img src={item.image} height="200px" width="250px" alt={'productPic'} />
              <h3>{item.productName}</h3>
              <h4>{item.price}</h4>
            </Col>
          );
        })}
      </Row>
      {/* cards row ends here */}

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4rem",
        }}
      >
        <Col>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              height: "2.5rem",
              width: "150px",
              border: "1px solid grey",
            }}
          >
            Shop All
          </button>
        </Col>
      </Row>
      <Row className="blogs">
        <Col>
          <h1>Read Our Blog</h1>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1f1f29",
          height: "30rem",
        }}
      >
        <Col>
          <h3 style={{ color: "white" }}>
            hellosdjsdjklsjvklsjvkljkcvjaskljlsdj
          </h3>
        </Col>
      </Row>

      <Footer />
    </>
  );
}

export default Landing;
