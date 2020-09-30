import React, { Component } from 'react';
import './PostPage.css'
import PostService from '../../services/post-api-service'
import PostContext from '../../contexts/PostListContext'

export default class Post extends Component {
    static contextType = PostContext

    componentDidMount() {
        this.context.clearError()
        PostService.getPost(this.props.match.params.postId)
            .then(this.context.setPost)
            .catch(this.context.setError)
    }

    render() {
        const { post } = this.context ? this.context : {}

        console.log('This is post id:', this.props.match.params.postId)

        return (
            <section className="Post">
                <h2>Post Details</h2>
                <p>{post.posttitle}</p>
                <p>{post.description}</p>
            </section>
        )
    }
}