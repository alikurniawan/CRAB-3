import React, { Component } from 'react';
import {Alert, Button} from 'reactstrap';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Home</h1>

                <Alert id="alertOne" color="primary">
                    Welcome to Ali Kurniawan
                </Alert>

                <Button color="primary">Login</Button>
                
            </div>
            
          );
    }
}
 
export default Home;