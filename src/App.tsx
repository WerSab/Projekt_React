import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Playlists } from './pages/Playlists';
import { MusicSearch } from './pages/Musicsearch';
import axios from 'axios';

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    const access_token = new URLSearchParams(window.location.hash).get('#access_token')

    if (access_token) {
      setToken(access_token)
    }

    axios.interceptors.request.use(config => {
      config.headers['Authorization'] = 'Bearer ' + access_token
      return config
    })

    if (!access_token) {
      const url = 'https://accounts.spotify.com/authorize?client_id=3a4d17257c9b4a2e833be08e74c3f54d&response_type=token&redirect_uri=http://localhost:3000/'
      window.location.href = url;
    }

  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Aplikacja React</h1>

            {/* <Playlists/> */}

            <MusicSearch />

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
