import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import CustomDrawer from "../../components/drawer";
import "./style.css";
import {AiOutlineMenu} from 'react-icons/ai'

function NavBar() {
  const [login, setLogin] = useState(true);
  const [logout, setLogout] = useState(false);
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
  return (
    <>
      <div className="navMain">
        <div className="logo">
          <h1
            onClick={() => {
              history.push("/");
            }}
            style={{ color: "white", cursor: "pointer" }}
          >
            FacMart
          </h1>
        </div>
        <div className="headerLabel">
          <p onClick={()=>{history.push('/shop')}} style={{ color: "white", cursor: "pointer" }}>Teas</p>
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
        <div className='menu'>
          <AiOutlineMenu  size={25} color='white'/>
          </div>
      </div>
    </>
  );
}
export default NavBar;
