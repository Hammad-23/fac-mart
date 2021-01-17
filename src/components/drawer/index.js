import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { FiShoppingCart } from "react-icons/fi";
import { Row, Col } from "antd";
import { connect } from "react-redux";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function CustomDrawer(props) {

  let productsInDrawer=[{
     productName: props.userKiId.productName,
     productImg: props.userKiId.productImg,
     price: props.userKiId.productPrice
  }]


  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  console.log("drawer ka props-->", props.userKiId);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Row
        style={{
          backgroundColor: "#222b38",
          height: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col>
          <h1 style={{ color: "white", fontFamily: "sans-serif" }}>Cart</h1>
        </Col>
      </Row>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

      <Col
        style={{
          overflow: "scroll",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
       
      >
        <Col>
         
        </Col>
      </Col>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "28rem",
        }}
      >
        <Col>
          <button
            style={{
              backgroundColor: "#222b38",
              width: "150px",
              height: "2rem",
              color: "white",
              border: "none",
            }}
          >
            View Cart
          </button>
        </Col>
      </Row>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{ color: "white" }}
            onClick={toggleDrawer(anchor, true)}
          >
            {<FiShoppingCart size={25} />}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("drawer component-->", state.user);
  return {
    userKiId: state.user,
  };
};

export default connect(mapStateToProps)(CustomDrawer);
