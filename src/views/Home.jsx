import React, { Component } from 'react';
import {Alert, Button} from 'reactstrap';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div>   
                <h1>Home</h1>

                    <Alert id="alertOne" color="success">
                        Welcome to Ali Kurniawan
                    </Alert>

                    <Button color="primary">Login</Button>

                    
                </div>
                <div>
                    <h1>Hello You</h1>
                </div>
                
            </div>
            
          );
    }
}
 
export default Home;