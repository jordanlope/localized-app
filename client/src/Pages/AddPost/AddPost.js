import React, { Component } from 'react';
import './AddPost.css';
import PostAPIService from '../../services/post-api-service';
import { withRouter } from 'react-router-dom';

class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            description: '', 
            businessid: null,
            posttitle: ''
        }
    }

    businessIdChange(id) {
        this.setState({
            businessid: id
        })
    }

    descriptionChange(description) {
        this.setState({
            description
        })
    }

    postTitleChange(posttitle) {
        this.setState({
            posttitle
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()

        const {
            description,
            posttitle,
            businessid
        } = this.state;

        const newPost = {
            businessid,
            posttitle,
            description
        }

        PostAPIService.post(newPost)
        .then(data => {
            this.setState({
                businessid: null, 
                posttitle: '',
                description: ''
            })

            this.props.history.push('/')
        }).catch(res => {
            console.log(res.error)
            this.setState({ error: res.error })
        })
    }

    render() {
        return (
            <form
                className="SignupForm"
                onSubmit={this.handleSubmit}>
                <h1>Add Post</h1>
                <div className='businessId'>
                    <label>
                        Business Id:
                    </label>

                    <input
                        type='number'
                        required
                        name='businessId'
                        onChange={e => this.businessIdChange(e.target.value)}/>
                </div>
                <div className='description'>
                    <label >
                        Description:
                    </label>

                    <input
                        type='text'
                        required
                        name='description'
                        onChange={e => this.descriptionChange(e.target.value)}/>
                </div>
                <div className='postTitle'>
                    <label>
                        Post Title:
                    </label>

                    <input
                        type='text'
                        required
                        name='postTitle'
                        onChange={e => this.postTitleChange(e.target.value)}/>
                </div> 
                <button type='submit'>
                    Complete
                </button>
            </form>
        );
    }
}

export default withRouter(AddPost);