import React, {Component} from 'react';
import Buttons from './buttons';
//import Hours from './hours';
import Ruta from './ruta';


class Home extends Component {
    constructor(){
        super();
    }
    
    render() {
        return(
            <div>
                <Buttons />
                
                <Ruta />
            </div>
        )
    }
}

export default Home;