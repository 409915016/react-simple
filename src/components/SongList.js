import React, { useState } from 'react';
import {v1 as uuid} from 'uuid'

const SongList = () => {


  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1},
    { title: 'memory gospe', id: 2},
    { title: 'this wild darkness', id: 3}
  ]);

  const addSong = () =>{
    setSongs([...songs, {title: 'new song', id: uuid()}])
  }
  
  return (  
    <div className="song-list">
      <ul>
        { songs.map(i=>{
          return (<li key={i.id}> { i.title }</li>)
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
}
 
export default SongList;


