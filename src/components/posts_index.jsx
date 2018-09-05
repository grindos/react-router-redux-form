import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}
PostsIndex.propTypes = {
  getPosts: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getPosts: fetchPosts,
};

export default connect(null, mapDispatchToProps)(PostsIndex);
