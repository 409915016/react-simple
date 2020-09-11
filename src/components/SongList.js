import React, { useState, useEffect } from 'react';
import {v1 as uuid} from 'uuid'
import NewSongForm from './newSongForm';

const SongList = () => {

  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1},
    { title: 'memory gospe', id: 2},
    { title: 'this wild darkness', id: 3}
  ]);
  const [age, setAge] = useState(20)

  useEffect(() => {
    console.log('useEffcet hook ran', songs)
  }, [songs])

  
  useEffect(() => {
    console.log('useEffcet hook ran', age)
  }, [age])

  const addSong = (title) =>{
    setSongs([...songs, {title, id: uuid()}])
  }
  
  return (  
    <div className="song-list">
      <ul>
        { songs.map(i=>{
          return (<li key={i.id}> { i.title }</li>)
        })}
      </ul>
      <NewSongForm addSong={ addSong }/>
      <button onClick={ () => setAge(age +1 )}>Add 1 to age: {age}</button>
    </div>
  );
}
 
export default SongList;


