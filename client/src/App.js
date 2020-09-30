import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import NavBar from './Pages/NavBar/NavBar';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import PostsPage from './Pages/PostsPage/PostsPage';
import AddPost from './Pages/AddPost/AddPost';
import PostPage from './Pages/PostPage/PostPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <main className="App-main">
        <Switch>
          <Route exact path='/' component={PostsPage}/>
          {/* <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/> */}
          <Route path='/post/:postId' component={PostPage} />
          <Route path='/addpost' component={AddPost}/>
          <Route render={ () => (
              <ErrorPage errorMessage={'Page not found'}/>
            )} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
