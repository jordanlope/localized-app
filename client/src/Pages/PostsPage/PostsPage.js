import React from 'react';
import './PostsPage.css';
import { Link } from 'react-router-dom';
// import MainImage from '../../Assets/michael-bourgault-YvvHEQNgMcU-unsplash.jpg';
// import FarmHousesService from '../../services/farmHouses-api-service';
// import FarmHouseListContext from '../../contexts/FarmHouseListContext';
import PostService from '../../services/post-api-service';
import PostListContext from '../../contexts/PostListContext';

export default class PostsPage extends React.Component {
  static contextType = PostListContext

  componentDidMount() {
    this.context.clearError()
    PostService.getPosts()
      .then(this.context.setPostList)
      .catch(this.context.setError)
  }

  render() {

    const { postList } = this.context ? this.context : []

    return (

      <>
        {/* <img className='MainImage' src={MainImage} alt={"Logo"} /> */}
        <h1 className='title'>Localized Posts</h1>
        <ul className='PostList'>
          {
            postList.map(post =>
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <h2>{post.posttitle}</h2>
                  {/* <p>{post.description}</p> */}
                </Link>
              </li>
          )}
        </ul>
      </>
    );
  }
}