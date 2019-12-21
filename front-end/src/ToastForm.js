import React, {Component} from 'react';
import './styles/ToastForm.css';

export default class ToastForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        (async () => {
          const rawResponse = await fetch('http://localhost:3000/toast-handler', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
            },
            body: JSON.stringify(
              {
                time: 10, 
                topping: 'butter',
                username: "username"
              }
            )
          });
          const content = await rawResponse.json();
        
          console.log(content);
        })();
        event.preventDefault();
      }
  
    render() {
      return (
        <div className="form-content">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
                    <label for="timer">Timer</label>
                    <input type="number" className="form-control" id="timer" aria-describedby="timer" name="timer" placeholder="Choose toast time"/>
            </div>

            <div class="form-group">
                    <label for="topping">Topping</label>
                    <input type="text" className="form-control" id="topping" aria-describedby="topping" name="topping" placeholder="Choose toast topping"/>
            </div>
            <button type="submit" className="btn btn-primary button-center">Submit</button>
          </form>
        </div>
      )
    }
  
  }
