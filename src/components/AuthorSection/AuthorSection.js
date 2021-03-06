import React from "react";

import styles from "./AuthorSection.module.scss"

import Link from "gatsby-link"
import Img from "gatsby-image"

export default class AuthorSection extends React.Component {
  render() {
    const img = this.props.images.find(image => image.node.relativePath === this.props.person.frontmatter.image)
      || this.props.images.find(image => image.node.relativePath === "notfound.jpg")
    return (
      <section className={styles.teamMemberSection}>
        <div className={styles.teamMemberPhotoContainer}>
          <Img sizes={img.node.childImageSharp.sizes} className={styles.teamMemberPhoto} />
        </div>
        <div className={styles.teamMemberDetailsContainer}>
          <h2 className={styles.teamMemberName}>{this.props.person.frontmatter.name}</h2>
          <p className={styles.teamMemberTitle}>{this.props.person.frontmatter.bio}, <span className={styles.teamMemberLocation}>{this.props.person.frontmatter.location}</span></p>
          <p>{this.props.person.frontmatter.miniBlurb} <Link to={this.props.person.fields.internalURL}>Read more.</Link></p>
        </div>
      </section>
    )
  }
}