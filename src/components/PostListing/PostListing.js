/*
This component exists to list posts such as tutorial or blog post
*/

import React from "react";
import Link from "gatsby-link";

import styles from "./PostListing.module.css"

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
        <div className={styles.post}>
          <Link to={post.path} key={post.title}>
            <h1>{post.title}</h1>
          </Link>
          <Link
            to={post.path}
            className={styles.summarytext}
            >
            <p>{post.excerpt}</p>
          </Link>
        </div>
        ))}
      </div>
    );
  }
}

export default PostListing;