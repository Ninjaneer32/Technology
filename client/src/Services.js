import React, { Component } from "react";
import axios from "axios";
import {
  Image,
  Grid,
  Card,
  Header,
  Form,
  Input,
  Icon,
  Button,
  Accordion,
  Segment,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import berk from "./Decal Images/berkeleyischool-logo-alternate-blue-lg.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import decal from "./Decal Images/decalberkeleylogo 1.png";
import charlie from "./Leadership Headshots/charlie.jpg";

let endpoint = "http://localhost:8080";
const gridoffset = {
  marginTop: "24px",
  textAlign: "center",
  fontFamily: "Montserrat",
};

const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  lineHeight: "7vw",
  fontSize: "4.5vw",
  color: "#8CD6D1",
  // width: "31vw",
  fontStyle: "normal",
  textAlign: "left",
  marginLeft: "5vw",
  marginBottom: "3vw",
};

const button = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "29px",
  fontSize: "24px",
  color: "#FFFFFF",
  fontStyle: "normal",
  textAlign: "center",
  background: "#8CD6D1",
  marginLeft: "70px",
};
const textstyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: "37px",
  color: "#8CD6D1",
};
const cardstyle = {
  width: "400px",
  // height: "800px",
  marginBottom: "10px",
  marginleft: "20px",
};
const imagestyle = {
  height: "auto",
  maxHeight: "500px",
  width: "auto",
  maxWidth: "400px",
};
const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  lineHeight: "7vw",
  fontSize: "3.5vw",
  color: "#8CD6D1",
  // width: "31vw",
  fontStyle: "normal",
  textAlign: "center",
  marginBottom: "3vw",
  marginTop: "3vw",
};
const link = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#000000",
  textAlign: "center",
  marginLeft: "5vw",
  marginRight: "5vw",
  marginBottom: "5vw",
  marginTop: "1vw",
};
const link2 = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#000000",
  textAlign: "center",
  marginLeft: "5vw",
  marginRight: "5vw",
  marginTop: "-2vw",
};
class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.join = this.join.bind(this);
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  join() {
    console.log(14);
    let email = this.state.email;
    axios
      .post(
        endpoint + "/api/joinnow",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }
  sendData(data) {
    this.props.buttonClick(data);
  }
  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <Header style={mybigtext}> SERVICES</Header>
        <Card.Group centered style={{ marginBottom: "7vw" }}>
          <Card
            style={{
              height: "40vw",
              width: "40vw",
              border: "1px solid #000000",
              boxSizing: "borderBox",
              font: "Montserrat",
              borderRadius: "1vw",
              marginRight: "4vw",
            }}
          >
            <div style={mymidtext}>Consulting</div>
            <div style={link}>
              Consulting teams consist of 2 Project Managers, 4-6 Consultants,
              and 1 Project Mentor, all of whom sign non-disclosure agreements.
              We engage with 5 clients each semester.
              <br></br>
              <br></br>
              <strong style={{ fontWeight: "bold" }}>
                Contact us below to receive our consulting pitch slide deck and
                work samples.{" "}
              </strong>
            </div>
          </Card>
          <Card
            style={{
              height: "40vw",
              width: "40vw",
              border: "1px solid #000000",
              boxSizing: "borderBox",
              font: "Montserrat",
              borderRadius: "1vw",
            }}
          >
            <div style={mymidtext}>Sponsorships</div>
            <div style={link2}>
              We offer sponsorship opportunities for our clients. We possess a
              significant footprint on campus through our 2-unit course for 90
              students, weekly workshops open to all UC Berkeley students with
              an average of 50 attendees, and highly coveted sponsored events.
              <br /> <br />
              <strong style={{ fontWeight: "bold" }}>
                {" "}
                Contact us below to receive our sponsorship booklet.{" "}
              </strong>{" "}
            </div>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
export default Education;
