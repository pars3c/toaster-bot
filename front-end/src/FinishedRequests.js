import React, {Component} from 'react';
import './styles/ToastForm.css';

export default class FinishedRequests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {

        const rawResponse = fetch('http://localhost:3000/finished-orders', {
            method: 'GET',
        });
        console.log(rawResponse)
        /*this.setState({
            orders: rawResponse.json()
            });
        */
        
        //console.log(this.state.orders);
    }
    render() {
      return (
        <div class="container">

            <div class="row">
                <div class="col-md-4">Column left</div>
                <div class="col-md-4">Column center</div>
                <div class="col-md-4">Column right</div>
            </div>
        </div>

      )
    }
  
  }
