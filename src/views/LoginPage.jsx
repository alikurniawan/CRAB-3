import React, { Component } from "react";
import { Card, Icon, Input, Button } from "semantic-ui-react";
import PageControl from "../controll/PageControll";

// const description = [`AliBaba`, `DaniBaba`].join(" ");

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  state = {};

  LoginProgress = function() {
    alert("Login");
  };

  render() {
    return (
      <div>
        <PageControl>
          <form onSubmit={this.handleSubmit}>
            <Card className="ui grid centered mt-5">
              <Card.Content header="Login">Login Center</Card.Content>
              <Card.Content description="">
                <Input
                  icon="user secret"
                  iconPosition="left"
                  placeholder="Username....."
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <Input
                  className="mt-2"
                  icon="key"
                  iconPosition="left"
                  placeholder="Password....."
                />
                <div className="mt-2">
                  <Button attached="left" color="grey">
                    Signup
                  </Button>
                  <Button
                    attached="right"
                    color="blue"
                    onClick={this.LoginProgress}
                  >
                    Login
                  </Button>
                </div>
              </Card.Content>
              <Card.Content extra>
                <Icon name="" />
                Powered By. Ali Kurniawan 2018
              </Card.Content>
            </Card>
          </form>
        </PageControl>
      </div>
    );
  }
}

export default LoginPage;
