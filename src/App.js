import logo from './logo.svg';
import './App.css';
import Post from './components/post';
import { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor () {
    super()
    this.state = {
      posts : []
    }
  }
  
  componentDidMount = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({data}) =>{
      this.setState({
        posts : data
      })
    });
  }

  render = () => (
    <div className="wrapper">
      <ul>{this.state.posts.map(({ id, title,body}) => <Post key = {id} id = {id} title = {title} body = {body}/>)}
      </ul>
    </div>
  );
}

export default App;
