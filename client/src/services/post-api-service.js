import config from '../config'

const PostApiService = {
    getPosts() {
        return fetch(`${config.API_ENDPOINT}/posts`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getPost(postId) {
        return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    post(newPostValues) {
        return fetch(`${config.API_ENDPOINT}/posts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newPostValues)
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default PostApiService