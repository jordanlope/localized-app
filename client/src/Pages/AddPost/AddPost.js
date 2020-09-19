import React, { Component } from 'react';
import './AddPost.css';
import { withRouter } from 'react-router-dom';

export default class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            description: '', 
            organization: '',
            postTitle: ''
        }
    }

    render() {
        return (
            <form
                className="SignupForm"
                >
                <h1>Add Post</h1>
                <div className='organization'>
                    <label>
                        Organization:
                    </label>

                    <input
                        type='text'
                        required
                        name='organization'/>
                </div>
                <div className='description'>
                    <label >
                        Description:
                    </label>

                    <input
                        type='text'
                        required
                        name='description'/>
                </div>
                <div className='postTitle'>
                    <label>
                        Post Title:
                    </label>

                    <input
                        type='text'
                        required
                        name='postTitle'/>
                </div> 
                <button type='submit'>
                    Complete
                </button>
            </form>
        );
    }
}