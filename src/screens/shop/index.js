import React from "react";
import { Row, Col } from "antd";
import NavBar from "../../components/navbar";
import { useHistory } from "react-router-dom";
import "./style.css";
import Watch from "../../assets/product4.jpg";
import CustomDrawer from "../../components/drawer";
import Footer from "../../components/footer";
import Product4 from "../../assets/product5.jpg";
import Product6 from "../../assets/product6.jpg";
import Product7 from "../../assets/product7.png";
import SimpleSelect from '../../components/select'

function Shop(props) {
  const openDetailHandler = (data) => {
    history.push({ pathname: "/productview", state: data });
    console.log(data);
  };
  const cards = [
    {
      productName: "Himiscus Flower",
      price: "$7.00",
      image: Product4,
    },
    {
      productName: "Dimiscus Flower",
      price: "$8.00",
      image: Watch,
    },
    {
      productName: "Chimiscus Flower",
      price: "$10.00",
      image: Product6,
    },
    // {
    //   productName: "Chimiscus Flower",
    //   price: "$9.00",
    //   image: Product7,
    // },
  ];
  let history = useHistory();
  return (
    <>
      <Row className="contain">
        <NavBar />
      </Row>

      <Row className="row-center">
        <Col>
          <Row>
            <h1>Filter By</h1>
          </Row>
          <Row>
            <SimpleSelect title='Price' text='Filter your product'/>
          </Row>
          
    
        </Col>

      <Row  style={{display:'flex',justifyContent:'space-around',width:'100%'}}>
            {cards.map((item) => {
              return (
                <Col
                 
                  span={8}
                  onClick={() => openDetailHandler(item)}
                  className="cards"
                  style={{
                    border: "1px solid grey",
                    backgroundColor: "#e3e3e3",
                  }}
                >
                  <img
                    src={item.image}
                    height="200px"
                    width="250px"
                    alt={"productPic"}
                  />
                  <h3>{item.productName}</h3>
                  <h4>{item.price}</h4>
                </Col>
              );
            })}

      </Row>
        
      </Row>



      <Footer/>
    </>
  );
}

export default Shop;
