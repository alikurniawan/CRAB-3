import React, { Component } from "react";
import { Card, Icon, Input } from "semantic-ui-react";
import PageControl from "../controll/PageControll";

// const description = [`AliBaba`, `DaniBaba`].join(" ");

class LoginPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <PageControl>
          <Card className="ui grid centered">
            <Card.Content header="Login">Login Center</Card.Content>
            <Card.Content description="">
              <Input
                icon="user secret"
                iconPosition="left"
                placeholder="Username....."
              />
              <Input className="mt-2"
                icon="key"
                iconPosition="left"
                placeholder="Password....."
              />
            </Card.Content>
            <Card.Content extra>
              <Icon name="" />Powered By. Ali Kurniawan 2018
            </Card.Content>
          </Card>
        </PageControl>
      </div>
    );
  }
}

export default LoginPage;
