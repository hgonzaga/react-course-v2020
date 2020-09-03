import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: "",
  };

  componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams() {
    const query = new URLSearchParams(this.props.location.search);

    for (let params of query.entries()) {
      if (this.state.courseTitle !== params[1]) {
        this.setState({ courseTitle: params[1] });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
