import React, { Component } from 'react';
import {Alert, Button} from 'reactstrap';
import PageControll from '../controll/PageControll'

class Home extends Component {
    state = {  }

    btnLogin = function(){
        let alertOne = document.getElementById("alertOne");

        alertOne.slideUp()
    }

    render() { 
        return (
            <div>
                <PageControll>
                    <div>   
                    <h1>Home</h1>

                        <Alert id="alertOne" color="success">
                            Welcome to Ali Kurniawan
                        </Alert>

                        <Button id="btnLogin" onClick={this.btnLogin} color="primary">Login</Button>
                    </div>
                    <div>
                        <h1>Hello You</h1>
                    </div>
                </PageControll>  
            </div>
            
          );
    }
}
 
export default Home;