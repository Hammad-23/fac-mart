import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import "./style.css";
import { UserOutlined } from "@ant-design/icons";
import Input from "../../components/input";
import OutlinedButtons from "../../components/button";
import { registerUser } from "../../config/firebase";
import { useHistory } from "react-router-dom";

function SignUp() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const fullName = (e) => {
    const val = e.target.value;
    setName(val);
    console.log(val);
  };
  const email = (e) => {
    const val = e.target.value;
    setUserEmail(val);
    console.log(val);
  };
  const pass = (e) => {
    const val = e.target.value;
    setPassword(val);
    console.log(val);
  };

  const onRegister = async function () {
    try {
      await registerUser(userEmail, password);
      alert("User is registered Successfully!");

      history.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Col className="bg">
      <Row
        style={{ marginTop: "10rem" }}
        display="flex"
        justify="center"
        align="middle"
      >
        <Col className="loginCard">
          <Col>
            <h1 style={{ fontFamily: "sans-serif", fontSize: "35px" }}>
              Sign Up
            </h1>
          </Col>
          <Col>
            <Input onChange={fullName} title="FullName" />
          </Col>
          <Col>
            <Input onChange={email} title="Email" />
          </Col>
          <Col>
            <Input onChange={pass} type="password" title="Password" />
          </Col>
          <Col>
            <OutlinedButtons onClick={onRegister} text="Sign Up" />
          </Col>
        </Col>
      </Row>
    </Col>
  );
}

export default SignUp;
