import React, { Component } from 'react';
import axios from 'axios';


export default class PostApi extends Component {
  constructor() {
    super();
    this.state = {
    
      id:'',
      title: '',
      body: '',
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { id, title, body } = this.state;

    axios.post('https://jsonplaceholder.typicode.com/posts', { id, title, body})
      .then((result) => {
        //access the results here....
        console.log('posted data');
        console.log(result.data);
      });
  }
  render() { 
    const {  id, title, body } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          placeholder="Id : example:1,2,3..."
          type="number"
          name="id"
          value={id}
          onChange={this.onChange}
        />
        <input
          placeholder="Title"
          type="text"
          name="title"
          value={title}
          onChange={this.onChange}
        />
        <input
        placeholder="Body"
          type="text"
          name="body"
          value={body}
          onChange={this.onChange}
        />
         <button type="submit">Add</button>
      </form>
    );
  }
}