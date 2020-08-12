import React, { Component } from "react";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
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
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
    return <section className="Posts">{posts}</section>;

    //     <section>
    //     <FullPost id={this.state.selectedPostId} />
    //   </section>
    //   <section>
    //     <NewPost />
    //   </section>
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
