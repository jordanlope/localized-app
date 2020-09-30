import React, { Component } from 'react'

const PostListContext = React.createContext({
    postList: [],
    post: {},
    error: null,
    setError: () => {},
    clearError: () => {},
    setPostList: () => {},
})

export default PostListContext

export class PostListProvider extends Component {
    state = {
        postList: [],
        post: {},
        error: null,
    }

    setPostList = postList => {
        this.setState({ postList })
    }

    setPost = post => {
        this.setState({ post })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            postList: this.state.postList,
            post: this.state.post,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setPost: this.setPost,
            setPostList: this.setPostList
        }

        return (
            <PostListContext.Provider value={value}>
                {this.props.children}
            </PostListContext.Provider>
        )
    }
}