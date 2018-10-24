import React from 'react';
import {Container} from 'reactstrap'
// import {Navigationx} from '../model/Navigation'
import NavBra from '../model/NavBra'

const PageControl = props => {
    return(
        <div>
            <Container>
                <NavBra />
                {/* <h1>Navigation</h1> */}
                {props.children}
            </Container>
        </div>
        
    )
}
 
export default PageControl;