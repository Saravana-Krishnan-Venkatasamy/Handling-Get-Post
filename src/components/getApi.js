
import React, { Component } from 'react';

import axios from "axios";


export default class GetApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts') //http://localhost:3000/posts
      .then(res => {
         
        const posts = res.data.map(obj => ({id: obj.id,title: obj.title,body: obj.body}));
        this.setState({ posts });
      });
  }

  renderTableData() {
    return this.state.posts.map((posts,index) => {
       const { id,title,body } = posts //destructuring
       return (
       
          <tr key={index}>
             <td>{id}</td>
             <td>{title}</td>
             <td>{body}</td>
             
          </tr>
       )
    })
 }

 render() {
  return (
     <div>
        <h1 id="title">React Dynamic Table</h1>
        <table >
           <th>
              <td> ID </td>
              <td> Title </td>
              <td> Body </td>
           </th>
           <tbody>
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
  )
}
 

}
