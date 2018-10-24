import React from 'react';

// import {Navigationx} from '../model/Navigation'
import NavBra from '../model/NavBra'


const PageControl = props => {
    return(
        <div>
            <div className="mt-2">
                <NavBra />
                {props.children}
             </div>
        </div>
        
    )
}
 
export default PageControl;