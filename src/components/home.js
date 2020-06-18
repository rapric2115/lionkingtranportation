import React, {Component} from 'react';
import Buttons from './buttons';
//import Hours from './hours';
import Ruta from './ruta';
import firebase from './firebase';


class Home extends Component {
    constructor(){
        super();
        this.state = {
          user: null
        };
      }
  
      componentDidMount() {
        // Obteniendo los datos de la base de datos sobre el usuarios
        const ref = firebase.database().ref('user');
  
        ref.on('value', snapshot => {
          let FUser = snapshot.val();
          console.log(FUser);
          this.setState({user: FUser});
        })
      }

   
    render() {
        return(
            <div>
                <Buttons />
                
                <Ruta user={this.state.user}/>
            </div>
        )
    }
}

export default Home;