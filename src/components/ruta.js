import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import DatePic from './datePicker';
import Map from './googleMap';

class Ruta extends Component {

    constructor() {
        super();
        this.state = {
            par: false
        }

        this.handleParada = this.handleParada.bind(this);
    }

    handleParada() {
        const check = document.getElementById('parada').checked;
        if(check === true) {
            this.setState({par: true})
        } else {
            this.setState({par: false})
        }
        console.log(check);
    }

    render() {
        return (
            <Form>
                 <Form.Row>
                    <Col>
                    <Form.Label>Punto Partida</Form.Label>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Label>Destino</Form.Label>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Form.Label>Fecha y hora Recogida</Form.Label>
                    <DatePic/>
                </Form.Row>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Parada" id="parada" onClick={this.handleParada}/>
                </Form.Group>
                { this.state.par === true && (
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Lugar Parada</Form.Label>
                    <Form.Control type="text" placeholder="Distrito Nacional, Santo Domingo" />
                </Form.Group>
                )}
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Anadir Regreso" />
                </Form.Group>
                <Form.Group>
                    <Map />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Punto Partida</Form.Label>
                    <Form.Control type="text" placeholder="Distrito Nacional, Santo Domingo" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Destino</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha</Form.Label>                    
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
        )
    }
}

export default Ruta;