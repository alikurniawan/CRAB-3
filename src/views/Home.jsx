import React, { Component } from "react";
// import {Alert, Button} from 'reactstrap';
import PageControll from "../controll/PageControll";
import EmbedMov from "../model/EmbedMov";

class Home extends Component {
  state = {};

  btnLogin = function() {
    let alertOne = document.getElementById("alertOne");

    alertOne.slideUp();
  };

  render() {
    return (
      <div>
        <PageControll>
          <EmbedMov />
        </PageControll>
      </div>
    );
  }
}

export default Home;
