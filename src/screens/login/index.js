import React, { useState } from "react";
import { Row, Col } from "antd";
import "./style.css";
import Input from "../../components/input";
import OutlinedButtons from "../../components/button";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../config/firebase";
import firebase from "firebase";
import { updateUser } from "../../store/actions/userActions";
import { connect } from "react-redux";

function LogIn(props) {
  let history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPassword] = useState("");
  const email = (e) => {
    const val = e.target.value;
    setUserEmail(val);
    console.log(val);
  };
  const pass = (e) => {
    const val = e.target.value;
    setUserPassword(val);
    console.log(val);
  };
  console.log(userEmail);
  const onLogin = async function () {
    try {
      await loginUser(userEmail, userPass);
      alert("User Successfully Logged In!");
      let userId = firebase.auth().currentUser.uid;
      // props.updateTheUser(userId);

      localStorage.setItem("ID", userId);
      history.push("/");
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
              Log In
            </h1>
          </Col>
          <Col>
            <Input onChange={email} title="Email" />
          </Col>
          <Col>
            <Input type="password" onChange={pass} title="Password" />
          </Col>
          <Col>
            <OutlinedButtons onClick={onLogin} text="Log In" />
          </Col>
          <Col>
            <p
              onClick={() => {
                history.push("/signup");
              }}
              style={{ cursor: "pointer" }}
            >
              Don't have an account? Register
            </p>
          </Col>
        </Col>
      </Row>
    </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
