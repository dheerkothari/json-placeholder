import "../App.css";
import Post from "../components/post";
import { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      loading: true,
    });
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      this.setState({
        posts: data,
        loading: false,
      });
    });
  };

  render = () =>
    this.state.loading ? (
      <h1>loading...</h1>
    ) : (
        <ul>
          {this.state.posts.map(({ id, title, body }) => (
            <Post key={id} id={id} title={title} body={body} />
          ))}
        </ul>
    );
}

export default Posts;
