import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

export default class NavBra extends Component {
    state = {}
  
    handleItemClickHome = function(){
        document.location = "/"
    }

    handleItemClickAbout = function(){
        document.location = "/about"
    }

    handleItemClickSignin = function(){
        document.location = "/loginpage"
    }
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu stackable>
          <Menu.Item>
            {/* <img src='/logo.png' /> */}
          </Menu.Item>
  
          <Menu.Item
            name='PrimaryHome'
            active={activeItem === 'PrimaryHome'}
            onClick={this.handleItemClickHome}
          >
            Home
          </Menu.Item>
  
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClickAbout}
          >
            About
          </Menu.Item>
  
          <Menu.Item name='sign-in' active={activeItem === 'sign-in'} 
            onClick={this.handleItemClickSignin}>
            Sign-in
          </Menu.Item>
        </Menu>
      )
    }
  }
  