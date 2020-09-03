import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  postSelectedHandler = (id) => {
    // ALTERNATIVE
    //this.setState({ selectedPostId: id });
    //this.props.history.push({ pathname: "/posts/" + id });
    this.props.history.push("/posts/" + id);
  };

  render() {
    let posts = (
      <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>
        Something went wrong!
      </p>
    );

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // ALTERNATIVE
          // <Link to={"/posts/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //console.log(response);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        //console.log(error);
        this.setState({ error: true });
      });
  }
}

export default Posts;
