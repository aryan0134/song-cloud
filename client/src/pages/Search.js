import React, {useEffect, useState} from 'react'
import './Search.css';
import axios from 'axios';

function Search() {
  // const CLIENT_ID = "c8cdda9b5f474d3f837a090b38bdc62f"
  // const REDIRECT_URI = "http://localhost:3000/Search"
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  // const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    // getToken()


    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])

// const logout = () => {
//     setToken("")
//     window.localStorage.removeItem("token")
// }
  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search?type=album&include_external=audio", {
      headers: {
        Authorization: `Bearer ${token}`
      },
        params: {
            q: searchKey,
            type: "artist"
        }
    })

    console.log(data)
    setArtists(data.albums.items)
}
const renderArtists = () => {
  return artists.map(artist => (
      <div key={artist.id} className="api-div" >
          {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
          <h1>{artist.name}</h1>
      </div>
  ))
}
// const artistResult = () => {
//   return(
//     <>
//       <div className="artists">
//         <div className="flex1"><h1>Artists</h1></div>
//         <div className="flex2">{renderArtists()}</div>
//       </div>
//     </>
//   );
// }
  return (
    <>
      <div className="search-container">
        {/* {!token ?
                      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}  >Login
                          to Song Cloud</a>
                      : <button onClick={logout} className="logout-btn">Logout</button>} */}

                  {token ?
                      <form onSubmit={searchArtists} className="searchElement">
                          <input type="text" onChange={e => setSearchKey(e.target.value)} className="input" placeholder='Search Artists/Songs/Albums'/>
                          <button type={"submit"} className="submit-btn">Search</button>
                      </form>

                      : <h2>Please login</h2>
                  }

      </div>
      <div className="search-results">
        {renderArtists()}
      </div>
    </>
  )
}

export default Search