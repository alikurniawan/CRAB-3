import React, { Component } from 'react';
import {Container} from 'reactstrap'
import {Navigation} from '../model/Navigation'

const PageControl = props => {
    return(
        <div>
            <Container>
                <Navigation />
                <h1>Navigation</h1>
            {props.children}
            </Container>
        </div>
        
    )
}
 
export default PageControl;