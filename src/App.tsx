import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Playlists } from './pages/Playlists';
import { MusicSearch } from './pages/Musicsearch';
import axios from 'axios';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    let access_token = new URLSearchParams(window.location.hash).get('#access_token')

    if (access_token) {
      sessionStorage.setItem('token', JSON.stringify(access_token))
    } else {
      access_token = JSON.parse(sessionStorage.getItem('token'))
    }

    axios.interceptors.request.use(config => {
      config.headers['Authorization'] = 'Bearer ' + access_token
      return config
    })

    if (!access_token) {
      const url = 'https://accounts.spotify.com/authorize?client_id=3a4d17257c9b4a2e833be08e74c3f54d&response_type=token&redirect_uri=http://localhost:3000/'
      window.location.href = url;
    }
    setToken(access_token)

  }, [])

  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <div className="container">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">MusicApp</a>

            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                <li className="nav-item">
                  <NavLink className="nav-link" to="/playlists">Playlists</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/search">Search</NavLink>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>



      <div className="container">
        <div className="row">
          <div className="col">

            <Switch>
              <Redirect path="/" exact={true} to="/playlists" />
              <Route path="/playlists" exact={true} component={Playlists} />
              <Route path="/search" component={MusicSearch} />
              <Route path="**" component={() => <h1>Page not found!</h1>} />
            </Switch>


          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
