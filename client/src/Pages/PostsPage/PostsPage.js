import React from 'react';
import './PostsPage.css';
import { Link } from 'react-router-dom';
// import MainImage from '../../Assets/michael-bourgault-YvvHEQNgMcU-unsplash.jpg';
// import FarmHousesService from '../../services/farmHouses-api-service';
// import FarmHouseListContext from '../../contexts/FarmHouseListContext';

export default class PostsPage extends React.Component {
 // static contextType = FarmHouseListContext

  componentDidMount() {
    // this.context.clearError()
    // FarmHousesService.getFarmHouses()
    //   .then(this.context.setFarmHouseList)
    //   .catch(this.context.setError)
  }

  render() {
    const postList  = [{
        id: 1,
        postTitle: "Get 20% off your next Insomnia cookie",
        description: "nim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima v",
        organization: "Insomnia"
    },
    {
        id: 2,
        postTitle: "Get 50% off your next Grubhub order",
        description: "nim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima v",
        organization: "Grubhub"
    },
    {
        id: 3,
        postTitle: "Get 25% off your next Walmart package",
        description: "nim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima v",
        organization: "Walmart"
    }]

    return (
      <>
        {/* <img className='MainImage' src={MainImage} alt={"Logo"} /> */}
        <h1 className='title'>Localized Posts</h1>
        <ul className='PostList'>
          {
            postList.map(post =>
              <li key={post.organization}>
                {/* <Link to={`/post/${post.id}`}> */}
                  <h2>{post.postTitle}</h2>
                  <p>{post.description}</p>
                {/* </Link> */}
              </li>
          )}
        </ul>
      </>
    );
  }
}