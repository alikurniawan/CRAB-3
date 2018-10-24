import React from 'react';
import {Container} from 'reactstrap'
// import {Navigationx} from '../model/Navigation'
import NavBra from '../model/NavBra'


const PageControl = props => {
    return(
        <div>
            <Container>
                <div className="mt-2">
                    <NavBra />
                    {/* <h1>Navigation</h1> */}
                    {props.children}
                </div>
                
            </Container>
        </div>
        
    )
}
 
export default PageControl;